
import { apple, aubergine, bakingPowder, bellPepper, blackOlives, blackPepper, bread, breadFlour, broccoli, brownBeans, burgerBuns, burritoSeasoning, butter, butterBeans, cabbage, caneSugar, carrot, cauliflower, celery, cheese, cherryTomato, chiliPepper, chiliPowder, chineseCabbage, chocolateChips, cocoaPowder, coconutAminos, coconutMilk, cookingOil, corianderSeeds, cornstarch, courgette, couscous, cucumber, cumin, cuminSeeds, dryYeast, flour, freshBasil, freshCoriander, freshMint, freshParsley, garlic, garlicPowder, ginger, greenOnion, iceCube, kale, ketchup, kidneyBeans, kimchi, lemon, lemonJuice, lettuce, limeJuice, mapleSyrup, mayo, mushroom, noodles, nori, oatCream, oatMilk, oliveOil, onion, onionPowder, oregano, paprika, pasta, potato, powderedSugar, rice, salt, soupCube, sourCream, spaghetti, spinach, sriracha, stock, sugar, sunflowerSeeds, tomato, vanillaExtract, vegeta, vinegar, water } from "./ingredients.ts";
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
    new Recipe('Pannenkoeken', Recipe.Category.Breakfast, [
        flour.g(150)
            .and(bakingPowder.tsp(2))
            .and(salt)
            .addTo('a mixing bowl and mix'),
        oatMilk.ml(300)
            .and(cookingOil.tbsp(2))
            .addTo('mixing bowl and mix'),
        'Let rest for 5 minutes',
        'Add a bit of oil into a pancake pan and warm for at least 5 minutes',
        'Cook pancakes',
        'Serve & enjoy :)',
    ]),
    new Recipe('Lemonade', Recipe.Category.Drink, [
        sugar.g(350)
            .and(water.ml(240))
            .addTo('a small pot, boil while mixing to dissolve sugar, and set aside to cool'),
        lemon.take(9).juiced()
            .and(water.ml(1600).iceCold())
            .addTo('a pitcher, along with the syrup'),
        iceCube.take(10).addTo('pitcher'),
        'Serve & enjoy :)',
    ]),
    new Recipe('Chocolate Chip Cookies', Recipe.Category.Dessert, [
        flour.g(120)
            .and(bakingPowder.tsp(.5))
            .and(salt.tsp(.25))
            .and(sugar.g(50))
            .and(caneSugar.g(45))
            .and(chocolateChips.g(60))
            .and(oatMilk.tbsp(2))
            .and(butter.tbsp(2).melted())
            .and(vanillaExtract.tsp(.25))
            .addTo('a mixing bowl, and stir to form a wet dough'),
        'Freeze or refrigerate until dough is cold',
        'Preheat oven to 160°C',
        'Bake 11 mins',
        'Let cool for 10 mins',
        'Serve & enjoy :)',
    ]),
    new Recipe('Kakaós Csiga', Recipe.Category.Dessert, [
        sugar.tbsp(1)
            .and(bakingPowder.g(30))
            .and(oatMilk.ml(150))
            .addTo('a mixing bowl, mix, and let rise for 10 minutes'),
        flour.g(300)
            .and(butter.g(30).melted())
            .and(powderedSugar.g(30))
            .addTo('another bowl, mix, and add milk mixture'),
        'Knead to form a smooth dough (10-15 mins)',
        'Cover and let rise in a warm spot until doubled in volume',
        'Preheat oven to 180°C',
        butter.melted()
            .and(powderedSugar)
            .and(cocoaPowder)
            .addTo('a bowl and mix'),
        'Roll out dough and spread the chocolate mixture onto it',
        'Roll up tightly and slice into ~1cm thick snails',
        'Brush with more butter',
        'Bake for 18 mins',
        'Serve & enjoy :)',
    ]),
    new Recipe('Baked Potato', Recipe.Category.Meal, [
        'Preheat oven to 220°C',
        potato.take(2).pierced()
            .addTo('a baking tray lined with parchment paper'),
        cookingOil
            .and(salt)
            .addTo('potatoes by rubbing it around'),
        'Bake for 45 mins, until easily pierced through with a fork',
        'Let potatoes rest a few minutes',
        'Turn up oven to 250°C',
        'Cut open potatoes and mash up insides with a fork slightly',
        butter.optional()
            .and(cheese.grated())
            .addTo('potatoes and put back in the oven for 5-10 mins'),
        sourCream
            .and(greenOnion)
            .addTo('potatoes and bake again for a couple minutes'),
        'Serve & enjoy :)',
    ]),
    new Recipe('Bread', Recipe.Category.Breakfast, [
        water.ml(350)
            .and(dryYeast.tsp(2))
            .addTo('a mixing bowl and whisk'),
        'Let rest for 5 mins',
        breadFlour.g(460)
            .and(salt)
            .addTo('bowl and mix with a wooden spoon'),
        sunflowerSeeds.optional()
            .addTo('bowl'),
        'Rest dough in fridge overnight, or at room temp for a few hours',
        'Preheat oven to 220°C',
        'Bake 23 mins',
        'Let rest for at least 30 mins',
        'Serve & enjoy :)',
    ]),
    new Recipe('Cauliflower Alfredo Pasta', Recipe.Category.Meal, [
        'Preheat oven to 180°C',
        cauliflower.take(1).chopped()
            .and(garlic.take(4, 'unpeeled cloves'))
            .addTo('a roasting tray'),
        oliveOil.and(salt).addTo('tray'),
        'Roast for 20 mins',
        'Blend roasted cauliflower, squeezing in garlic flesh',
        lemon.take(.5).juiced()
            .and(soupCube.take(1))
            .and(onionPowder)
            .and(oatMilk.ml(360))
            .and(blackPepper)
            .addTo('blender and blend until creamy, adding more salt, pepper, or milk as needed'),
        spaghetti.cooked()
            .addTo('sauce in a pan and heat through'),
        freshParsley.addTo('pasta'),
        'Serve & enjoy :)',
    ]),
    new Recipe('Vanilla syrup', Recipe.Category.Drink, [
        sugar.and(water).addTo('a small pot at 1:1 quantities and heat until combined'),
        vanillaExtract.addTo('pot once off the heat and stir'),
        'Store vanilla syrup in a jar in the fridge; use in iced vanilla lattes, teas, etc',
    ]),
    new Recipe('Gazpacho', Recipe.Category.Side, [
        cucumber.take(1).chopped()
            .and(tomato.take(4).chopped())
            .and(bellPepper.take(.5).chopped())
            .and(garlic.take(2, 'cloves'))
            .and(celery.take(1, 'stalk').chopped())
            .and(lemonJuice.tbsp(1))
            .and(onion.take(.5).chopped())
            .addTo('a blender and blend'),
        vinegar.tbsp(3)
            .and(salt)
            .and(blackPepper)
            .addTo('blender and blend until smooth'),
        'Chill for at least 30 mins',
        oliveOil.optional()
            .and(freshBasil.optional())
            .and(freshParsley.optional())
            .addTo('gazpacho'),
        'Serve & enjoy :)',
    ]),
    new Recipe('Lime Coleslaw', Recipe.Category.Side, [
        cabbage.take(1).shredded()
            .and(limeJuice)
            .and(oliveOil.ml(30))
            .and(salt)
            .and(blackPepper)
            .and(garlicPowder)
            .addTo('a bowl and combine'),
        'Serve & enjoy :)',
    ]),
    new Recipe('Green Chutney', Recipe.Category.Side, [
        freshMint
            .and(freshCoriander)
            .and(ginger)
            .and(garlic)
            .and(cumin)
            .and(salt)
            .and(limeJuice)
            .and(chiliPepper.optional())
            .and(water)
            .addTo('blender and blend until coarse'),
        'Serve & enjoy :)',
    ]),
    new Recipe('Pasta Salad', Recipe.Category.Meal, [
        pasta.cooked()
            .and(cherryTomato.halved())
            .and(bellPepper.chopped())
            .and(courgette.chopped())
            .and(greenOnion.chopped())
            .and(cheese.grated())
            .and(blackOlives.halved())
            .and(freshBasil)
            .and(freshParsley)
            .and(oliveOil)
            .and(salt)
            .and(blackPepper)
            .addTo('a bowl and combine'),
        'Serve & enjoy :)',
    ]),
    new Recipe('Bean burgers', Recipe.Category.Meal, [
        kidneyBeans.take(2, 'tins')
            .addTo('a mixing bowl and mash'),
        carrot.take(1).minced().optional()
            .and(onion.take(1).chopped())
            .and(bellPepper.take(1).chopped().optional())
            .and(garlic.tbsp(1).minced())
            .addTo('bowl and combine'),
        sriracha.tbsp(6)
            .and(cornstarch.tbsp(2))
            .and(water.tbsp(2))
            .and(chiliPowder.tsp(2))
            .and(cumin.tsp(2))
            .and(coconutAminos.tsp(2))
            .and(salt)
            .and(blackPepper)
            .addTo('a separate bowl and whisk'),
        bread.take(2, 'slices').crumbled()
            .addTo('bean mixture alongside sauce and combine'),
        flour.g(190)
            .addTo('mixture and stir to form a batter'),
        'Fry burgers in a pan (freeze the rest of the batter to use at a later time)',
        cheese.sliced()
            .addTo('burgers in the pan as they finish cooking'),
        'Serve in buns with lettuce, tomatoes, ketchup and/or mayo & enjoy :)',
    ], [
        lettuce.shredded(),
        tomato.sliced(),
        ketchup,
        mayo.optional(),
        burgerBuns,
    ]),
];
