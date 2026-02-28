
import { apple, aubergine, blackPepper, broccoli, brownBeans, burritoSeasoning, butterBeans, carrot, celery, chiliPepper, chiliPowder, chineseCabbage, coconutAminos, coconutMilk, cookingOil, corianderSeeds, couscous, cumin, cuminSeeds, freshParsley, garlic, garlicPowder, ginger, greenOnion, kale, kimchi, lemonJuice, limeJuice, mapleSyrup, mushroom, noodles, nori, oatCream, oliveOil, onion, oregano, paprika, rice, salt, soupCube, spaghetti, spinach, sriracha, stock, tomato, vegeta, vinegar, water } from "./ingredients.ts";
import { Recipe } from "./recipe.ts";

export const recipes = [
    new Recipe('Soupy Noodles', Recipe.Category.Meal, [
        'Heat wok',
        cookingOil.addTo('wok'),
        onion.take(1).chopped()
            .and(celery.take(4, 'stalks').chopped())
            .and(ginger.minced())
            .and(carrot.take(2).chopped())
            .addTo('wok'),
        cumin
            .and(chiliPowder)
            .and(blackPepper)
            .and(garlicPowder)
            .and(salt)
            .addTo('wok'),
        broccoli.take(1).chopped()
            .and(greenOnion.take(4).chopped())
            .addTo('wok'),
        water
            .and(vegeta)
            .and(burritoSeasoning)
            .addTo('wok'),
        soupCube.take(1).chopped()
            .and(chineseCabbage.take(1).chopped())
            .and(chiliPepper.take(1).chopped().optional())
            .addTo('wok'),
        'Simmer until soft, stirring regularly',
        tomato.take(3).chopped()
            .and(sriracha)
            .and(lemonJuice)
            .and(nori.crumbled())
            .addTo('wok'),
        coconutAminos.addTo('wok'),
        noodles.cooked().addTo('wok'),
        'Serve & enjoy :)',
    ]),
    new Recipe('Kimchi Fried Rice', Recipe.Category.Meal, [
        'Heat wok',
        cookingOil.addTo('wok'),
        onion.take(1).chopped().addTo('wok'),
        ginger.minced()
            .and(carrot.take(1).chopped())
            .and(broccoli.take(1).chopped())
            .addTo('wok'),
        'Cook until soft',
        chineseCabbage.take(1).chopped()
            .and(mushroom.g(250).chopped())
            .and(spinach)
            .addTo('wok'),
        kimchi.addTo('wok'),
        sriracha.tbsp(4)
            .and(mapleSyrup.tbsp(2))
            .and(coconutAminos.tbsp(2))
            .addTo('a bowl and stir to combine'),
        rice.cooked().addTo('a pan and fry, then add to wok'),
        paprika.and(salt).and(blackPepper).addTo('wok'),
        'Mix in sauce',
        greenOnion.take(4).chopped().addTo('wok'),
        'Serve & enjoy :)',
    ]),
    new Recipe('Shroom sauce spag', Recipe.Category.Meal, [
        cookingOil
            .and(onion.take(1).chopped())
            .and(mushroom.g(250).minced())
            .addTo('pan'),
        'Cook until soft',
        oatCream.ml(500)
            .and(garlicPowder)
            .and(salt)
            .and(blackPepper)
            .addTo('pan'),
        'Add spaghetti cooking water',
        'Serve with spaghetti & enjoy :)',
    ], [
        spaghetti,
    ]),
    new Recipe('Aubergine Stew & Couscous', Recipe.Category.Meal, [
        'Heat wok',
        cookingOil
            .and(aubergine.take(2).chopped())
            .and(oregano)
            .addTo('wok'),
        onion.take(2).chopped().addTo('wok'),
        tomato.take(5).chopped().addTo('wok'),
        salt
            .and(blackPepper)
            .and(freshParsley)
            .and(vinegar)
            .and(brownBeans.optional())
            .addTo('wok'),
        'Serve with couscous and a little olive oil on top & enjoy :)',
    ], [
        couscous,
        oliveOil,
    ]),
    new Recipe('Coconut, White Bean and Celery Soup', Recipe.Category.Meal, [
        'Heat a large pot over medium heat',
        cookingOil.addTo('pot'),
        corianderSeeds.tsp(2)
            .and(cuminSeeds.tsp(2))
            .addTo('pot and fry until fragrant'),
        onion.take(1).chopped().addTo('pot and cook until soft'),
        celery.take(1, 'bunch').chopped()
            .and(garlic.take(3, 'cloves').minced())
            .and(apple.take(1).chopped())
            .and(ginger.tbsp(2).minced())
            .addTo('pot aand cook until soft'),
        butterBeans.take(2, 'tins')
            .and(stock.ml(1250))
            .addTo('pot and bring to boil'),
        'Lower to a simmer, stirring occasionally',
        salt.and(blackPepper).addTo('pot'),
        'Wait for soup to thicken',
        coconutMilk.take(1, 'tin')
            .and(kale.optional())
            .and(spinach.optional())
            .addTo('pot and turn heat to low'),
        limeJuice.take(1, 'lime worth of')
            .addTo('pot while the greens cook'),
        'Blend the soup a little (optional), in which case reserve half the greens to add after blending',
        'Serve & enjoy :)',
    ]),
];
