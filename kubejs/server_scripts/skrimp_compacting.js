ServerEvents.recipes(event => {

    event.recipes.createCompacting([
    'createnuclear:steel_ingot',
    ], Fluid.of('createmetalwork:molten_steel', 111))

    event.recipes.createCompacting([
    'mekanism:ingot_bronze',
    ], Fluid.of('createmetalwork:molten_bronze', 111))

        event.recipes.createCompacting([
    'mekanism:ingot_tin',
    ], Fluid.of('createmetalwork:molten_tin', 111))

})