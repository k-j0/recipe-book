
import { Ingredient } from "./ingredient.ts";
import { StringUtils } from "./string-utils.ts";

export abstract class RecipeStep {
    
    get associatedIngredients (): Ingredient[] {
        return [];
    }
    
    abstract toString (): string;
    
}

export class AddIngredientsStep extends RecipeStep {
    
    constructor (readonly ingredients: Ingredient[], readonly to: string) {
        super();
    }
    
    override get associatedIngredients () {
        return this.ingredients;
    }
    
    override toString () {
        return `Add ${StringUtils.join(this.ingredients.map(ingredient => {
            if (ingredient.qty !== null && ingredient.qty[1] === Ingredient.QtyUnit.Pcs && ingredient.qty[0] !== 1) {
                return ingredient.name + 's';
            } else {
                return ingredient.name;
            }
        }))} to ${this.to}`;
    }
    
}
