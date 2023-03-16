"use strict";
const isNullOrWhiteSpace = (input) => {
  if (!input) {
    return true;
  }
  var temp = input.trim();
  if (!temp) {
    return true;
  }
  return false;
};

const isNullOrEmptyArray = (inputArray) => {
  if (!inputArray) {
    return true;
  }
  if (inputArray.length == 0) {
    return true;
  }
  return false;
};

module.exports = {
  isNullOrWhiteSpace,
  isNullOrEmptyArray,
};
