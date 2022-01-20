class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val){
        let new_node = new Node(val);
        if(!this.head){
            this.head=new_node;
            return this;
        }
        new_node.next=this.head;
        this.head=new_node;
        return this;
    }
    front() {
        return this.head.data;
    }
    removeFront() {
        if(!this.head){
            return null;
        }
        this.head = this.head.next;
        return "just removed the head";
    }
}

const banana = new LinkedList();
banana.addFront(5);
banana.addFront(4);
banana.addFront(3);
console.log(banana.head.data);
console.log(banana.head.next.data);
console.log(banana.head.next.next.data);

console.log("*****");
console.log(banana.front());
console.log(banana.removeFront());
console.log(banana.front());

console.log("*****");

const cat = new LinkedList();
console.log(cat.removeFront());
