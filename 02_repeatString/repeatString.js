const repeatString = function (string, repeatNumber) {
  let newString = "";
  for (let i = 1; i <= repeatNumber; i++) {
    newString += string;
  }
  if (repeatNumber >= 0) {
    return newString;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
