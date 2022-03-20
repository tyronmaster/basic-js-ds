const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  /* variant with constructor */
  /*
  constructor(){
    this.stackArray = [];
  }
*/

  push(element) {

    /* variant without constructor */
    if(!this.stackArray){
      this.stackArray = [];
    }

    this.stackArray.push(element);
    return this;
  }

  pop() {
    return this.stackArray.pop();
  }

  peek() {
    const peekElementIndex = this.stackArray.length - 1;
    return this.stackArray[peekElementIndex];
  }
}

module.exports = {
  Stack
};
