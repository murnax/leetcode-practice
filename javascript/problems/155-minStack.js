/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.vals = [];
    this.minVals = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (!this.minVals.length || x <= this.getMin()) this.minVals.push(x);
    this.vals.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.top() === this.getMin()) this.minVals.pop();
    this.vals.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.vals[this.vals.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minVals[this.minVals.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */