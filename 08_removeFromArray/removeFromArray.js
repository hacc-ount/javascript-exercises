const removeFromArray = function(arr, ...values) {

    let newArr = [];

    arr.forEach((item) => {
        if (!values.includes(item)) {
            newArr.push(item);
        } else {

        }
    })

    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
