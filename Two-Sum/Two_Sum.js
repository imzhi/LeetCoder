/**
 * Author: imzhi
 * Date: 05-31
 * Result: Accepted
 * Runtime: 236 ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var tempArray = [], nums_len = nums.length, i = 0, num, tempPos;

    /**
     * 临时数组存放目标值减去当前下标值的差值。每次遍历原数组，
     * 都去查询临时数组中的差值是否有存在的，有则符合条件，直接退出循环
     */
    for (; i < nums_len; i++) {
        num = nums[i];

        tempPos = tempArray.indexOf(num);
        if (tempPos > -1) {
            break;
        }

        tempArray.push(target - num);
    }

    return [tempPos + 1, i + 1];
};