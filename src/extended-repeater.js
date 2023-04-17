const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes=1, separator='+', addition='',
  additionRepeatTimes=1, additionSeparator='|'}) {

  console.log("A ", str);
  if (additionRepeatTimes > 0){
    str += [...Array(additionRepeatTimes)].map(_=> `${addition}`).join(additionSeparator);
    console.log("B ", str);
  }
  let result = [...Array(repeatTimes)].map((_)=> str).join(`${separator}`);
  console.log("C ", result);
  return result;
}

module.exports = {
  repeater
};
