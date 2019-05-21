class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.length = 0;
    this.head = null;
    this.tail = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    return this.getNode(index) && this.getNode(index).val;
};

MyLinkedList.prototype.getNode = function (index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
        counter++;
        current = current.next;
    }
    return current;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new Node(val);
    if (!this.head) {
        this.head = this.tail = node;
    } else {
        node.next = this.head;
        this.head = node;
    }
    this.length++;
    return this;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new Node(val);
    if (!this.head) {
        this.head = this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    this.length++;
    return this;

};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.addAtTail(val);
    if (index === 0) return !!this.addAtHead(val);

    const previousNode = this.getNode(index - 1);
    const newNode = new Node(val);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
    return true;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length - 1 && index === 0) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return;
    } else if (index === this.length - 1) {
        let newTail = this.get(index - 1);
        newTail.next = null;
        this.tail = newTail;
    } else if (index === 0) {
        this.head = this.head.next;
    } else {
        let previousNode = this.getNode(index - 1);
        let targetNode = this.getNode(index);
        previousNode.next = targetNode.next;
    }
    this.length--;
};

MyLinkedList.prototype.pop = function () {

}

var obj = new MyLinkedList()
obj.addAtHead(1)
obj.deleteAtIndex(0);
// obj.addAtTail(3)
// obj.addAtIndex(1, 2)
// obj.deleteAtIndex(1);
console.log(obj);

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */