
module.exports = {
    // check if duplicate items, first/last
    indexOfObjectWithFieldValue: (arr, field, value) => {
        let index = arr.map((item) => {
            return item[field]
        }).indexOf(value);
        return index;
    }
};