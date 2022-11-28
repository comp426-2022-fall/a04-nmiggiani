export function roll(numSides, numDice, numRolls) {
    
    var all_rolls = [];

    for(var i = 0; i < num_rolls; i++) {
        var result = 0;

        for(var j = 0; j < numDice; j++) {
            result = result + single_roll(numSides);
        }
        all_rolls.push(result);
    }
    
    var results = {
        sides: parseInt(numSides),
        dice: parseInt(numDice),
        rolls: parseInt(numRolls),
        results: all_rolls
    }

    return JSON.stringify(results);

}

function single_roll(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}