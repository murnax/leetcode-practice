/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const result = [];
    const queue = new PriorityQueue();
    const map = nums.reduce((a, b) => { a[b] = ++a[b] || 1; return a; }, {});

    for (let i of Object.keys(map)) {
        queue.enqueue(new Node(i, map[i]));
    }

    for (let j = 0; j < k; j++) {
        result.push(+queue.dequeue().value);
    }
    return result;
};

class PriorityQueue {
    constructor() {
        /** @type {Node[]} */
        this.values = [];
    }

    /**
     * 
     * @param {string} value 
     * @param {number} priority 
     */
    static createNode(value, priority) {
        return new Node(value, priority);
    }

    /**
     * 
     * @param {Node} node 
     */
    enqueue(node) {
        this.values.push(node);
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (this.values[parentIndex] !== undefined
            && this.values[parentIndex].priority < this.values[index].priority) {
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            [index, parentIndex] = [parentIndex, Math.floor((parentIndex - 1) / 2)];
        }
        return this;
    }

    /**
     * @returns {Node}
     */
    dequeue() {
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        const result = this.values.pop();
        let index = 0;
        let leftIndex = 2 * index + 1;
        let rightIndex = 2 * index + 2;
        while ((this.values[leftIndex] && this.values[index].priority < this.values[leftIndex].priority) ||
            (this.values[rightIndex] && this.values[index].priority < this.values[rightIndex].priority)) {
            let targetIndex;
            if (this.values[rightIndex]) {
                targetIndex = this.values[leftIndex].priority > this.values[rightIndex].priority ? leftIndex : rightIndex;
            } else {
                targetIndex = leftIndex;
            }
            [this.values[index], this.values[targetIndex]] = [this.values[targetIndex], this.values[index]];
            index = targetIndex;
            leftIndex = 2 * index + 1;
            rightIndex = 2 * index + 2;
        }
        return result;
    }
}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}