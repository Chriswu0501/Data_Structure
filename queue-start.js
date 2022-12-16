class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    enqueue(value) {
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
    }

    dequeue() {
        if (!this.head) {
            return null;
        } else if (this.length === 1) {
            let temp = this.head;
            this.head = null;
            this.length = 0;
            return temp;
        } else {
            let temp = this.head;
            this.head = this.head.next;
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

let myQueue = new Queue();
myQueue.enqueue("Chris");
myQueue.enqueue("David");
myQueue.enqueue("Kevin");
myQueue.dequeue();
myQueue.enqueue("Bob");
myQueue.enqueue("Harry");
myQueue.printAll();
console.log(myQueue.length);
