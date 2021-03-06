module.exports = {
    getType: (thing) => typeof (thing),
    isNumber: (thing) => (typeof(thing) == "number"),
    toNumber: (str) => Number(str),
    isStringNumber: (str) => typeof(Number(str)) == "number" && !isNaN(Number(str)),
    add: (a, b) => a+b,
    addStrings: (a, b) => (Number(a)+Number(b)).toString(),
    addStringsOrNumbers: (a, b) => (typeof(a) == "number" && typeof(b) == "number") ? a+b : (Number(a)+Number(b)).toString(),
    isEmail: (str) => (/.*@.*\..*/).test(str),
    // Regex reads: "match any number of any character, then an @, then any number of any character, then a dot"
    countIf: (array, fn) => array.reduce( (count, item) => count + (fn(item) ? 1:0),0),
    filter: (array, fn) => array.filter(fn),
    map: (array, fn) => array.map(fn),
    filterStringsWithCommas: (str) => str.indexOf(",") != -1,
    splitStringByCommas: (str) => str.split(','),
}