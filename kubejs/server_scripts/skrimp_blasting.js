ServerEvents.recipes(event => {
    
        event.blasting('minecraft:gold_ingot', '#simplyswords:gold_gear')
        .xp(0.1)           
        .cookingTime(100)

        event.blasting('minecraft:iron_ingot', '#simplyswords:iron_gear')
        .xp(0.1)           
        .cookingTime(100)

        event.blasting('minecraft:diamond', '#simplyswords:diamond_gear')
        .xp(0.1)           
        .cookingTime(100)

        event.blasting('minecraft:netherite_ingot', '#simplyswords:netherite_gear')
        .xp(0.1)           
        .cookingTime(100)

        event.blasting('2x minecraft:netherite_ingot', '#simplyswords:runic_gear')
        .xp(0.1)           
        .cookingTime(100)

        event.blasting('biomesoplenty:dried_salt', 'mekanism:block_salt')
        .xp(0.1)           
        .cookingTime(100)
});