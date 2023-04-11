const { NotImplementedError } = require('../extensions/index.js');
const {reset} = require("sinon");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let pattern = arr.filter(element => element !== -1).sort((a, b)=>a-b);
  let result = []
  for (let element of arr){
    if (element === -1){
      result.push(-1)
    }
    else{
      result.push(pattern[0]);
      pattern.shift();
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
