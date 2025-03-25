const reverseString = function (oldString) {
  let newString = oldString.split("");
  newString.reverse();
  let newestString = newString.join("");
  return newestString;
};

// Do not edit below this line
module.exports = reverseString;
