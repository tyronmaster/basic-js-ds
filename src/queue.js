const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this.rootListNode;
  }

  enqueue(value) {
    if(!value){
      return;
    }

    const newListNode = new ListNode(value);
    if(!this.rootListNode){
      this.rootListNode = newListNode;
      return;
    }

    let currentElement = this.rootListNode;
    while(currentElement){
      if(!currentElement.next){
        currentElement.next = newListNode;
        return;
      } else {
        currentElement = currentElement.next;
      }
    }
  }

  dequeue() {
    let elementToDelete = this.rootListNode;
    const elementValue = elementToDelete.value;
    this.rootListNode = elementToDelete.next;
    return elementValue;
  }
}

module.exports = {
  Queue
};
