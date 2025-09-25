const sumAll = function(a, b) {

    /*if (Math.sign(a) !== 1 || Math.sign(b) !== 1) {
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

}*/

if (!Number.isInteger(a) || !Number.isInteger(b)) return `ERROR`;
if (a < 0 || b < 0) return `ERROR`;

if (a > b) {
    let temp = b;
    b = a;
    a = temp;
} //swaps numbers around to have biggest always in `b's` position.

let calculation = b;

for (let descender = b - 1; descender >= a; descender--) {
    calculation += descender;
}

return calculation;

}

// Do not edit below this line
module.exports = sumAll;
