const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyStr = key.repeat(Math.ceil(message.length/key.length)).slice(0, message.length)
    let result = '';
    let j = 0
    for (let i=0; i<message.length; i++){
      if (message[i].match(/[A-Z]/g)){
        console.log("E: ", message[i])
        result += String.fromCharCode(((message.charCodeAt(i)+keyStr.charCodeAt(j))%26+'A'.charCodeAt(0)))

        j += 1
      }
      else{
        result += message[i];
      }
    }
    return (this.type)? result: result.split("").reverse().join('') ;

  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    key = key.toUpperCase();
    let keyStr = key.repeat(Math.ceil(encryptedMessage.length/key.length)).slice(0, encryptedMessage.length)
    let result = '';
    let j = 0
    for (let i=0; i<encryptedMessage.length; i++){
      if (encryptedMessage[i].match(/[A-Z]/g)){
        console.log("E: ", encryptedMessage[i])
        result += String.fromCharCode(((encryptedMessage.charCodeAt(i)-keyStr.charCodeAt(j)+26)%26+'A'.charCodeAt(0)))
        j += 1
      }
      else{
        result += encryptedMessage[i];
      }
    }
    return (this.type)? result: result.split("").reverse().join('') ;

  }
}


module.exports = {
  VigenereCipheringMachine
};
