ServerEvents.recipes(event => {

  // numismatics:crown
  event.shapeless(
  Item.of('numismatics:crown', 8), 
  [      
    'numismatics:sun',
  ]).id('numismatics:crown_recipe2');

  // numismatics:cog
  event.shapeless(
  Item.of('numismatics:cog', 8), 
  [      
    'numismatics:crown',
  ]).id('numismatics:cog_recipe2');

  // numismatics:sprocket
  event.shapeless(
  Item.of('numismatics:sprocket', 4), 
  [      
    'numismatics:cog',
  ]).id('numismatics:sprocket_recipe2');

  // numismatics:bevel
  event.shapeless(
  Item.of('numismatics:bevel', 2), 
  [      
    'numismatics:sprocket',
  ]).id('numismatics:bevel_recipe2');

  // numismatics:spur
  event.shapeless(
  Item.of('numismatics:spur', 8), 
  [      
    'numismatics:bevel',
  ]).id('numismatics:spur_recipe2');

  // numismatics:sun
  event.shapeless(
  Item.of('numismatics:sun', 1), 
  [      
    '8x numismatics:crown',
  ]).id('numismatics:sun_recipe');

  // numismatics:crown
  event.shapeless(
  Item.of('numismatics:crown', 1), 
  [      
    '8x numismatics:cog',
  ]).id('numismatics:crown_recipe');

  // numismatics:cog
  event.shapeless(
  Item.of('numismatics:cog', 1), 
  [      
    '4x numismatics:sprocket',
  ]).id('numismatics:cog_recipe');

  // numismatics:sprocket
  event.shapeless(
  Item.of('numismatics:sprocket', 1), 
  [      
    '2x numismatics:bevel',
  ]).id('numismatics:sprocket_recipe');

  // numismatics:bevel
  event.shapeless(
  Item.of('numismatics:bevel', 1), 
  [      
    '8x numismatics:spur',
  ]).id('numismatics:bevel_recipe');
});