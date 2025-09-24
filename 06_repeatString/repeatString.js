const repeatString = function(string, num) {

let stringContainer = ``;

if (num < 0) {

    stringContainer = `ERROR`;

} else {

    for (let count = 0; count < num; count++) {

            stringContainer += string;  
            
    }
}

return stringContainer;

};

// Do not edit below this line
module.exports = repeatString;
