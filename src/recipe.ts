
import { Ingredient } from "./ingredient.ts";
import { ingredients } from "./ingredients.ts";
import { RecipeStep } from "./recipe-step.ts";

export class Recipe {
    
    constructor (readonly name: string, readonly category: Recipe.Category, readonly steps: (RecipeStep | string)[], readonly additionalIngredients: Ingredient[] = []) {}
    
    toHtml () {
        const div = globalThis.document.createElement('div');
        
        const title = globalThis.document.createElement('h2');
        title.innerText = this.name;
        div.append(title);
        
        const ingredientsTitle = globalThis.document.createElement('h3');
        ingredientsTitle.innerText = 'Ingredients';
        div.append(ingredientsTitle);
        
        const allIngredients = [
            ...this.steps.flatMap(s => s instanceof RecipeStep ? s.associatedIngredients : []),
            ...this.additionalIngredients,
        ];
        allIngredients.sort((a, b) => ingredients.indexOf(a.original) - ingredients.indexOf(b.original));
        const ingredientsContainer = globalThis.document.createElement('ul');
        for (const ingredient of allIngredients) {
            const li = globalThis.document.createElement('li');
            li.innerText = ingredient.toString();
            ingredientsContainer.append(li);
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
            steps.append(li);
        }
        div.append(steps);
        
        return div;
    }
    
}

export namespace Recipe {
    
    export enum Category {
        Meal,
        Side,
        Dessert,
        Drink,
    }
    
}
