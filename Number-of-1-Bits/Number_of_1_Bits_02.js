/**
 * Author: imzhi
 * Date: 2015-05-20
 * Result: Accepted
 * Runtime: 188 ms
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var bin = n.toString(2), bin_arr = bin.split("");
    // reduce 方法 initial value 为 0 要加上，否则当 n 为 0 或者 1 时，rv 返回 string 类型的值，导致通过不了
    // 另一个解决方法：return +rv
    var rv = bin_arr.reduce(function(previous, current) {
        return (+previous) + (+current);
    }, 0);
    return rv;
};
