const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function fintCountIncludes(str, pattern){
  let result = 0;
  for (const element of str){
    if (element === pattern){
      result += 1;
    }
  }
  return result;
}
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const pattern = new Set(s1.split(''));
  for (const element of pattern){
    result += Math.min(fintCountIncludes(s1, element), fintCountIncludes(s2, element));
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
