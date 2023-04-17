const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: new Array(),
  getLength() {
    return this.links.length
  },
  addLink(value) {
    this.links.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || (Number.isInteger(position) && (position > this.links.length || position < 1))){
      this.links = []
      throw new Error("You can't remove incorrect link!");
    }
    this.links = this.links.filter((el, index)=> index+1 !== position);
    return this;
  },
  reverseChain() {
    this.links = this.links.reverse()
    return this;
  },
  finishChain() {
    let result = this.links.map(element => `( ${element} )`).join("~~");
    this.links = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
