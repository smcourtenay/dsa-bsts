class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let valueNode = new Node(val);

    if(this.root === null){
      this.root = valueNode;
    }

    let visitStack = [this.root];
    while(visitStack.length !== 0){
      let current = visitStack.pop();

      if(val < current.val){
        if(current.left){
          visitStack.push(current.left);
        } else {
            current.left = valueNode;
        }
      }

      if(current.val < val){
        if(current.right){
          visitStack.push(current.right);
        } else {
            current.right = valueNode;
        }
      }
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(insertVal, currentNode=this.root) {

    let insertValueNode = new Node(insertVal);

    // Base cases
    if(this.root === null){
      this.root = insertValueNode;
      return this;
    }
    if(insertVal < currentNode.val) {
      if(!currentNode.left){
        currentNode.left = insertValueNode
        return this;
      }
      else{
        this.insertRecursively(insertVal, currentNode.left)
      }  
    }
    if(currentNode.val < insertVal) {
      if(!currentNode.right){
        currentNode.right = insertValueNode
        return this;
      }
      else{
        this.insertRecursively(insertVal, currentNode.right)
      }  
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = BinarySearchTree;
