// DESCRIPTION:
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
//
// For instance:
//
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)
//
// SOLUTION:

String.prototype.camelCase = function () {
    if (this.length === 0) return ''
    return this.replace(this[0], this[0].toUpperCase())
        .replace(/ \w/g, $0 => $0.toUpperCase())
        .replace(/ /g, '')
}