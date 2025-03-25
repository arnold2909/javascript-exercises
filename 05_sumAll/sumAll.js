const sumAll = function (num1, num2) {
  let total = 0;
  if (
    num2 >= num1 &&
    num1 >= 0 &&
    num2 >= 0 &&
    num1 === parseInt(num1, 10) &&
    num2 === parseInt(num2, 10)
  ) {
    for (let i = num1; i <= num2; i++) {
      total += i;
    }
  } else if (
    num2 <= num1 &&
    num1 >= 0 &&
    num2 >= 0 &&
    num1 === parseInt(num1, 10) &&
    num2 === parseInt(num2, 10)
  ) {
    for (let i = num2; i <= num1; i++) {
      total += i;
    }
  } else {
    return "ERROR";
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
