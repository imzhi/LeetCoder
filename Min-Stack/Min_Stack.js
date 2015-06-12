/**
 * Author: imzhi
 * Date: 06-11
 * Result: Time Limit Exceeded
 * @constructor
 */
var MinStack = function() {
    this.arr = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.arr[ this.arr.length - 1 ];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min.apply(null, this.arr);
};