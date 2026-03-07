
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
        img.src = `/assets/${category}.png`;
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
    
    for (const recipe of recipes.filter(r => r.category === category)) {
        const a = globalThis.document.createElement('a');
        a.href = 'javascript:void(0)';
        a.addEventListener('click', () => {
            history.replaceState({}, '', `${globalThis.location.pathname}?${recipe.id}`);
            showRecipe(contentDiv, recipe);
        });
        a.innerText = recipe.name;
        a.style.display = 'block';
        contentDiv.append(a);
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
