/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    // let negative1;
    // let negative2;
    // let negative3;
    // let positive1;
    // let positive2;
    // let positive3;

    let maxHeap = new MaxHeap();
    let minHeap = new MinHeap();
    for (let num of nums) {
        if (num >= 0) {
            maxHeap.insert(num);
        } else {
            minHeap.insert(num);
        }
    }
    console.log(minHeap);
    console.log(maxHeap);
    if (!maxHeap.size) return minHeap.values.reduce((a, b) => a * b, 1);
    if (maxHeap.size + minHeap.size === 3) return [...minHeap.values, ...maxHeap.values].reduce((a, b) => a * b, 1);
    let highestPositive = maxHeap.extract();
    let n;


    return highestPositive * Math.max(maxHeap.extract() * maxHeap.extract(), minHeap.extract() * minHeap.extract());
};
module.exports = maximumProduct;

class MaxHeap {
    get size() {
        return this.values.length;
    }

    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;

        if (index === 0) return;

        let parentIndex = Math.floor((index - 1) / 2);

        while (this.values[index] > this.values[parentIndex]) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    extract() {
        if (!this.size) return 1;
        let lastIndex = this.values.length - 1;
        [this.values[0], this.values[lastIndex]] = [this.values[lastIndex], this.values[0]];
        const result = this.values.pop();

        let parentIndex = 0;
        let leftChildIndex = parentIndex * 2 + 1;
        let rightChildIndex = parentIndex * 2 + 2;

        while ((this.values[leftChildIndex] !== undefined && this.values[leftChildIndex] > this.values[parentIndex]) ||
            (this.values[rightChildIndex] !== undefined && this.values[rightChildIndex] > this.values[parentIndex])) {
            let highestChildIndex;
            if (this.values[leftChildIndex] === undefined || this.values[rightChildIndex] === undefined)
                highestChildIndex = leftChildIndex || rightChildIndex;
            else
                highestChildIndex = this.values[leftChildIndex] > this.values[rightChildIndex] ? leftChildIndex : rightChildIndex;
            [this.values[highestChildIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[highestChildIndex]];
            parentIndex = highestChildIndex;
            leftChildIndex = parentIndex * 2 + 1;
            rightChildIndex = parentIndex * 2 + 2;
        }
        return result;
    }
}

class MinHeap {
    get size() {
        return this.values.length;
    }

    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;

        if (index === 0) return;

        let parentIndex = Math.floor((index - 1) / 2);

        while (this.values[index] < this.values[parentIndex]) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    extract() {
        if (!this.size) return 1;
        let lastIndex = this.values.length - 1;
        [this.values[0], this.values[lastIndex]] = [this.values[lastIndex], this.values[0]];
        const result = this.values.pop();

        let parentIndex = 0;
        let leftChildIndex = parentIndex * 2 + 1;
        let rightChildIndex = parentIndex * 2 + 2;

        while ((this.values[leftChildIndex] !== undefined && this.values[leftChildIndex] < this.values[parentIndex]) ||
            (this.values[rightChildIndex] !== undefined && this.values[rightChildIndex] < this.values[parentIndex])) {
            let lowestChildIndex;
            if (this.values[leftChildIndex] === undefined || this.values[rightChildIndex] === undefined)
                lowestChildIndex = leftChildIndex || rightChildIndex;
            else
                lowestChildIndex = this.values[leftChildIndex] < this.values[rightChildIndex] ? leftChildIndex : rightChildIndex;
            [this.values[lowestChildIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[lowestChildIndex]];
            parentIndex = lowestChildIndex;
            leftChildIndex = parentIndex * 2 + 1;
            rightChildIndex = parentIndex * 2 + 2;
        }
        return result;
    }
}