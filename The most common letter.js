// DESCRIPTION:
// Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.
//
// If such letters are two or more, choose the one that appears in the string( earlier.
//
// For example:
//
// ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
// ('real talk bro', 'n') => 'neal talk bno'
// ('great job go ahead', 'k') => 'grekt job go khekd'
//
// SOLUTION:

function replaceCommon(string, letter) {
    let s = string.replace(/ /g, '').split('')
    s = s.reduce(function (acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {})
    s = Object.entries(s).sort((a, b) => b[1] - a[1])

    let arr = [s[0][0]]
    for (let i = 1; i < s.length; i++) {
        if (s[0][1] === s[i][1]) arr.push(s[i][0])
    }

    let str = string.split('')
    let x = arr[0]

    if (arr.length === 1) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === x) str[i] = letter
        }
    }

    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            let x = arr[0]
            if (str.indexOf(arr[i]) < str.indexOf(x)) x = arr[i]
        }
        for (let i = 0; i < str.length; i++) {
            if (str[i] === x) str[i] = letter
        }
    }

    return str.join('')
}