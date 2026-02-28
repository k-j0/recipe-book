
import type { Ingredient } from "./ingredient.ts";
import { AddIngredientsStep } from "./recipe-step.ts";

export class IngredientCollection {
    
    constructor (readonly ingredients: Ingredient[]){}
    
    addTo (to: string) {
        return new AddIngredientsStep(this.ingredients, to);
    }
    
    and (other: Ingredient) {
        return new IngredientCollection([...this.ingredients, other]);
    }
    
}
