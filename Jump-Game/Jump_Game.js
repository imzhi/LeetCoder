/**
 * Author: imzhi
 * Date: 2015-05-20
 * Result: Accepted
 * Runtime: 140 ms
 * Remark: 第8次提交才通过...
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var len = nums.length, i = 0, last_arr = [], is_positive = true;
    if (!len) {
        return false;
    }
    for (i = 0; i < len; i++) {
        if (typeof nums[i] !== 'number' || nums[i] < 0) {
            return false;
        }

        if (nums[i] === 0) {
            last_arr.push(i);
            if (i < len - 1) {
                is_positive = false;
            }
        }
    }

    // is_positive 表示数组除最后一个元素外所有的数都为正数
    if (len === 1 || is_positive) {
        return true;
    }
    // 数组中按顺序来的每一个0，与其前面的元素的距离，均不大于元素本身的值，is_continue=false，否则，is_continue=true
    // 若有元素的值+元素的位置>=数组的最大下标，返回true
    // [3,2,1,0,4] 或 [0,2,1,0,4] 或 [3,1,1,0,4] 或 [1,0,1,0] 或 [5,4,0,2,0,1,0,1,0] 返回false
    // [4,2,1,0,4] 或 [3,2,2,0,4] 或 [2,0,0] 或 [1,1,2,2,0,1,1] 返回true
    var last_len, k, last, is_continue;
    for (k = 0, last_len = last_arr.length; k < last_len; k++) {
        is_continue = false;
        last = last_arr[k];
        for (i = 0; i < last; i++) {
            if (nums[i] > last - i) {
                if (k === last_len - 1) {
                    return true;
                }
                is_continue = true;
            }
            if (nums[i] + i >= len - 1) {
                return true;
            }
        }

        if (!is_continue) {
            break;
        }
    }
    return false;
};
