const add = function(...values) {
  let total = 0;
	for (const value of values) {
    total += value;
  }
  return total;
};

const subtract = function(a, ...values) {
	let total = a;
  for (const value of values) {
    total -= value;
  }
  return total;
};

const sum = function(arr) {
	if (arr == []) {
    return arr;
  } else {
    let total = 0;
    for (const item of arr) {
    total += item;
  }
  return total;
  }
};

const multiply = function(arr) {
  let total = arr[0];
  for (const item of arr) {
    if (item !== arr[0]) {
      total *= item;
    } else {
      
    }
  }
  return total;
};

const power = function(number, power) {
  return number ** power;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
