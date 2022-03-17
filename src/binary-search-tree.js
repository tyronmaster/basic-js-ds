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
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

  }

  has(data) {

    if (!data) return null;
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
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

    if (!data) return null;
    if (!this.rootNode) {
      return null;
    }
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;

  }

  remove(data) {

    if (this.root === null) return;

    let elementToDelete = this.find(data);
    if (!elementToDelete) {
      return;
    }

    if (elementToDelete.left === null && elementToDelete.right === null) {
      elementToDelete.data = null;
      return;
    }

    if (elementToDelete.left === null) {
      elementToDelete = elementToDelete.right;
      return;
    }
    if (elementToDelete.right === null) {
      elementToDelete = elementToDelete.left;
      return;
    }

    if (elementToDelete.right && elementToDelete.left) {
      let child = elementToDelete.right;
      while (child) {
        if (child.left) {
          child = child.left;
        } else {
          elementToDelete.data = child.data;
          child = null;
          return;
        }
      }


    }
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