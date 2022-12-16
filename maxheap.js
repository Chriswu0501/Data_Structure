class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        if (this.values.length == 0) {
            this.values.push(newNode);
            return true;
        }
        this.values.push(newNode);
        let newIndex = this.values.length - 1;
        let parentIndex = Math.floor((newIndex - 1) / 2);
        while (
            parentIndex >= 0 &&
            this.values[newIndex].priority > this.values[parentIndex].priority
        ) {
            //swap parent & child
            let temp = this.values[newIndex];
            this.values[newIndex] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            newIndex = parentIndex;
            parentIndex = Math.floor((newIndex - 1) / 2);
        }
    }

    dequeue() {
        if (this.values.length == 0) {
            return null;
        } else if (this.values.length == 1) {
            let removeNode = this.values.pop();
            return removeNode;
        } else {
            // swap two nodes
            let temp = this.values.pop();
            this.values.push(this.values[0]);
            this.values[0] = temp;
            let removedNode = this.values.pop();

            this.maxHeapify(0);

            return removedNode;
        }
    }

    maxHeapify(i) {
        let largest;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        if (
            l <= this.values.length - 1 &&
            this.values[l].priority > this.values[i].priority
        ) {
            largest = l;
        } else {
            largest = i;
        }

        if (
            r <= this.values.length - 1 &&
            this.values[r].priority > this.values[largest].priority
        ) {
            largest = r;
        }

        if (largest != i) {
            // swap
            let temp = this.values[i];
            this.values[i] = this.values[largest];
            this.values[largest] = temp;
            this.maxHeapify(largest);
        }
    }
}
let pq = new PriorityQueue();
pq.enqueue("python", 5);
pq.enqueue("js", 7);
pq.enqueue("c++", 4);
pq.enqueue("java", 9);
pq.enqueue("rust", 6);
while (pq.values.length > 0) {
    console.log(pq.dequeue());
}
