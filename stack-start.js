class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let currNode = this.head;
            while (currNode.next) {
                currNode = currNode.next;
            }
            currNode.next = newNode;
        }
        this.length++;
        return;
    }

    pop() {
        if (!this.head) {
            return null;
        } else if (this.length === 1) {
            let temp = this.head
            this.head = null;
            this.length = 0;
            return temp;
        } else {
            let currNode = this.head;
            for (let i = 0; i < this.length - 2; i++) {
                currNode = currNode.next;
            }
            let temp = currNode.next;
            currNode.next = null;
            this.length--;
            return temp;
        }
    }
    
    printAll() {
        if (this.length === 0) {
            console.log("Nothing.");
            return;
        }
        let currNode = this.head;
        while (currNode) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }
}

let myStack = new Stack();
myStack.push("Chris");
myStack.push("David");
myStack.push("Kevin");
myStack.pop();
myStack.push("Bob");
myStack.printAll()
console.log(myStack.length);
