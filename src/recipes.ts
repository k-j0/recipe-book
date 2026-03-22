
import { apple, aubergine, bakedBeans, bakingPowder, bayLeaf, bellPepper, blackOlives, blackPepper, bokChoy, bread, breadFlour, broccoli, broccolini, brownBeans, burgerBuns, burritoSeasoning, butter, butterBeans, cabbage, caneSugar, cannelliniBeans, carrot, cauliflower, celery, cheese, cherryTomato, chiliPepper, chiliPowder, chineseCabbage, chocolateChips, cocoaPowder, coconutAminos, coconutMilk, coffee, cookingOil, corianderPowder, corianderSeeds, cornstarch, courgette, couscous, cucumber, cumin, cuminSeeds, custard, driedParsley, driedThyme, dryYeast, flour, freshBasil, freshCoriander, freshDill, freshMint, freshParsley, freshRosemary, garlic, garlicPowder, ginger, greenOnion, iceCube, kale, ketchup, kidneyBeans, kimchi, lemon, lemonJuice, lettuce, limeJuice, mapleSyrup, mayo, mushroom, mushroomPatty, mustard, noodles, nori, oatCream, oatMilk, oliveOil, onion, onionPowder, oregano, paprika, pasta, pear, pickles, pieDough, pintoBeans, potato, powderedSugar, raspberry, redOnion, rhubarb, rhum, rice, riceVinegar, rostadLök, roti, salt, seaSalt, seitan, semolina, shiitake, shreddedCoconut, soupCube, sourCream, spaghetti, spinach, sriracha, stock, sugar, sundriedTomatoes, sunflowerSeeds, sushiRice, tomato, tomatoPaste, tomatoSauce, turmericPowder, vanillaExtract, vegeta, vinegar, water } from "./ingredients.ts";
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
    new Recipe('Shroom Sauce Spag', Recipe.Category.Meal, [
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
        'Serve with baked beans and more sour cream & enjoy :)',
    ], [
        bakedBeans,
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
    new Recipe('Vanilla Syrup', Recipe.Category.Component, [
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
    new Recipe('Bean Burgers', Recipe.Category.Meal, [
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
    new Recipe('Rhubarb, Apple & Pear Crumble', Recipe.Category.Dessert, [
        'Preheat oven to 200°C',
        rhubarb.g(500).chopped()
            .and(sugar.g(100))
            .addTo('a lidded pot and simmer on low heat for 15 mins'),
        apple.take(2).chopped()
            .and(pear.take(2).chopped())
            .addTo('a baking dish alongside rhubarb (can either keep rhubarb and apples/pears separate on either side, or mix them together'),
        flour.g(300)
            .and(butter.g(150).iceCold())
            .addTo('a mixing bowl and rub with fingers until reaching a breadcrumb consistency'),
        'Add crumble topping to baking dish',
        caneSugar.tbsp(5)
            .addTo('baking dish, sprinkling it on top of the crumble topping'),
        'Bake for 40 mins',
        'Serve with custard & enjoy :)',
    ], [
        custard,
    ]),
    new Recipe('Csokipite', Recipe.Category.Dessert, [
        sugar.g(50)
            .and(cornstarch.tbsp(4))
            .and(cocoaPowder.tbsp(3))
            .and(coconutMilk.take(1, 'tin'))
            .and(oatMilk.ml(240))
            .and(salt)
            .addTo('a pot'),
        'Whisk to combine and keep whisking on medium heat 10-15 mins while it thickens',
        'Take off heat',
        chocolateChips.g(125)
            .and(vanillaExtract.tsp(1))
            .addTo('pot and stir to combine'),
        'Chill for at least 3 hours',
        'Preheat oven to 190°C',
        pieDough.pierced().addTo('a pie dish'),
        'Bake dough in oven for 15 mins',
        'Add chocolate filling and bake for a further 15 mins',
        'Serve & enjoy :)',
    ]),
    new Recipe('Pie Dough', Recipe.Category.Component, [
        flour.g(400)
            .and(sugar.tbsp(1))
            .and(salt)
            .addTo('a mixing bowl and mix'),
        butter.tbsp(8).iceCold()
            .addTo('mixing bowl and combine'),
        water.iceCold()
            .addTo('bowl a little at a time, stirring to combine, until the dough holds together with no dry flour remaining'),
        'Refrigerate for at least 30 minutes before using',
    ]),
    new Recipe('Bok Choy and Kale Fried Rice', Recipe.Category.Meal, [
        cookingOil.tbsp(3)
            .addTo('a small pot and heat'),
        garlic.take(1, 'head').minced()
            .and(salt)
            .addTo('pot once oil is hot'),
        'Cook until garlic is golden (~10 mins)',
        'Strain garlic over wok and set aside',
        kale.chopped()
            .and(bokChoy.chopped())
            .and(broccolini.chopped().optional())
            .and(spinach.optional())
            .and(rice.cooked())
            .and(chiliPepper.minced().optional())
            .and(coconutAminos)
            .and(salt)
            .and(blackPepper)
            .addTo('wok and cook over high heat for a couple minutes'),
        'Sprinkle with fried garlic',
        'Serve & enjoy :)',
    ]),
    new Recipe('Creamy Beans & Kale Rice', Recipe.Category.Meal, [
        onion.take(1).chopped()
            .and(salt)
            .addTo('wok'),
        'Cook for a few minutes, adding water as needed',
        garlic.take(6, 'cloves').minced()
            .and(driedThyme.tbsp(1))
            .addTo('wok'),
        coconutMilk.take(1, 'tin')
            .and(soupCube.take(1))
            .and(tomatoPaste.tbsp(3))
            .and(tomatoSauce.tbsp(4))
            .and(cannelliniBeans.take(2, 'tins'))
            .and(cumin)
            .and(paprika)
            .and(blackPepper)
            .and(salt)
            .addTo('wok and stir to combine'),
        kale.g(500).chopped()
            .addTo('wok'),
        'Bring to a simmer and cook until thickened',
        'Serve with rice & enjoy :)',
    ], [
        rice.cooked(),
    ]),
    new Recipe('Cannelés', Recipe.Category.Dessert, [
        'Preheat oven to 240°C',
        flour.g(125)
            .and(caneSugar.g(250))
            .and(oatMilk.ml(250))
            .and(oatCream.ml(150))
            .and(cookingOil.ml(100))
            .and(vanillaExtract.tsp(3))
            .and(rhum.tbsp(5).optional())
            .addTo('a mixing bowl and whisk until well combined'),
        'Grease a cannelé mould with butter',
        'Pour batter into mould',
        'Bake for 10 mins',
        'Lower oven temperature to 180°C and bake for another 30 mins',
        'Let cannelés cool down fully',
        'Hold mould upside down over a large plate or chopping board to get cannelés out',
        'Serve & enjoy :)',
    ]),
    new Recipe('Töltött Káposzta', Recipe.Category.Meal, [
        redOnion.take(2).chopped()
            .and(cookingOil)
            .and(salt)
            .and(blackPepper)
            .addTo('a pan and fry for a few minutes'),
        garlic.minced()
            .addTo('pan'),
        rice.cooked()
            .and(mushroom.take(8).minced())
            .and(mushroomPatty.take(2).minced())
            .and(tomatoPaste.tbsp(4))
            .and(paprika)
            .and(bayLeaf.take(2))
            .addTo('pan, stir'),
        'Heat until warmed and set aside',
        'Remove the stem/core of the cabbage by cutting around it with a knife in a cone shape, and separate out leaves',
        'Cut off any remaining hard stem parts from the cabbage leaves',
        water.addTo('a large pot and boil'),
        cabbage.take(1)
            .addTo('pot, a few leaves at a time, cooking for 4 mins each time and setting boiled leaves aside to cool'),
        'Preheat oven to 160°C',
        'Remove bay leaves from mushroom & rice filling',
        'Roll mushroom & rice filling into cabbage leaves (as you would a burrito) and arrange into an oven dish',
        'Shred remaining cabbage, mix with any remaining filling, and add on top of arranged rolled leaves',
        'Sprinkle paprika and garlic powder on top, and cover with water',
        'Cover with aluminium foil and bake for 2 hours',
        'Serve & enjoy :)',
    ], [
        garlicPowder,
    ]),
    new Recipe('Paprikás Krumpli', Recipe.Category.Meal, [
        potato.g(350).chopped()
            .addTo('a bowl of cold water'),
        onion.take(1).chopped()
            .and(cookingOil)
            .and(salt)
            .addTo('a pot and cook on medium heat until soft'),
        paprika.addTo('pot while off the heat'),
        garlic.take(1, 'clove').minced()
            .addTo('pot, stir, and put back on the heat'),
        'Drain potatoes and add to pot',
        'Cook for a minute then fill pot with water to cover potatoes',
        salt.and(blackPepper).addTo('pot'),
        tomato.take(1).minced()
            .addTo('pot'),
        'Bring to a boil then reduce heat to a simmer for 30 mins, slightly uncovered',
        'Take off cover and turn up heat to medium',
        'Cook for 10-15 mins into a thick sauce',
        'Serve with black pepper & enjoy :)',
    ]),
    new Recipe('Vegetable Noodle Soup', Recipe.Category.Meal, [
        water.ml(1800)
            .and(soupCube.take(2))
            .and(coconutAminos.tbsp(2))
            .and(ginger.tbsp(1).minced())
            .and(sriracha)
            .addTo('wok and bring to boil'),
        garlic.take(2, 'cloves').minced()
            .and(onion.take(1).julienned())
            .and(shiitake.take(8).chopped())
            .and(bokChoy.take(2).chopped())
            .and(seitan.g(500).chopped().optional())
            .addTo('wok and cook for 5-10 mins (add bok choy leaves once stems have softened a bit)'),
        'Serve with noodles & enjoy :)',
    ], [
        noodles,
    ]),
    new Recipe('Refried Beans', Recipe.Category.Meal, [
        'Rinse the beans (no need to soak)',
        pintoBeans.g(230).dry()
            .and(onion.take(1).halved())
            .and(garlic.take(3, 'cloves'))
            .and(bayLeaf)
            .and(freshCoriander)
            .and(salt)
            .addTo('a pot, cover with water, and bring to a boil'),
        'Reduce to a simmer and cook, covered, for 2-3 hours',
        'Remove bay leaf',
        cookingOil.addTo('a wok and heat over medium heat'),
        onion.take(1).chopped().addTo('wok'),
        garlic.take(1, 'clove').minced()
            .and(cumin)
            .and(paprika)
            .and(blackPepper)
            .addTo('wok'),
        'Add the beans (without too much of the water), and mash them',
        'Keep cooking for a few minutes, adding more of the bean cooking water if it looks a bit dry',
        limeJuice.addTo('beans'),
        'Serve & enjoy :)',
    ], [
        water,
    ]),
    new Recipe('Chow Mein', Recipe.Category.Meal, [
        cookingOil
            .and(seitan.chopped())
            .addTo('a wok and cook until golden, then set seitan aside in a bowl'),
        chineseCabbage.take(.5).sliced()
            .and(carrot.take(2).julienned())
            .and(bokChoy.take(1).sliced())
            .addTo('wok (bok choy stems only) and cook for 5 mins'),
        noodles.addTo('a pot and cook'),
        'Add seitan back into wok and warm it up',
        coconutAminos.tbsp(6)
            .and(water.tbsp(4))
            .and(oliveOil.tbsp(4))
            .and(soupCube.take(1).crumbled())
            .and(cornstarch.tsp(4))
            .and(mapleSyrup.tsp(4))
            .and(sriracha.tsp(2))
            .and(riceVinegar.tsp(2))
            .addTo('a bowl and mix thoroughly'),
        'Add sauce and noodles into wok and cook another couple minutes',
        'Serve with green onions and enjoy :)',
    ], [
        greenOnion.take(4).chopped(),
    ]),
    new Recipe('Spinach & Kale Saag', Recipe.Category.Meal, [
        water.ml(240)
            .and(kale.g(350).chopped())
            .and(ginger.minced())
            .and(garlic.take(4, 'cloves'))
            .and(chiliPepper.take(2))
            .and(salt)
            .addTo('a pot and cook, covered, on medium heat for 20 mins'),
        spinach.g(300).addTo('pot and cook for another 5 mins'),
        'Blend until chunky, then bring back on low heat',
        butter.addTo('a pan and heat up'),
        cuminSeeds.addTo('pan, cooking until they start sizzling'),
        redOnion.take(1).chopped()
            .and(garlic.take(4, 'cloves').minced())
            .and(ginger.minced())
            .addTo('pan and cook until onions are soft'),
        chiliPowder.and(tomato.take(2).chopped())
            .addTo('pan and continue cooking until tomatoes break down'),
        'Mix into the saag',
        cornstarch.tbsp(3).addTo('a bowl with water and mix'),
        'Mix into the saag and cook for another few minutes, adding salt to taste',
        lemonJuice
            .and(rostadLök)
            .addTo('saag off the heat'),
        'Serve with roti and rice & enjoy :)',
    ], [
        rice,
        roti,
    ]),
    new Recipe('Corn Roti', Recipe.Category.Side, [
        cornstarch.g(240)
            .and(salt)
            .addTo('a bowl'),
        'Boil water and mix/knead into the cornstarch, a little at a time, until a firm dough forms',
        'Shape dough into small balls and flatten out onto a sheet of baking paper, aiming for even thickness',
        butter.addTo('a pan and heat up until melted'),
        'Cook each roti on each side for a few minutes, until golden and crispy',
        'Serve & enjoy :)',
    ], [
        water,
    ]),
    new Recipe('Foccaccia', Recipe.Category.Side, [
        breadFlour.g(510)
            .and(salt.g(12))
            .and(dryYeast.tsp(2))
            .addTo('a mixing bowl and whisk'),
        'Add lukewarm water (half boiled, half cold) and combine with a soft spatula',
        'Cover bowl and let it rest for 30 mins',
        'Using wet hands, stretch and fold (from sides to centre) dough until smooth',
        'Cover the surface of the dough with olive oil and rub it on',
        'Cover bowl and let it rest at room temperature for 1.5-2 hrs',
        'Grease a baking dish with butter',
        'Add 2 tbsp olive oil to baking dish',
        'Release & deflate the dough from sides of bowl with a fork, rotating the bowl and pulling the dough together to form a ball',
        'Place dough into baking dish and roll it in the oil to coat it',
        'Let rest at room temperature for 30 mins (no need to cover)',
        'Preheat oven to 220°C',
        'Rub 2 tbsp olive oil over surface of dough, creating dimples with fingers',
        freshRosemary.optional()
            .and(redOnion.take(1).sliced().optional())
            .and(blackOlives.halved().optional())
            .and(cherryTomato.halved().optional())
            .and(seaSalt)
            .addTo('top of the dough'),
        'Bake for 30 mins',
        'Let it cool for 10 mins',
        'Serve & enjoy :) (note: reheat 15 mins in oven at 175°C on subsequent days)',
    ], [
        water.ml(450),
        oliveOil,
        butter,
    ]),
    new Recipe('Tiramisu', Recipe.Category.Dessert, [
        'Ahead of time (ideally 24 hrs prior to baking), place coconut milk tins in the fridge',
        'Preheat oven to 160°C',
        flour.g(250)
            .and(bakingPowder.tsp(2))
            .and(salt.tsp(.5))
            .and(sugar.g(135))
            .addTo('a mixing bowl and whisk to combine'),
        oatMilk.ml(200)
            .and(cookingOil.ml(70))
            .and(vanillaExtract.tsp(.5))
            .addTo('bowl and whisk until fully combind'),
        'Pour onto a lined baking tray, spreading evenly to cover a rectangular area',
        'Bake until an inserted knife comes out dry (20-25 mins), then leave to cool',
        'Brew 150ml strong black coffee, add 1 tbsp sugar, and leave to cool',
        coconutMilk.g(900)
            .and(mapleSyrup.g(80))
            .and(vanillaExtract.tsp(1))
            .addTo('a mixing bowl and blend to combine (note: use the creamiest coconut milk available)'),
        'Cut sponge in half down the middle, such that each half fits neatly in the rectangular baking dish',
        'Layer the tiramisu in the baking dish: sponge, 3 tbsp coffee, half the coconut cream mixture (spread evenly), sponge, rest of the coffee, other half of the coconut cream mixture',
        'Let rest in the fridge for 6 hrs or overnight',
        'Sprinkle evenly with cocoa powder on top using a strainer',
        'Serve & enjoy :)',
    ], [
        coffee,
        cocoaPowder,
    ]),
    new Recipe('Chocolate Cake', Recipe.Category.Dessert, [
        'Preheat oven to 180°C',
        flour.g(375)
            .and(sugar.g(110))
            .and(bakingPowder.tsp(2))
            .and(salt.tsp(.5))
            .and(cocoaPowder.g(60))
            .and(water.ml(475))
            .and(cookingOil.g(145))
            .and(riceVinegar.tbsp(2))
            .and(vanillaExtract)
            .addTo('a mixing bowl and whisk to combine'),
        'Grease baking dish with butter',
        'Bake for 20 mins',
        'Let cool for 15 mins',
        'Serve & enjoy :)',
    ], [
        butter,
    ]),
    new Recipe('American Pancakes', Recipe.Category.Breakfast, [
        'Add flour (sieved) to a mixing bowl',
        bakingPowder.g(12)
            .and(salt.tsp(.5))
            .and(sugar.g(25))
            .addTo('bowl and whisk to combine'),
        oatMilk.ml(235)
            .and(water.ml(120))
            .and(cookingOil.g(25))
            .addTo('bowl and combine with a wooden spoon'),
        'Grease a pancake pan with butter and heat over medium heat',
        'Cook pancakes, using approx. 6 tbsp of batter at a time, approx. 1 min on either side',
        'Serve with butter, maple syrup, fruit, chocolate, etc. and enjoy :)',
    ], [
        flour.g(190),
        butter,
    ]),
    new Recipe('Chocolate Truffles', Recipe.Category.Dessert, [
        oatMilk.ml(170)
            .addTo('a small pot and heat until steamy but not boiling'),
        chocolateChips.g(300)
            .addTo('a bowl, pour hot milk on top and cover with a plate for 5 mins'),
        'Whisk until smooth, heating back up quickly in the microwave as needed',
        'Cover and refrigerate for at least an hour',
        cocoaPowder.g(60)
            .addTo('a shallow bowl'),
        'Roll chocolate mixture into balls (approx. 1-2 tbsp at a time) and roll into cocoa powder to cover',
        'Refrigerate truffles',
        'Serve & enjoy :)',
    ]),
    new Recipe('香菇菜包 (Mushroom & Bok Choy Buns)', Recipe.Category.Meal, [
        bokChoy.addTo('a pot of boiling water and blanch'),
        'Transfer to cold water',
        'Mince bok choy, squeezing out water',
        cookingOil.addTo('a heated wok'),
        shiitake.minced().addTo('wok alongside bok choy'),
        salt.and(coconutAminos).addTo('wok and stir fry'),
        'Refrigerate vegetable mixture until ready to use',
        flour.g(300)
            .and(water.ml(160))
            .and(dryYeast.g(6))
            .and(sugar.g(10))
            .addTo('a mixing bowl and knead'),
        'Let dough rise until doubled in volume (approx. 1h30)',
        'Punch down dough and portion out into 35g balls',
        'Wrap filling into buns',
        'Let buns rise for 30 mins',
        'Steam buns for 8 mins (or freeze and steam for 12 mins directly from frozen)',
        'Serve & enjoy :)',
    ]),
    new Recipe('Grießkuchen', Recipe.Category.Dessert, [
        'Preheat oven to 160°C',
        coconutMilk.ml(250)
            .and(water.ml(250))
            .addTo('a mixing bowl and stir to combine'),
        semolina.g(250).addTo('bowl and mix in'),
        butter.g(50)
            .and(sugar.g(100))
            .addTo('another bowl and whisk until fluffy'),
        'Combine sugar/butter mixture into dough mixture',
        cornstarch.tsp(8)
            .and(cookingOil.tbsp(4))
            .addTo('a cup and mix until combined'),
        'Add cornstarch mixture into dough',
        'Grind sunflower seeds',
        sunflowerSeeds.g(50)
            .and(shreddedCoconut.g(50))
            .addTo('dough and mix'),
        butter.g(50)
            .addTo('a small pot and heat to melt'),
        'Grease a cake mould',
        'Add dough into the mould',
        'Spread melted butter on top',
        'Bake for 30 minutes',
        'Let cake cool',
        'Sprinkle with more shredded coconut',
        'Serve & enjoy :)',
    ]),
    new Recipe('Curry Roux', Recipe.Category.Component, [
        butter.g(100).addTo('a small pot and melt'),
        flour.g(100).addTo('pot and stir to combine'),
        'Keep stirring on low heat until golden (approx. 20 mins)',
        turmericPowder.tbsp(2)
            .and(paprika.tbsp(2))
            .and(corianderPowder.tbsp(2))
            .and(cumin.tbsp(2))
            .and(garlicPowder.tsp(1))
            .and(blackPepper.tsp(1))
            .addTo('roux and whisk to combine'),
        'Cook for 30 seconds',
        'Transfer to a container lined with baking paper',
        'Refrigerate overnight',
        'Cut into cubes and freeze for up to 4 months',
    ]),
    new Recipe('Sushi Rice', Recipe.Category.Component, [
        sushiRice.take(1, 'part')
            .and(water.take(1, 'part'))
            .addTo('a pot'),
        'Bring to boil, then reduce to low and cover',
        'Cook for 12 mins',
        'Remove from heat and let rest, covered, for 10 mins',
        riceVinegar.take(.125, 'parts')
            .and(sugar.take(.125, 'parts'))
            .and(cookingOil)
            .and(salt)
            .addTo('a small pot and cook until dissolved'),
        'Let vinegar mixture cool',
        'Stir to combine into rice',
    ]),
    new Recipe('Roasted Potatoes', Recipe.Category.Side, [
        'Preheat oven to 200°C',
        potato.g(2000).chopped()
            .and(salt.tbsp(2))
            .and(bakingPowder.tsp(1))
            .addTo('a pot of boiling water'),
        'Cook for approx. 10 mins or until potatoes are easily pierced',
        'Drain and let potatoes rest in pot (uncovered) for a minute',
        blackPepper.and(garlicPowder).addTo('potatoes'),
        'Cover pot and toss vigorously',
        'Transfer to baking sheet',
        'Roast in oven for 45 mins, flipping them at the halfway point',
        'Serve & enjoy :)',
    ]),
    new Recipe('Crème Brûlée', Recipe.Category.Dessert, [
        sugar.g(80)
            .and(cornstarch.g(40))
            .and(turmericPowder.tsp(.1))
            .and(salt.tsp(.1))
            .and(oatMilk.ml(240))
            .and(coconutMilk.ml(400))
            .addTo('a small pot and whisk to combine'),
        'Bring to boil, continously whisking, reduce the heat and simmer for 5 mins',
        'Remove from heat',
        vanillaExtract.tbsp(2)
            .and(butter.g(25))
            .addTo('mixture and stir in until melted'),
        'Transfer to ramekins',
        'Cover ramekins and refrigerate overnight',
        'Sprinkle with sugar and burn with kitchen torch',
        'Serve with fresh raspberries & enjoy :)',
    ], [
        raspberry.take(1, 'handful'),
    ]),
    new Recipe('Potato Salad', Recipe.Category.Side, [
        potato.chopped()
            .addTo('a pot of water, bring to boil and cook for 10 mins or until potatoes are easily pierced'),
        'Drain and rinse with cool water',
        celery.chopped()
            .and(redOnion.chopped())
            .and(pickles.chopped())
            .and(vinegar)
            .and(mustard)
            .and(freshDill.minced())
            .and(mayo)
            .and(salt)
            .and(paprika)
            .and(blackPepper)
            .addTo('a mixing bowl and combine'),
        'Once potatoes are cooled, add to bowl',
        'Serve & enjoy :)',
    ]),
    new Recipe('Caramelized Onion Pasta Casserole', Recipe.Category.Meal, [
        'Preheat oven to 200°C',
        onion.take(5).sliced()
            .and(sundriedTomatoes.take(1, 'jar').chopped())
            .and(paprika.tbsp(1))
            .and(driedParsley.tsp(1))
            .and(salt)
            .and(blackPepper)
            .addTo('a baking dish and mix'),
        garlic.take(1, 'head').addTo('dish, in the middle'),
        'Drizzle with oil leftover from sundried tomato jar',
        'Cover with foil',
        'Bake for 1 hr, tossing halfway through',
        'Remove garlic from dish',
        'Cook pasta',
        freshParsley.take(1, 'handful').chopped()
            .and(freshBasil.take(1, 'handful').chopped())
            .and(lemonJuice)
            .and(coconutMilk.take(.5, 'tins'))
            .addTo('dish, along with pasta and a few tablespoons of pasta water'),
        'Squeeze out garlic cloves into dish and stir',
        'Serve & enjoy :)',
    ], [
        pasta,
    ]),
];
