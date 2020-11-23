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
        if (!this.root) {
            this.root = new Node(value);
            return this;
        }

        let currentNode = this.root;

        while (true) {
            const comparisonResult = compareNumbers(currentNode.value, value);
            if (comparisonResult > 0) {
                if (!currentNode.left) {
                    currentNode.left = new Node(value);
                    return this;
                }
                currentNode = currentNode.left;
            } else if (comparisonResult < 0) {
                if (!currentNode.right) {
                    currentNode.right = new Node(value);
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;

        while (currentNode) {
            const comparisonResult = compareNumbers(currentNode.value, value);
            if (comparisonResult > 0) {
                currentNode = currentNode.left;
            } else if (comparisonResult < 0) {
                currentNode = currentNode.right;
            } else if (comparisonResult === 0) {
                return currentNode;
            }
        }
    }

    findSuccessor(node) {
        // There are three cases

        // 1. no child node
        if (!node.left && !node.right) {
            return null;
        }

        // 2. one child node
        if (node.left && !node.right) {
            return node.left;
        }
        if (node.right && !node.left) {
            return node.right;
        }

        // 3. two children nodes
        // the value of successor should be greater than left
        // and smaller than right 
        // successor = the leftest node from the right node of the current node
        // if no left child of the right node, then return right node.
        let currentNode = node.right;

        while (true) {
            if (!currentNode.left) {
                break;
            }
            currentNode = currentNode.left;
        }

        return currentNode;
    }

    // it only removes the target node. 
    // the children's subtree are inserted to other node
    // the successor should be greater than the deleted node's left node, but less than the right node
    remove(value) {
        if (!this.root) return null;
        let currentNode = this.root;

        let parentNode = this.root;
        let isLeft = true;
        let targetNode = null;

        let successorNode = null;
        let successorParenetNode = this.root;
        let isLeftSuccessor = false;

        // find target node
        while (currentNode) {
            let comparisonResult = compareNumbers(currentNode.value, value);

            if (comparisonResult > 0) {
                if (!currentNode.left) return null;
                parentNode = currentNode;
                currentNode = currentNode.left;
                isLeft = true;
            } else if (comparisonResult < 0) {
                if (!currentNode.right) return null;
                parentNode = currentNode;
                currentNode = currentNode.right;
                isLeft = false;
            } else if (comparisonResult === 0) {
                targetNode = currentNode;
                break;
            }
        }

        // the target node has only one child node
        if (!currentNode.left ^ !currentNode.right) {
            successorParenetNode = currentNode;
            successorNode = !currentNode.left ? currentNode.right : currentNode.left;
            isLeftSuccessor = !currentNode.left ? false : true;
        }
        // the target has two children nodes
        else if (currentNode.left || currentNode.right) {
            currentNode = currentNode.right;

            while (currentNode) {
                if (!currentNode.left) {
                    successorNode = currentNode;
                    break;
                }
                successorParenetNode = currentNode;
                currentNode = currentNode.left;
                isLeftSuccessor = true;
            }
        }

        // remove the target node and move successor
        if (this.root.value !== value) {
            if (isLeft) {
                parentNode.left = successorNode;
            } else {
                parentNode.right = successorNode;
            }
        } else {
            this.root = successorNode;
        }

        if (isLeftSuccessor) {
            successorParenetNode.left = null;
        } else {
            successorParenetNode.right = null;
        }

        successorNode.left = targetNode.left;
        successorNode.right = targetNode.right;

        targetNode.left = null;
        targetNode.right = null;

        return targetNode;
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
    // console.log(node);
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);

    return tree;
}

module.exports = () => {
    const tree = new BinarySearchTree();

    tree.insert(9);
    tree.insert(4);
    tree.insert(6);
    tree.insert(20);
    tree.insert(170);
    tree.insert(15);
    tree.insert(1);
    tree.insert(45);
    tree.insert(57);
    tree.insert(38);
    tree.insert(24);
    tree.insert(42);
    tree.insert(39);
    tree.insert(43);

    // Result should be the following tree structure
    //      9
    //  4         20
    //1    6   15    170
    //  
    //                170
    //           45  
    //      38        57        
    //  24      42       
    //        39   43     


    // Test insert() method
    // JSON.stringify(traverse(tree.root));
    console.dir(tree.root);

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
    // console.log('check lookup:', tree.lookup(12)); // should be null
    // console.log('check lookup:', tree.lookup(19)); // should be null


    // Test findSuccessor() method
    // console.log(tree.findSuccessor(tree.lookup(45))); // should be 57
    // console.log(tree.findSuccessor(tree.lookup(38))); // should be 39


    // Test remove() method
    // const removedNode = tree.remove(38); // should return node 38
    // console.log('removed node \n',removedNode); // this should 38 without left, right children
    // console.log('root node \n', traverse(tree.root));
    // console.log('parent node \n',tree.lookup(45)); // this left node should be 39
    // console.log('successor node \n',tree.lookup(39)); // this child should be 42 on right
    // tree.remove(9);
    // console.log(tree.root);

    // console.log('remove', tree.remove(170)); // should return node 170
    // console.log(traverse(tree.root));
}

