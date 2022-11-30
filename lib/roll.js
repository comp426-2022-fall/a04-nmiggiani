export function roll(sides = 6, dice = 2, rolls = 1) { 
    var totals = [];

    var i = 0;

    while (i < rolls) {

        totals[i] = dice * (Math.floor(Math.random() * sides) + 1)
        i++;
    }
    var output = {
        sides: sides,
        dice: dice,
        rolls: rolls,
        totals: totals
    }

    return JSON.stringify(output);
}