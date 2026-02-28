
import { recipes } from './recipes.ts';

export async function main () {
    const container = globalThis.document.getElementById('container')!;
    
    const h2 = globalThis.document.createElement('h2');
    h2.innerText = 'Recipes';
    container.append(h2);
    
    for (const recipe of recipes) {
        const a = globalThis.document.createElement('a');
        a.href = `/recipe.html?${recipe.id}`;
        a.innerText = recipe.name;
        a.style.display = 'block';
        container.append(a);
    }
}
