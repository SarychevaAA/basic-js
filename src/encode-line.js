const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let element = '';
  let countElements = 0;
  let result = '';
  for (let i=0; i < str.length; i++){
    if (element !== str[i]){
      result += countElements>1 ? `${countElements}${element}`: countElements===1 ? element : '';
      element = str[i];
      countElements = 0;
    }
    countElements += 1;
  }
  result += countElements>1 ? `${countElements}${element}`: countElements===1 ? element : '';
  return result;
}

module.exports = {
  encodeLine
};
