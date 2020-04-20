module.exports = {
    callsFunction: (func)=> func(),
    callsProperty: (obj)=> obj.increment(),
    filter: (arr, func) => arr.filter(func),
    find: (arr, func) => arr.find(func),
    map: (arr, func) => arr.map(func)
}