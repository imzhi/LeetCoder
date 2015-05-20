/**
 * Author: imzhi
 * Date: 2015-05-20
 * Result: Accepted
 * Runtime: 160 ms
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var bin = n.toString(2), i = bin.length, rv = 0;
    while (i--) {
        bin[i] !== '0' && rv++;
    }
    return rv;
};
