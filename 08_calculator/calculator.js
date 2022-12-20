const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(a) {
  let sum = 0
	a.forEach(i => {
    sum += i
  })
  return sum
};

const multiply = function(a) {
  let multiply = 1
	a.forEach(i => {
    multiply *= i
  })
  return multiply
};

const power = function(a, b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
  let ans=1;
  for (let i = 2; i <= a; i++)
      ans = ans * i;
  return ans;
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
