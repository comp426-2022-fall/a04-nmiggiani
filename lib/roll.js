// export function roll(sides = 6, dice = 2, rolls = 1) {  

//     var results = [];
//     var i = 0;

//     while (i < rolls) {
//         results[i] = dice * (Math.floor(Math.random() * sides) + 1)
//         i++;
//     }

//     var output = {
//         sides: sides,
//         dice: dice,
//         rolls: rolls,
//         results: results
//     }
//     return JSON.stringify(output);
// }

export function roll(numSides, numDice, numRolls) {

    var func = []

    for(let i = 0; i < numRolls; i++) {

        let total = 0

        for(let j = 0; j < numDice; j++) {
            total += Math.floor(Math.random() * numSides) + 1;
        }

        func.push(total);
    }
    
    return {"sides": numSides, "dice": numDice, "rolls": numRolls, "results": func};
}

