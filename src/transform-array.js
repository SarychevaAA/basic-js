const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  let result = [];
  if (Array.isArray(arr) === false){
    throw new Error(`'arr' parameter must be an instance of the Array!`);
    return arr;
  }
  const controlSequence = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] !== 'number'){
      if (arr[i] === controlSequence[0] && i+1 < arr.length){
        i += 1;
      }
      else if (arr[i] === controlSequence[1] && i > 0 && arr[i-2] !== controlSequence[0]){
        result.pop()
      }
      else if (arr[i] === controlSequence[2] && i+1 < arr.length){
        result.push(arr[i+1]);
        result.push(arr[i+1]);
        i += 1;
      }
      else if (arr[i] === controlSequence[3] && arr[i-2] !== controlSequence[0] && i > 0){
        result.push(arr[i-1]);
      }
      else if (controlSequence.includes(arr[i]) === false){
        result.push(arr[i]);
      }
    }
    else{
      result.push(arr[i])
    }
  }
  return result;
}

module.exports = {
  transform
};
