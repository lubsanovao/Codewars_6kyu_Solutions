// DESCRIPTION:
// Write a function that will check whether ANY permutation of the characters of the input string is a palindrome.
// Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself
// brilliant if you can come up with a version that does not use any function whatsoever.
//
// Example
// madam -> True
// adamm -> True
// junk -> False
//
// Hint
// The brute force approach would be to generate all the permutations of the string and check each one of them whether
// it is a palindrome. However, an optimized approach will not require this at all.
//
// SOLUTION:

function permuteAPalindrome (input) {
    let l = input.length
    if(l === 0) return true

    let sums = {}
    input.split('').map(function(e){
        sums[e] = !sums[e] ? 1 : sums[e]+1;
    })

    let arr = []
    for(let x in sums){
        arr.push(sums[x])
    }

    let odd = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0) odd++
    }

    return (l % 2 !== 0 && odd === 1) ? true : (l % 2 === 0 && odd === 0) ? true : false
}