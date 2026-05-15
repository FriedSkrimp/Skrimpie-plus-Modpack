ServerEvents.recipes(event => {
	
	event.recipes.createCrushing([
		'biomesoplenty:black_sand'
	], 'minecraft:blackstone')

	event.recipes.createCrushing([
		 '4x create_new_age:thorium',
		 CreateItem.of('2x create_new_age:thorium', 0.25)
	], 'create_new_age:thorium_ore')

    event.recipes.createCrushing({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "minecraft:stone",
				"amount": 1
            }
        ],
        "results": [
            {
                "id": "minecraft:cobblestone",
                "count": 1
            }
        ],
        "processingTime": 250
    })

    event.recipes.createCrushing({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": "c:ores/uraninite_poor",
				"amount": 1
            }
        ],
        "results": [
            {
                "id": "powah:uraninite_raw",
                "count": 1
            },
            {
                "id": "powah:uraninite_raw",
                "count": 1,
                "chance": 0.10
            }
        ],
        "processingTime": 350
    })

    event.recipes.createCrushing({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": "c:ores/uraninite_regular",
				"amount": 1
            }
        ],
        "results": [
            {
                "id": "powah:uraninite_raw",
                "count": 2
            },
            {
                "id": "powah:uraninite_raw",
                "count": 1,
                "chance": 0.15
            }
        ],
        "processingTime": 350
    })

    event.recipes.createCrushing({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": "c:ores/uraninite_dense",
				"amount": 1
            }
        ],
        "results": [
            {
                "id": "powah:uraninite_raw",
                "count": 4
            },
            {
                "id": "powah:uraninite_raw",
                "count": 2,
                "chance": 0.15
            }
        ],
        "processingTime": 500
    })

    event.recipes.createCrushing({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": "c:ores/fluorite",
				"amount": 1
            }
        ],
        "results": [
            {
                "id": "mekanism:fluorite_gem",
                "count": 6
            },
            {
                "id": "mekanism:fluorite_gem",
                "count": 1,
                "chance": 0.1
            }
        ],
        "processingTime": 250
    })
});