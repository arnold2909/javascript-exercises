const palindromes = function (input) {
  if (
    input
      .toLowerCase()
      .replace(/\s/g, "")
      .split("")
      .reverse()
      .filter((char) => /^[A-Za-z0-9]*$/.test(char))
      .join("") ===
    input
      .toLowerCase()
      .replace(/\s/g, "")
      .split("")
      .filter((char) => /^[A-Za-z0-9]*$/.test(char))
      .join("")
  ) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
