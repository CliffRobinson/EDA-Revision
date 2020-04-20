module.exports = (arr, searchDetails) =>  //arr.find(hh => (Object.keys(searchDetails)[0] in hh && hh[Object.keys(searchDetails)[0]] == searchDetails[Object.keys(searchDetails)[0]])) // <= one line soln
{
    const searchKey = Object.keys(searchDetails)[0]
    const searchValue = searchDetails[searchKey]
    return arr.find((item) => item[searchKey] == searchValue)
}