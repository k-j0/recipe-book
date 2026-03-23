
import TomSelect from 'tom-select';
import 'tom-select/dist/css/tom-select.css';
import { ingredients } from './ingredients.ts';
import { Recipe } from './recipe.ts';
import { recipes } from './recipes.ts';
import { StringUtils } from './string-utils.ts';

const baseUrl = globalThis.location.pathname;

function navigate (state: Record<string, any>, url: string, push: boolean) {
    if (push) {
        globalThis.history.pushState(state, '', url);
    } else {
        globalThis.history.replaceState(state, '', url);
    }
}

function showMainMenu (contentDiv: HTMLDivElement, pushToHistory: boolean) {
    contentDiv.innerHTML = '';
    
    navigate({ mainMenu: true }, baseUrl, pushToHistory);
    
    const lastVisitNumRecipes = globalThis.parseInt(globalThis.localStorage.getItem('numRecipes') ?? '-1');
    if (lastVisitNumRecipes < recipes.length) {
        globalThis.localStorage.setItem('numRecipes', ''+recipes.length);
        if (lastVisitNumRecipes > 0) {
            const newRecipes = recipes.slice(lastVisitNumRecipes);
            const newRecipeContainer = globalThis.document.createElement('div');
            newRecipeContainer.style.background = '#f002';
            newRecipeContainer.style.padding = '1em';
            
            const h2 = globalThis.document.createElement('h2');
            h2.innerText = 'New since your last visit';
            newRecipeContainer.append(h2);
            
            const ul = globalThis.document.createElement('ul');
            for (const recipe of newRecipes) {
                const li = globalThis.document.createElement('li');
                const a = globalThis.document.createElement('a');
                a.innerText = recipe.name;
                a.href = `${globalThis.location.pathname}?${recipe.id}`;
                li.append(a);
                ul.append(li);
            }
            newRecipeContainer.append(ul);
            
            contentDiv.append(newRecipeContainer);
        }
    }
    
    const categoryGrid = globalThis.document.createElement('div');
    categoryGrid.classList.add('categories');
    for (const key of Object.keys(Recipe.Category)) {
        const category: Recipe.Category = (Recipe.Category as any)[key];
        const a = globalThis.document.createElement('a');
        a.href = `${baseUrl}?${category}`;
        a.addEventListener('click', (e) => {
            showCategoryMenu(contentDiv, category, true);
            e.preventDefault();
        });
        
        const img = new Image;
        img.src = `${category}.png`;
        a.append(img);
        
        a.append(globalThis.document.createTextNode(StringUtils.capitalize(category + 's')));
        
        categoryGrid.append(a);
    }
    contentDiv.append(categoryGrid);
}

function showCategoryMenu (contentDiv: HTMLDivElement, category: Recipe.Category, pushToHistory: boolean) {
    contentDiv.innerHTML = '';
    
    navigate({ category }, `${baseUrl}?${category}`, pushToHistory);
    
    const back = globalThis.document.createElement('a');
    back.innerText = `Main menu`;
    back.href = baseUrl;
    back.addEventListener('click', e => {
        showMainMenu(contentDiv, true);
        e.preventDefault();
    });
    contentDiv.append(back);
    
    const h2 = globalThis.document.createElement('h2');
    h2.innerText = StringUtils.capitalize(category) + ' recipes';
    contentDiv.append(h2);
    
    const recipeElems = recipes.filter(r => r.category === category).map(recipe => {
        const a = globalThis.document.createElement('a');
        a.href = `${baseUrl}?${recipe.id}`;
        a.addEventListener('click', (e) => {
            showRecipe(contentDiv, recipe, true);
            e.preventDefault();
        });
        a.innerText = recipe.name;
        a.style.display = 'block';
        return [recipe, a] as const;
    });
    
    const uniqueIngredients = [...new Set(
        recipeElems.flatMap(([recipe, _]) => recipe.ingredients.map(ingr => ingr.original))
    )].sort((a, b) =>
        ingredients.indexOf(a) - ingredients.indexOf(b)
    );
    const ingredientFilterElem = globalThis.document.createElement('input');
    ingredientFilterElem.id = 'ingredient-filter';
    contentDiv.append(ingredientFilterElem);
    new TomSelect('#ingredient-filter', {
        placeholder: 'Filter by ingredients...',
        hidePlaceholder: true,
        clearAfterSelect: true,
        options: uniqueIngredients.map((ingredient, i) => ({
            text: ingredient.toString(),
            value: i,
        })),
        sortField: [{ field: '$order' }, { field: '$score' }], // disable auto-sorting
        onChange: (value: string) => {
            const ingredients = value.split(',').map(idx => uniqueIngredients[globalThis.parseInt(idx)]).filter(ingr => ingr !== undefined);
            for (const [recipe, elem] of recipeElems) {
                let hasAll = true;
                for (const ingredient of ingredients) {
                    if (!recipe.ingredients.find(ingr => ingr.original === ingredient)) {
                        hasAll = false;
                        break;
                    }
                }
                elem.style.display = hasAll ? 'block' : 'none';
            }
        },
    });
    
    for (const [_, elem] of recipeElems) {
        contentDiv.append(elem);
    }
}

function showRecipe (contentDiv: HTMLDivElement, recipe: Recipe, pushToHistory: boolean) {
    contentDiv.innerHTML = '';
    
    navigate({ recipe: recipe.id }, `${baseUrl}?${recipe.id}`, pushToHistory);
    
    const back = globalThis.document.createElement('a');
    back.innerText = `Back to ${recipe.category}s`;
    back.href = `${baseUrl}?${recipe.category}`;
    back.addEventListener('click', e => {
        showCategoryMenu(contentDiv, recipe.category, true);
        e.preventDefault();
    });
    contentDiv.append(back);
    
    contentDiv.append(recipe.toHtml());
}

export async function main () {
    
    const contentDiv = globalThis.document.getElementById('content');
    if (contentDiv === null || !(contentDiv instanceof HTMLDivElement)) {
        throw new Error(`No #content found in DOM`);
    }
    
    globalThis.addEventListener('popstate', event => {
        const state = 'state' in event ? event.state : undefined;
        if (typeof state === 'object' && state !== null) {
            if ('mainMenu' in state) {
                showMainMenu(contentDiv, false);
                return;
            } else if ('category' in state) {
                showCategoryMenu(contentDiv, state.category as Recipe.Category, false);
                return;
            } else if ('recipe' in state) {
                const recipe = recipes.find(recipe => recipe.id === state.recipe);
                if (recipe) {
                    showRecipe(contentDiv, recipe, false);
                }
                return;
            }
        }
        throw new Error(`Invalid state passed to popstate: ${JSON.stringify(state)}`);
    });
    
    const url = ''+globalThis.location;
    const questionMarkIdx = url.lastIndexOf('?');
    const param = url.substring(questionMarkIdx+1);
    const recipe = recipes.find(recipe => recipe.id === param);
    if (recipe) {
        showRecipe(contentDiv, recipe, false);
        return;
    }
    const category = Object.keys(Recipe.Category).map(key => (Recipe.Category as any)[key]).includes(param) ? param as Recipe.Category : null;
    if (category) {
        showCategoryMenu(contentDiv, category, false);
        return;
    }
    showMainMenu(contentDiv, false);
}
