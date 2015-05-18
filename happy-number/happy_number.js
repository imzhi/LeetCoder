/**
 * Author: imzhi
 * Date: 2015-05-18
 * Result: Accepted
 * Runtime: 176 ms
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // 正整数判断，参考：http://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
    if (n !== parseInt(n, 10) || n <= 0) {
        return false;
    }

    var sum_arr = [], num_str, len, i, sum;

    while (true) {
        num_str = n + '';
        len = num_str.length;
        i = 0;
        sum = 0;
        while (i < len) {
            sum += Math.pow(parseInt(num_str[i++]), 2);
        }

        if (sum === 1) {
            return true;
        } else if (sum_arr.indexOf(sum) > -1) {
            return false;
        } else {
            sum_arr.push(sum);
            n = sum;
        }
    }
};
