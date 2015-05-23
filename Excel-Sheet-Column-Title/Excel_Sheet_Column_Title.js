/**
 * Author: imzhi
 * Date: 2015-05-24
 * Result: Accepted
 * Runtime: 116 ms
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if (typeof n !== 'number' || n <= 0) {
        return "";
    }

    // 数字对应的字母值，1-A,2-B,3-C,...,26-Z
    var num2digit = new Array(27);
    // A 的 unicode 值是 65
    var i;
    for (i = 1; i <= 26; i++) {
        num2digit[i] = String.fromCharCode(64 + i);
    }

    var unit, place_array = [], place_len = 0;
    while (1) {
        unit = n % 26;
        // 根据条件，n只能为正数，因此，当余数为0时，说明此位应用Z表示
        if (!unit) {
            unit = 26;
        }
        place_len = place_array.unshift(unit);
        // 将已计算的尾数从n值里减去
        n -= unit;

        // n为0时直接跳出循环
        if (!n) {
            break;
        }

        // 当n可以被26整除时，先除以26，方便下一次循环获取尾数
        if (n % 26 === 0) {
            n /= 26;
        }
    }

    var title = "";
    for (i = 0; i < place_len; i++) {
        title += num2digit[place_array[i]];
    }

    return title;
};