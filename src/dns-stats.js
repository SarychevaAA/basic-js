const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {}
  let dns = [];
  for (let element of domains){
    let arr = element.split(".");
    arr = arr.reverse();
    for (let i=0; i < arr.length; i++){
      dns.push("."+arr.slice(0, i+1).join('.'))
    }
  }
  for (let element of dns){
    if (Object.keys(result).includes(element)){
      result[element] += 1;
    }
    else {
      result[element] = 1
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
