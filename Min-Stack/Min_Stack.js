/**
 * Author: imzhi
 * Date: 06-11
 * Result: Time Limit Exceeded
 * @constructor
 */
var MinStack = function() {
    this.arr = [];
    this.min = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
    if ( !this.min.length || x <= this.min[ this.min.length - 1 ] ) {
        this.min.push(x);
    }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var temp = this.arr.pop();
    if ( temp === this.min[ this.min.length - 1 ] ) {
        this.min.pop();
    }
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
    return this.min[ this.min.length - 1 ];
};
