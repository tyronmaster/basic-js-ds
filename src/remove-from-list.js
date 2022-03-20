const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let arr = [];

  while(l){
    arr.push(l.value);
    l = l.next;
  }

  arr = arr.filter(item => item !== k);

  while(arr.length > 0){
    let newNode = new ListNode(arr.pop());
    if(!l){
      l = newNode;
    } else {
      newNode.next = l;
      l = newNode;
    }
  }
  return l;



  /* variant 01 */
  //return l.filter(item => item !== k);

  /* variant 02 */
  /*
  var newMas = [];
  l.forEach(item => {item !== k? newMas.push(item) : item;});
  return newMas;
  */

  /* variant 03 */
  /*
  let i = 0;
  while(l[i]){
    if(l[i] == k && i == 0){
      l.shift();
  }
  if(l[i] == k  && i < l.length-1){
    l.splice(i, 1);
  }
  if(l[i] == k && i == l.length-1){
    l.pop();
  }
  i++;
  }
  return l;
  */
}

module.exports = {
  removeKFromList
};
