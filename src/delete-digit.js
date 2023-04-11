const { NotImplementedError } = require('../extensions/index.js');
const {minesweeper} = require("./mine-sweeper");
const {sortByHeight} = require("./sort-by-height");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteNoZeroNumber(arr){
  let minElement = Math.min(...arr);
  let tmp = arr.slice(0, arr.indexOf(minElement));
  if (JSON.stringify([...tmp].sort((a, b)=>{return (b-a)})) !== JSON.stringify(tmp) && tmp.length > 1){
    minElement = deleteNoZeroNumber(tmp);
  }
  return minElement;
}
function deleteDigit(n) {
  let arr = n.toString().split('').map(Number);
  let minElement = Math.min(...arr);
  if (minElement !== 0){
    minElement = deleteNoZeroNumber(arr);
    arr.splice(arr.indexOf(minElement), 1);
  }
  else{
    if (arr.lastIndexOf(minElement) !== arr.length-1 ||  arr.filter(el => el !== minElement).length === 1){
      arr.splice(arr.indexOf(minElement), 1);
    }
    else{
      let tmp = arr.filter(el => el !== minElement);
      let tmlMinElement = Math.min(...tmp);
      arr.splice(arr.indexOf(tmlMinElement), 1);
    }
  }
  return Number.parseInt(arr.join(''), 10);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
