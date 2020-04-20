module.exports = function getPropTypes (obj) {
    return Object.keys(obj).map(key => typeof(obj[key]))
}
