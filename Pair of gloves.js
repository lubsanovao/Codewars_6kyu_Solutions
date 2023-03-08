// DESCRIPTION:
// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number
// of pair of gloves you can constitute from the gloves you have in your drawer.
//
// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming
// that only gloves of the same color can form pairs.
//
// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)
//
// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)
//
// SOLUTION:

function numberOfPairs(gloves) {
    if (gloves.length === 0) return 0
    let res = gloves.reduce(function (acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {})
    let arr = Object.values(res).map(el => Math.floor(el / 2)).reduce((a, b) => a + b, 0)
    return arr
}