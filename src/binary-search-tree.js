const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if (!this.rootNode) {
      this.rootNode = null;
    }
    return this.rootNode;
  }

  add(data) {
    if (!data) return null;
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
    let currentNode = this.rootNode;
    while (currentNode) {
      if (newNode.data < currentNode.left) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;
    if (currentNode == null || data == null) {
      return null;
    }
    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find(data) {
     currentNode = this.rootNode;
    if (currentNode == null || data == null) {
      return null;
    }
    while (currentNode) {
      if (data < currentNode.left) {
        currentNode = currentNode.left;
      } else if (data > currentNode.right) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (!currentNode.left) {
        return currentNode.data;
      }
      currentNode = currentNode.left;
    }
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (!currentNode.right) {
        return currentNode.data;
      }
      currentNode = currentNode.right;
    }
  }
}


module.exports = {
  BinarySearchTree
};