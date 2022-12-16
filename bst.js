class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.path = "";
        this.queue = [];
    }

    treeInsert(z) {
        let y = null;
        let x = this.root;

        while (x !== null) {
            y = x;
            if (z.key < x.key) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        if (y === null) {
            this.root = z;
        } else if (z.key < y.key) {
            y.left = z;
        } else {
            y.right = z;
        }
    }

    searchRecursively(x, value) {
        if (x === null || value === x.key) {
            return x;
        } else if (value < x.key) {
            return this.searchRecursively(x.left, value);
        } else {
            return this.searchRecursively(x.right, value);
        }
    }

    searchIteratively(x, value) {
        while (x !== null && x.key !== value) {
            if (x.key > value) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        if (x === null) {
            console.log("Not found!");
        } else {
            console.log("Node found!");
        }
        return x;
    }

    preOrder(n) {
        if (n !== null) {
            this.path += n.key + " ";
            this.preOrder(n.left);
            this.preOrder(n.right);
        }
    }

    inOrder(n) {
        if (n !== null) {
            this.inOrder(n.left);
            this.path += n.key + " ";
            this.inOrder(n.right);
        }
    }

    postOrder(n) {
        if (n !== null) {
            this.postOrder(n.left);
            this.postOrder(n.right);
            this.path += n.key + " ";
        }
    }

    bftt(n) {
        if (n !== null) {
            this.queue.push(n);
            for (let i = 0; i < this.queue.length; i++) {
                let currNode = this.queue[i];
                if (currNode !== null) {
                    if (currNode.left !== null) {
                        this.queue.push(currNode.left);
                    }
                    if (currNode.right !== null) {
                        this.queue.push(currNode.right);
                    }
                }
            }
        }
    }
}

let bst = new BST();
bst.treeInsert(new Node(11));
bst.treeInsert(new Node(6));
bst.treeInsert(new Node(5));
bst.treeInsert(new Node(10));
bst.treeInsert(new Node(7));
bst.treeInsert(new Node(1));
bst.treeInsert(new Node(3));
bst.treeInsert(new Node(9));
bst.treeInsert(new Node(4));
bst.treeInsert(new Node(12));
console.log(bst);

console.log(bst.searchRecursively(bst.root, 3));
console.log(bst.searchIteratively(bst.root, 4));
