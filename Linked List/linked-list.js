class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    prepend(data) {
        let node = this.head;
        if (!node) {
            this.head = new Node(data);
            return this.head;
        }
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;

        return this.head;
    }

    append(data) {
        let node = this.head;
        if (!node) {
            this.head = new Node(data);
            return this.head;
        }
        if (!node.next) {
            node.next = new Node(data);
            return node.next;
        }
        while(node.next) {
            node = node.next;
        }
        node.next = new Node(data);
        return node.next;
    }

    size() {
        let count = 0;
        while (this.head) {
            count++;
            this.head = this.head.next
        }
        return count++
    }

    clear() {
        this.head = null;
    }

    deleteWithValue(data) {
        if (!this.head) {
            return false;
        }
        if(this.head.data === data) {
            this.head = this.head.next;
            return true;
        }
        let current = this.head;
        while(current.next) {
            if(current.next.data === data) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

// let node1 = new Node(2);
// let node2 = new Node(5);
// let node3 = new Node(5);
// node1.next = node2;
// node2.next = node3;
// let list = new LinkedList(node1);
// console.log(list.head.data);
// console.log(list.head.next.data);
// console.log(list.size());
// console.log(list.clear());
// console.log(list.size());

// let node1 = new Node(2);
// let list = new LinkedList(node1);
// list.append(5);
// list.append(6);
// console.log(list);
// console.log(list.head.data);
// console.log(list.head.next.data);
// console.log(list.head.next.next.data);
// console.log(list.size());

// let node1 = new Node(2);
// list.append(5);

let node1 = new Node(2);
let list = new LinkedList(node1);
list.prepend(5);
console.log(list);
console.log(list.deleteWithValue(2));
console.log(list);
console.log(list.size());