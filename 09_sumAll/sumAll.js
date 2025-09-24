const sumAll = function(a, b) {
    let descendingNum = b - 1;
    let calculation = b;
    while (descendingNum >= a) {
        calculation += descendingNum;
        descendingNum --;
    }
    return calculation;
};

// Do not edit below this line
module.exports = sumAll;
