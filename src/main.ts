
import TomSelect from 'tom-select';
import 'tom-select/dist/css/tom-select.css';
import { ingredients } from './ingredients.ts';
import { Recipe } from './recipe.ts';
import { recipes } from './recipes.ts';
import { StringUtils } from './string-utils.ts';

function showBackButton (contentDiv: HTMLDivElement, text: string, cb: () => void) {
    const back = globalThis.document.createElement('a');
    back.href = 'javascript:void(0)';
    back.innerText = text;
    back.addEventListener('click', cb);
    contentDiv.append(back);
}

function showMainMenu (contentDiv: HTMLDivElement) {
    contentDiv.innerHTML = '';
    
    const categoryGrid = globalThis.document.createElement('div');
    categoryGrid.classList.add('categories');
    for (const key of Object.keys(Recipe.Category)) {
        const category: Recipe.Category = (Recipe.Category as any)[key];
        const a = globalThis.document.createElement('a');
        a.href = 'javascript:void(0)';
        a.addEventListener('click', () => showCategoryMenu(contentDiv, category));
        
        const img = new Image;
        img.src = `${category}.png`;
        a.append(img);
        
        a.append(globalThis.document.createTextNode(StringUtils.capitalize(category + 's')));
        
        categoryGrid.append(a);
    }
    contentDiv.append(categoryGrid);
}

function showCategoryMenu (contentDiv: HTMLDivElement, category: Recipe.Category) {
    contentDiv.innerHTML = '';
    
    showBackButton(contentDiv, 'Main menu', () => showMainMenu(contentDiv));
    
    const h2 = globalThis.document.createElement('h2');
    h2.innerText = StringUtils.capitalize(category) + ' recipes';
    contentDiv.append(h2);
    
    const recipeElems = recipes.filter(r => r.category === category).map(recipe => {
        const a = globalThis.document.createElement('a');
        a.href = 'javascript:void(0)';
        a.addEventListener('click', () => {
            history.replaceState({}, '', `${globalThis.location.pathname}?${recipe.id}`);
            showRecipe(contentDiv, recipe);
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

function showRecipe (contentDiv: HTMLDivElement, recipe: Recipe) {
    contentDiv.innerHTML = '';
    
    showBackButton(contentDiv, `Back to ${recipe.category}s`, () => {
        history.replaceState({}, '', globalThis.location.pathname);
        showCategoryMenu(contentDiv, recipe.category);
    });
    
    contentDiv.append(recipe.toHtml());
}

export async function main () {
    
    const contentDiv = globalThis.document.getElementById('content');
    if (contentDiv === null || !(contentDiv instanceof HTMLDivElement)) {
        throw new Error(`No #content found in DOM`);
    }
    
    const url = ''+globalThis.location;
    const questionMarkIdx = url.lastIndexOf('?');
    const recipeId = url.substring(questionMarkIdx+1);
    const recipe = recipes.find(recipe => recipe.id === recipeId);
    if (recipe) {
        showRecipe(contentDiv, recipe);
    } else {
        showMainMenu(contentDiv);
    }
}
