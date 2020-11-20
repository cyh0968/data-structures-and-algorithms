class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        // this.insert = this.insert.bind(this);
    }

    // this only inserts a value based on the status of a tree
    // it does not rearrange the whole tree structure
    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }

        let currentNode = this.root;

        while (currentNode) {
            let nextNode = null;

            const comparisonResult = compareNumbers(currentNode.value, value);

            if (comparisonResult > 0) {
                nextNode = currentNode.left;
                if (currentNode.left === null) {
                    currentNode.left = new Node(value);
                }
            } else if (comparisonResult < 0) {
                nextNode = currentNode.right;
                if (currentNode.right === null) {
                    currentNode.right = new Node(value);
                }
            }
            currentNode = nextNode;
        }
    }

    lookup(value) {
        if (this.root === null) {
            return null;
        }

        let currentNode = this.root;

        while (currentNode) {
            let nextNode = null;

            const comparisonResult = compareNumbers(currentNode.value, value);

            if (comparisonResult > 0) {
                nextNode = currentNode.left;
                if (currentNode.left === null) {
                    return null;
                }
            } else if (comparisonResult < 0) {
                nextNode = currentNode.right;
                if (currentNode.right === null) {
                    return null;
                }
            } else if (comparisonResult === 0) {
                return currentNode;
            }

            currentNode = nextNode;
        }
        return null;
    }

    // it only removes the target node. 
    // the children's subtree are inserted to other node
    // the successor should be greater than the deleted node's left node, but less than the right node
    remove(value) {
        if (this.root === null || this.root.value === value) {
            return;
        }

        let currentNode = this.root;
        let previousNode = null;
        let isLeftNode = true;

        while (currentNode) {
            let nextNode = null;

            const comparisonResult = compareNumbers(currentNode.value, value);

            if (comparisonResult > 0) {
                if (currentNode.left === null) {
                    return;
                }
                nextNode = currentNode.left;
                isLeftNode = true;
            } else if (comparisonResult < 0) {
                if (currentNode.right === null) {
                    return;
                }
                nextNode = currentNode.right;
                isLeftNode = false;
            } else if (comparisonResult === 0) {
                if (previousNode) {
                    if (isLeftNode) {
                        previousNode.left = null;
                    } else {
                        previousNode.right = null;
                    }
                }

                if (currentNode.left !== null) {
                    currentNode.left = null;
                }

                if (currentNode.right !== null) {
                    this.insert(currentNode.right.value);
                    currentNode.right = null;
                }

                return currentNode;
            }

            previousNode = currentNode;
            currentNode = nextNode;
        }
        return null;
    }
}


function compareNumbers(firstNum, secondNum) {
    if (firstNum > secondNum) {
        return 1;
    }

    if (firstNum < secondNum) {
        return -1;
    }

    return 0;
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);

    return tree;
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// Result should be the following tree structure
//   9
//   4       20
// 1   6   15  170

// Test insert() method
// JSON.stringify(traverse(tree.root));
// console.dir(tree.root);

// Test lookup() method
// if it fails to find the target node,
// it returns null
// console.log('check lookup:', tree.lookup(9));
// console.log('check lookup:', tree.lookup(4));
// console.log('check lookup:', tree.lookup(6));
// console.log('check lookup:', tree.lookup(20));
// console.log('check lookup:', tree.lookup(170));
// console.log('check lookup:', tree.lookup(15));
// console.log('check lookup:', tree.lookup(1));
// console.log('check lookup:', tree.lookup(12));
// console.log('check lookup:', tree.lookup(19));


// Test remove() method