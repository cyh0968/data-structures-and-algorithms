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
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }

        let currentNode = this.root;

        while (currentNode) {
            let nextNode = null;

            if (compareNumbers(currentNode.value, value) > 0) {
                nextNode = currentNode.left;
                if (currentNode.left === null) {
                    currentNode.left = new Node(value);
                }
            } else if (compareNumbers(currentNode.value, value) < 0) {
                nextNode = currentNode.right;
                if (currentNode.right === null) {
                    currentNode.right = new Node(value);
                }
            }
            
            currentNode = nextNode;
        }
    }

    lookup(value) {

    }

    remove(value) {

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

JSON.stringify(traverse(tree.root));


//       9
//   4       20
// 1   6   15  170

