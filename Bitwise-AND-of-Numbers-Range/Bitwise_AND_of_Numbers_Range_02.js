/**
 * Author: imzhi
 * Date: 2015-05-21
 * Result: Accepted
 * Runtime: 500 ms
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
    var bin_m = m.toString(2), bin_n = n.toString(2),
        m_len = bin_m.length, n_len = bin_n.length;
    if (m_len < n_len) {
        return 0;
    }

    // 只用判断二进制不同的最大位数（截断原数据），将不大于此位数全部置为0，添加至被截断的原数据后面
    var i, diff, sub = "", non_zero = false;
    for (i = 0; i < m_len; i++) {
        diff = Math.abs((+bin_n[i]) - (+bin_m[i]));
        if (non_zero) {
            sub += 0;
        } else if (diff === 0) {
            sub += bin_m[i];
        } else if (diff === 1) {
            sub += 0;
            non_zero = true;
        }
    }
    return parseInt(sub, 2);
};