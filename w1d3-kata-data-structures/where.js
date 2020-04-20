module.exports = (arr, searchDetails) =>
    arr.filter(item =>
        //for each key in searchDetails, 
        Object.keys(searchDetails).map
            //check that the value of the key matches the value in searchdetails
            (searchKey => (item[searchKey] == searchDetails[searchKey]))
            //if any key fails, fail the item. 
            .every(x => x)
    )
