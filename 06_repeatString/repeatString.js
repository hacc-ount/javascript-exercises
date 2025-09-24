const repeatString = function(string, num) {

let stringContainer = ``;

for (let count = 0; count < num; count++) {
    stringContainer += string;    
}

return stringContainer;

};

// Do not edit below this line
module.exports = repeatString;
