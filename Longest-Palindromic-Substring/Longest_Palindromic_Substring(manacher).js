/**
 * 用的manacher算法。参考资料：http://www.felix021.com/blog/read.php?2040
 * Author: imzhi
 * Date: 06-20
 * Runtime: 148 ms
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var str = "$#" + s.split("").join("#") + "#", len = str.length;
    var p = Array(len), id = 0, max = 0, i = 0, rmax = 0, rid = 0;

    for (; i < len; i++) {

        p[i] = max > i ? Math.min(p[2 * id - i], max - i) : 1;

        while (str[i + p[i]] === str[i - p[i]]) {
            ++p[i];
        }

        if (p[i] + i > max) {
            max = p[i] + i;
            id = i;
        }

        if (p[i] > rmax) {
            rmax = p[i];
            rid = i;
        }
    }

    return str.slice(rid - rmax + 1, rid + rmax).replace(/#/g, "");
};
