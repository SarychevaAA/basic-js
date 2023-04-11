const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  for (let i = 0; i < names.length; i++){
    const lastElement = result.slice(0, i).findLast((element) => element.includes(names[i]));
    if (!lastElement){
      result.push(names[i]);
    }
    else{
      const number = Number.parseInt(lastElement.slice(names[i].length).slice(lastElement.search('\\(')+1, lastElement.search('\\)'))) || 0;
      result.push(`${names[i]}(${number+1})`);
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
