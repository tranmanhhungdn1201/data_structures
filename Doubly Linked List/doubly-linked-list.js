class Node {
    constructor(data, next = null, pre = null) {
        this.data = data;
        this.next = next;
        this.pre = pre;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

let node1 = new Node(5);
let node2 = new Node(2);
node1.next = node2;
node2.pre = node1;
let list = new DoublyLinkedList(node1);
console.log(list.head.data);
console.log(list.head.next.data);
console.log(list.head.next.pre.data);