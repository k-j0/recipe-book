
import { Ingredient } from "./ingredient.ts";

export const ingredients: Ingredient[] = [];

function ingr (name: string) {
    const ingredient = new Ingredient(null, name);
    ingredients.push(ingredient);
    return ingredient;
}

export const water = ingr('water');
export const iceCube = ingr('ice cube');

export const cookingOil = ingr('cooking oil');
export const oliveOil = ingr('olive oil');
export const butter = ingr('butter');

export const onion = ingr('onion');
export const redOnion = ingr('red onion');
export const greenOnion = ingr('green onion');
export const garlic = ingr('garlic');
export const ginger = ingr('ginger');
export const celery = ingr('celery');
export const carrot = ingr('carrot');
export const courgette = ingr('courgette');
export const aubergine = ingr('aubergine');
export const potato = ingr('potato');
export const broccoli = ingr('broccoli');
export const broccolini = ingr('broccolini');
export const cauliflower = ingr('cauliflower');
export const kale = ingr('kale');
export const spinach = ingr('spinach');
export const cabbage = ingr('cabbage');
export const chineseCabbage = ingr('chinese cabbage');
export const bokChoy = ingr('bok choy');
export const tomato = ingr('tomato');
export const cherryTomato = ingr('cherry tomato');
export const chiliPepper = ingr('chili pepper');
export const bellPepper = ingr('bell pepper');
export const mushroom = ingr('mushroom');
export const shiitake = ingr('shiitake');
export const cucumber = ingr('cucumber');
export const lettuce = ingr('lettuce');

export const freshCoriander = ingr('fresh coriander');
export const freshParsley = ingr('fresh parsley');
export const freshBasil = ingr('fresh basil');
export const freshMint = ingr('fresh mint');
export const freshRosemary = ingr('fresh rosemary');
export const freshDill = ingr('fresh dill');

export const apple = ingr('apple');
export const pear = ingr('pear');
export const rhubarb = ingr('rhubarb');
export const raspberry = ingr('raspberry');
export const lemon = ingr('lemon');
export const lemonJuice = ingr('lemon juice');
export const limeJuice = ingr('lime juice');

export const oatMilk = ingr('oat milk');
export const oatCream = ingr('oat cream');
export const coconutMilk = ingr('coconut milk');
export const sourCream = ingr('sour cream');
export const cheese = ingr('cheese');
export const custard = ingr('custard');

export const pasta = ingr('pasta');
export const noodles = ingr('noodles');
export const spaghetti = ingr('spaghetti');
export const rice = ingr('rice');
export const sushiRice = ingr('sushi rice');
export const couscous = ingr('couscous');
export const quinoa = ingr('quinoa');

export const kidneyBeans = ingr('kidney beans');
export const brownBeans = ingr('brown beans');
export const blackBeans = ingr('black beans');
export const butterBeans = ingr('butter beans');
export const cannelliniBeans = ingr('cannellini beans');
export const pintoBeans = ingr('pinto beans');
export const bakedBeans = ingr('baked beans');

export const kimchi = ingr('kimchi');
export const blackOlives = ingr('black olives');
export const pickles = ingr('pickles');
export const mushroomPatty = ingr('mushroom patty');
export const seitan = ingr('seitan');

export const mapleSyrup = ingr('maple syrup');
export const flour = ingr('flour');
export const breadFlour = ingr('bread flour');
export const semolina = ingr('semolina');
export const bakingPowder = ingr('baking powder');
export const sugar = ingr('sugar');
export const powderedSugar = ingr('powdered sugar');
export const caneSugar = ingr('cane sugar');
export const chocolateChips = ingr('chocolate chips');
export const vanillaExtract = ingr('vanilla extract');
export const cocoaPowder = ingr('cocoa powder');
export const dryYeast = ingr('dry yeast');
export const cornstarch = ingr('cornstarch');
export const sunflowerSeeds = ingr('sunflower seeds');
export const pieDough = ingr('pie dough');
export const rhum = ingr('rhum');
export const coffee = ingr('coffee');
export const shreddedCoconut = ingr('shredded coconut');

export const vinegar = ingr('vinegar');
export const riceVinegar = ingr('rice vinegar');
export const coconutAminos = ingr('coconut aminos');
export const ketchup = ingr('ketchup');
export const mayo = ingr('mayo');
export const mustard = ingr('mustard');
export const tomatoPaste = ingr('tomato paste');
export const choppedTomatoes = ingr('chopped tomatoes');
export const tomatoSauce = ingr('tomato sauce');
export const sundriedTomatoes = ingr('sundried tomatoes');
export const rostadLök = ingr('rostad lök (fried onions)');
export const nutritionalYeast = ingr('nutritional yeast');

export const bread = ingr('bread');
export const burgerBuns = ingr('burger buns');
export const roti = ingr('roti');

export const soupCube = ingr('soup cube');
export const stock = ingr('stock');
export const vegeta = ingr('vegeta');
export const burritoSeasoning = ingr('burrito seasoning');
export const nori = ingr('nori');
export const sriracha = ingr('sriracha');
export const cumin = ingr('cumin');
export const paprika = ingr('paprika');
export const chiliPowder = ingr('chili powder');
export const curryPowder = ingr('curry powder');
export const turmericPowder = ingr('turmeric powder');
export const corianderPowder = ingr('coriander powder');
export const oregano = ingr('oregano');
export const onionPowder = ingr('onion powder');
export const garlicPowder = ingr('garlic powder');
export const corianderSeeds = ingr('coriander seeds');
export const cuminSeeds = ingr('cumin seeds');
export const driedThyme = ingr('dried thyme');
export const driedParsley = ingr('dried parsley');
export const bayLeaf = ingr('bay leaf');
export const salt = ingr('salt');
export const seaSalt = ingr('sea salt (flaky)');
export const blackPepper = ingr('black pepper');
