const sumAll = function(a, b) {

    if (Math.sign(a) !== 1 || Math.sign(b) !== 1) {
        return `ERROR`;
    } else if (a < b) {
        let descendingNum = b - 1;
        let calculation = b;
        while (descendingNum >= a) {
            calculation += descendingNum;
            descendingNum --;
        }
        return calculation;
    } else {
        let descendingNum = a - 1;
        let calculation = a;
        while (descendingNum >= b) {
            calculation += descendingNum;
            descendingNum --;
        }
        return calculation;
    }

}

// Do not edit below this line
module.exports = sumAll;
