/**
 * Author: imzhi
 * Date: 2015-05-21
 * Result: Accepted
 * Runtime: 496 ms
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    if (typeof n !== "number" || typeof m !== "number" ||
        m < 0 || n < m || 2147483647 < n) {
        return -1;
    }

    if (m === n) {
        return m;
    }

    var bin_m = m.toString(2), bin_n = n.toString(2);
    if (bin_m.length < bin_n.length) {
        return 0;
    }

    var i, sub = "";
    for (i = 0; i < bin_m.length; i++) {
        sub += Math.abs((+bin_n[i]) - (+bin_m[i])).toString();
    }

    // 只用判断二进制不同的最大位数（截断原数据），将不大于此位数全部置为0，添加至被截断的原数据后面
    var one_index = sub.indexOf("1");
    var rv = bin_m.slice(0, one_index) + sub.slice(one_index).replace(/1/g, "0");
    return parseInt(rv, 2);
};
