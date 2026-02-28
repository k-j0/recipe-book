
import { Ingredient } from "./ingredient.ts";

export const ingredients: Ingredient[] = [];

function ingr (name: string) {
    const ingredient = new Ingredient(null, name);
    ingredients.push(ingredient);
    return ingredient;
}

export const water = ingr('water');

export const cookingOil = ingr('cooking oil');
export const oliveOil = ingr('olive oil');

export const onion = ingr('onion');
export const garlic = ingr('garlic');
export const greenOnion = ingr('green onion');
export const ginger = ingr('ginger');
export const celery = ingr('celery');
export const carrot = ingr('carrot');
export const aubergine = ingr('aubergine');
export const broccoli = ingr('broccoli');
export const kale = ingr('kale');
export const spinach = ingr('spinach');
export const chineseCabbage = ingr('chinese cabbage');
export const tomato = ingr('tomato');
export const chiliPepper = ingr('chili pepper');
export const mushroom = ingr('mushroom');

export const freshCoriander = ingr('fresh coriander');
export const freshParsley = ingr('fresh parsley');

export const apple = ingr('apple');
export const lemonJuice = ingr('lemon juice');
export const limeJuice = ingr('lime juice');

export const oatCream = ingr('oat cream');
export const coconutMilk = ingr('coconut milk');

export const noodles = ingr('noodles');
export const spaghetti = ingr('spaghetti');
export const rice = ingr('rice');
export const couscous = ingr('couscous');

export const brownBeans = ingr('brown beans');
export const butterBeans = ingr('butter beans');

export const kimchi = ingr('kimchi');

export const mapleSyrup = ingr('maple syrup');

export const vinegar = ingr('vinegar');
export const soupCube = ingr('soup cube');
export const stock = ingr('stock');
export const vegeta = ingr('vegeta');
export const burritoSeasoning = ingr('burrito seasoning');
export const nori = ingr('nori');
export const coconutAminos = ingr('coconut aminos');
export const sriracha = ingr('sriracha');
export const cumin = ingr('cumin');
export const paprika = ingr('paprika');
export const chiliPowder = ingr('chili powder');
export const oregano = ingr('oregano');
export const garlicPowder = ingr('garlic powder');
export const corianderSeeds = ingr('coriander seeds');
export const cuminSeeds = ingr('cumin seeds');
export const salt = ingr('salt');
export const blackPepper = ingr('black pepper');
