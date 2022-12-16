class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
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
    }

    pop() {
        if (!this.head) {
            return null;
        } else if (this.length === 1) {
            let temp = this.head;
            this.head = null;
            this.length = 0;
            return temp;
        } else {
            let currNode = this.head;
            for (let i = 1; i <= this.length - 2; i++) {
                currNode = currNode.next;
            }
            let temp = currNode.next;
            currNode.next = null;
            this.length--;
            return temp;
        }
    }

    shift() {
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

    unshift(value) {
        if(!this.head) {
            this.head = new Node(value);
        } else {
            let temp = this.head;
            let newNode = new Node(value);
            this.head = newNode;
            this.head.next = temp;
        }
        this.length++;
    }

    insertAt(index, value) {
        if (index > this.length - 1 || index < 0) {
            return null;
        } else if (index === 0) {
            this.unshift(value);
            return;
        } else if (index === this.length - 1) {
            this.push(value);
            return;
        }
        let currNode = this.head;
        let newNode = new Node(value);
        // for loop index - 1 steps
        for (let i = 1; i <= index - 1; i++) {
            currNode = currNode.next;
        }
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length++;
        return;
    }

    removeAt(index) {
        if (index > this.length - 1 || index < 0) {
            return numll;
        } else if (index === 0) {
            let result = this.shift();
            return result;
        } else if (index === this.length - 1) {
            let result = this.pop();
            return result;
        }
        let currNode = this.head;
        for (let i = 1; i <= index - 1; i++) {
            currNode = currNode.next;
        }
        let temp = currNode.next;
        currNode.next = currNode.next.next;
        this.length--;
        return temp;
    }

    get(index) {
        if (index > this.length - 1 || index < 0) {
            return null;
        }
        let currNode = this.head;
        for (let i = 1; i <= index; i++) {
            currNode = currNode.next;
        }
        return currNode.value;
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

let myLinkedList = new LinkedList();
myLinkedList.shift();
myLinkedList.push("Mike");
myLinkedList.push("Harry");
myLinkedList.shift();
myLinkedList.push("James");
myLinkedList.pop();
myLinkedList.push("Kevin");
myLinkedList.unshift("Chris");
myLinkedList.insertAt(2, "David");
myLinkedList.removeAt(1);
myLinkedList.printAll();
console.log(myLinkedList.length);
console.log(myLinkedList.get(1));
