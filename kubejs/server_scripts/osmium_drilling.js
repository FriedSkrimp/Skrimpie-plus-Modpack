ServerEvents.recipes(event => {
	
	//Adding veins
	//.placement(spacing, separation, salt)
	//If all three values match the veins overwrite each other
	//Use .priority(<value>) to set the vein generation priority

	event.recipes.createoreexcavation.vein('{"text": "Osmium Vein"}', 'mekanism:raw_osmium')
		.placement(1024, 128, 757461).alwaysInfinite()
		.id("skrimp:osmium_vein_recipe");
	
	//Drilling recipes (Items)
	//Arguments: output item(s), ore vein id, extraction time in ticks at 32 RPM.

	event.recipes.createoreexcavation.drilling('mekanism:raw_osmium', 'skrimp:osmium_vein_recipe', 500)
		.id("skrimp:osmium_drilling");
});