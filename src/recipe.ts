
import { Ingredient } from "./ingredient.ts";
import { ingredients } from "./ingredients.ts";
import { RecipeStep } from "./recipe-step.ts";

export class Recipe {
    
    constructor (readonly name: string, readonly category: Recipe.Category, readonly steps: (RecipeStep | string)[], readonly additionalIngredients: (Ingredient | Recipe)[] = []) {}
    
    get id () {
        return this.name.toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[àáâãä]/g, 'a')
            .replace(/å/g, 'aa')
            .replace(/æ/g, 'ae')
            .replace(/ç/g, 'c')
            .replace(/[èéêë]/g, 'e')
            .replace(/[ìíîï]/g, 'i')
            .replace(/ñ/g, 'n')
            .replace(/[òóôõ]/g, 'o')
            .replace(/[öø]/g, 'oe')
            .replace(/[ùúûü]/g, 'u')
            .replace(/[ýÿ]/g, 'y')
            .replace(/þ/g, 'th')
            .replace(/ß/g, 'ss')
            .replace(/[^a-z\s]/g, '')
            .trim()
            .replace(/\s/g, '-');
    }
    
    get ingredients (): (Ingredient | Recipe)[] {
        return [
            ...this.steps.flatMap(s => s instanceof RecipeStep ? s.associatedIngredients : []),
            ...this.additionalIngredients,
        ];
    }
    
    toHtml () {
        const div = globalThis.document.createElement('div');
        
        const title = globalThis.document.createElement('h2');
        title.innerText = this.name;
        div.append(title);
        
        const img = new Image;
        img.src = `../recipes/${this.id}.png`;
        img.className = 'recipe-img';
        img.style.display = 'none';
        img.addEventListener('load', () => img.style.display = 'block');
        div.append(img);
        
        const shareData = { url: `${globalThis.location.pathname}?${this.id}` };
        if ('canShare' in globalThis.navigator && 'share' in globalThis.navigator && globalThis.navigator.canShare(shareData)) {
            const share = globalThis.document.createElement('a');
            share.href = 'javascript:void(0)';
            share.innerText = 'Share';
            share.addEventListener('click', async () => {
                try {
                    await globalThis.navigator.share(shareData);
                } catch (err) {
                    console.error(`Failed to share recipe url:`, err);
                }
            });
            div.append(share);
        }
        
        const ingredientsTitle = globalThis.document.createElement('h3');
        ingredientsTitle.innerText = 'Ingredients';
        div.append(ingredientsTitle);
        
        const allIngredients = [
            ...this.ingredients.filter(ingr => ingr instanceof Ingredient).sort((a, b) => ingredients.indexOf(a.original) - ingredients.indexOf(b.original)),
            ...this.ingredients.filter(ingr => ingr instanceof Recipe),
        ];
        const ingredientsContainer = globalThis.document.createElement('div');
        for (let i = 0; i < allIngredients.length; ++i) {
            const ingredient = allIngredients[i];
            const p = globalThis.document.createElement('p');
            const checkbox = globalThis.document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `ingredient-${i}`;
            checkbox.checked = false;
            p.append(checkbox);
            
            let label: HTMLElement;
            if (ingredient instanceof Ingredient) {
                label = globalThis.document.createElement('label');
                label.setAttribute('for', `ingredient-${i}`);
                label.innerText = ingredient.toString();
            } else {
                const a = globalThis.document.createElement('a');
                a.innerText = ingredient.name;
                a.href = `${globalThis.location.pathname}?${ingredient.id}`;
                label = a;
            }
            
            label.style.paddingLeft = '.5em';
            p.append(label);
            checkbox.addEventListener('change', () => {
                label.style.textDecoration = checkbox.checked ? 'line-through' : 'unset';
            });
            ingredientsContainer.append(p);
        }
        div.append(ingredientsContainer);
        
        const stepsTitle = globalThis.document.createElement('h3');
        stepsTitle.innerText = 'Steps';
        div.append(stepsTitle);
        
        const steps = globalThis.document.createElement('ol');
        for (const step of this.steps) {
            const li = globalThis.document.createElement('li');
            if (typeof step === 'string') {
                li.innerText = step;
            } else {
                li.innerText = step.toString();
            }
            let struck = false;
            li.addEventListener('click', () => {
                struck = !struck;
                li.style.textDecoration = struck ? 'line-through' : 'unset';
            });
            steps.append(li);
        }
        div.append(steps);
        
        return div;
    }
    
}

export namespace Recipe {
    
    export enum Category {
        Meal = 'meal',
        Side = 'side',
        Dessert = 'dessert',
        Breakfast = 'breakfast',
        Drink = 'drink',
        Component = 'component',
    }
    
}
