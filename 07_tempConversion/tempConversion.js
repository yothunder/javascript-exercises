const convertToCelsius = function(t) {
  let tc = (5/9)*(t-32)
  let tcf = tc.toFixed(1) // round to 1 decimal by converting to string 
  return parseFloat(tcf) // convert string to number again
};

const convertToFahrenheit = function(t) {
  let tc = (9/5*t)+32
  let tcf = tc.toFixed(1)
  return parseFloat(tcf)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
