
import { IngredientCollection } from "./ingredient-collection.ts";
import { AddIngredientsStep } from "./recipe-step.ts";

export class Ingredient {
    
    readonly original: Ingredient;
    
    constructor (original: Ingredient | null, readonly name: string, readonly qty: [number, Ingredient.QtyUnit | string] | null = null, readonly state: Ingredient.State | null = null, readonly isOptional = false) {
        this.original = original ?? this;
    }
    
    take (pcs: number, unit: string | Ingredient.QtyUnit.Pcs = Ingredient.QtyUnit.Pcs) {
        return new Ingredient(this.original, this.name, [pcs, unit], this.state, this.isOptional);
    }
    
    g (g: number) {
        return new Ingredient(this.original, this.name, [g, Ingredient.QtyUnit.Grams], this.state, this.isOptional);
    }
    
    ml (ml: number) {
        return new Ingredient(this.original, this.name, [ml, Ingredient.QtyUnit.Millilitres], this.state, this.isOptional);
    }
    
    tbsp (tbsp: number) {
        return new Ingredient(this.original, this.name, [tbsp, Ingredient.QtyUnit.Tbsp], this.state, this.isOptional);
    }
    
    tsp (tsp: number) {
        return new Ingredient(this.original, this.name, [tsp, Ingredient.QtyUnit.Tsp], this.state, this.isOptional);
    }
    
    private withState (state: Ingredient.State) {
        return new Ingredient(this.original, this.name, this.qty, state, this.isOptional);
    }
    
    chopped () {
        return this.withState(Ingredient.State.Chopped);
    }
    
    minced () {
        return this.withState(Ingredient.State.Minced);
    }
    
    crumbled () {
        return this.withState(Ingredient.State.Crumbled);
    }
    
    cooked () {
        return this.withState(Ingredient.State.Cooked);
    }
    
    juiced () {
        return this.withState(Ingredient.State.Juiced);
    }
    
    iceCold () {
        return this.withState(Ingredient.State.IceCold);
    }
    
    melted () {
        return this.withState(Ingredient.State.Melted);
    }
    
    pierced () {
        return this.withState(Ingredient.State.Pierced);
    }
    
    shredded () {
        return this.withState(Ingredient.State.Shredded);
    }
    
    halved () {
        return this.withState(Ingredient.State.Halved);
    }
    
    grated () {
        return this.withState(Ingredient.State.Grated);
    }
    
    sliced () {
        return this.withState(Ingredient.State.Sliced);
    }
    
    julienned () {
        return this.withState(Ingredient.State.Julienned);
    }
    
    dry () {
        return this.withState(Ingredient.State.Dry);
    }
    
    optional () {
        return new Ingredient(this.original, this.name, this.qty, this.state, true);
    }
    
    addTo (to: string) {
        return new AddIngredientsStep([this], to);
    }
    
    and (other: Ingredient) {
        return new IngredientCollection([this, other]);
    }
    
    toString () {
        let ret = '';
        
        if (this.qty !== null) {
            if (typeof this.qty[1] === 'string') {
                ret += `${this.qty[0]} ${this.qty[1]} `;
            } else {
                switch (this.qty[1]) {
                    case Ingredient.QtyUnit.Pcs:
                        ret += `${this.qty[0]} `;
                        break;
                    case Ingredient.QtyUnit.Grams:
                        ret += `${this.qty[0]}g `;
                        break;
                    case Ingredient.QtyUnit.Millilitres:
                        ret += `${this.qty[0]}ml `;
                        break;
                    case Ingredient.QtyUnit.Tbsp:
                        ret += `${this.qty[0]}tbsp `;
                        break;
                    case Ingredient.QtyUnit.Tsp:
                        ret += `${this.qty[0]}tsp `;
                        break;
                    default:
                        this.qty[1] satisfies never;
                }
            }
        }
        
        if (this.state !== null) {
            switch (this.state) {
                case Ingredient.State.Chopped:
                    ret += 'chopped ';
                    break;
                case Ingredient.State.Minced:
                    ret += 'minced ';
                    break;
                case Ingredient.State.Crumbled:
                    ret += 'crumbled ';
                    break;
                case Ingredient.State.Cooked:
                    ret += 'cooked ';
                    break;
                case Ingredient.State.Juiced:
                    ret += 'juiced ';
                    break;
                case Ingredient.State.IceCold:
                    ret += 'ice-cold ';
                    break;
                case Ingredient.State.Melted:
                    ret += 'melted ';
                    break;
                case Ingredient.State.Pierced:
                    ret += 'pierced ';
                    break;
                case Ingredient.State.Shredded:
                    ret += 'shredded ';
                    break;
                case Ingredient.State.Halved:
                    ret += 'halved ';
                    break;
                case Ingredient.State.Grated:
                    ret += 'grated ';
                    break;
                case Ingredient.State.Sliced:
                    ret += 'sliced ';
                    break;
                case Ingredient.State.Julienned:
                    ret += 'julienned ';
                    break;
                case Ingredient.State.Dry:
                    ret += 'dry ';
                    break;
                default:
                    this.state satisfies never;
            }
        }
        
        ret += this.name;
        
        if (this.isOptional) {
            ret += ` (optional)`;
        }
        
        return ret;
    }
    
}

export namespace Ingredient {
    
    export enum QtyUnit {
        Pcs,
        Grams,
        Millilitres,
        Tbsp,
        Tsp,
    }
    
    export enum State {
        Chopped,
        Minced,
        Crumbled,
        Cooked,
        Juiced,
        IceCold,
        Melted,
        Pierced,
        Shredded,
        Halved,
        Grated,
        Sliced,
        Julienned,
        Dry,
    }
    
}
