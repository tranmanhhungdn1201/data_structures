// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}

class Queue {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }

    peek() {
        return this.head.data;
    }

    add(data) {
        if (!this.tail) {
            this.tail = new Node(data);
        }

        if (!this.tail.next) {
            this.tail.next = new Node(data);
        }
        this.tail = this.tail.next;
    }
}


let node1 = new Node(5);
let node2 = new Node(2);
node1.next = node2;
let queue = new Queue(node1, node1);
queue.add(4);
queue.add(6);
queue.add(7);
console.log(queue);
console.log(queue.head.data);
console.log(queue.tail.data);