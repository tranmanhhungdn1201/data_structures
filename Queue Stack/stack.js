function Node(data, next = null) {
    this.data = data;
    this.next = next;
}

function Stack(head) {
    this.head = head;

    this.push = function(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        }

        node.next = this.head;
        this.head = node;

        return this.head.data;
    }

    this.pop = function() {
        let data = this.head.data;
        this.head = this.head.next;
        return data;
    }
}


let node1 = new Node(5);
let node2 = new Node(2);
let stack = new Stack(node1);
console.log(stack.head.data);
stack.push(6);
console.log(stack);
console.log(stack.pop());
console.log(stack);