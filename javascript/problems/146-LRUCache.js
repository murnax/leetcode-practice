class Node {
    constructor(key, value, next = null, prev = null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.size = 0;
    this.limit = capacity;
    this.head = this.tail = null;
    this.cache = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    return this.getNode(key) ? this.getNode(key).value : -1;
};

LRUCache.prototype.getNode = function (key) {
    const node = this.cache[key];
    if (!node) return -1;
    const { value } = node;
    this.remove(key);
    this.put(key, value);
    return node;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

    if (key in this.cache) {
        this.remove(key);
        // this.cache[key].value = value;
    }

    // remove least used data if cache already full
    this.ensureLimit();

    const node = new Node(key, value);
    if (!this.head) {
        this.head = this.tail = node;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    this.size++;
    this.cache[key] = node;

};

LRUCache.prototype.ensureLimit = function () {
    if (this.size === this.limit) {
        // remove tail (least used)
        this.remove(this.tail.key);
    }
}

LRUCache.prototype.remove = function (key) {
    const node = this.cache[key];
    if (node.prev) {
        node.prev.next = node.next;
    } else {
        this.head = node.next;
    }

    if (node.next) {
        node.next.prev = node.prev;
    } else {
        this.tail = node.prev;
    }
    delete this.cache[key];
    this.size--;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var cache = new LRUCache(2 /* capacity */);

cache.put(2, 6);
cache.put(1, 5);
cache.put(1, 2);