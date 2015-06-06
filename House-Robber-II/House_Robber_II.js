/**
 * Author: imzhi
 * Date: 06-05
 * Result: Accepted
 * Runtime: 152 ms
 * Remark: 提交了5次通过
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length;
    if (len === 0) return 0;
    else if (len === 1) return nums[0];
    else if (len === 2) return Math.max(nums[0], nums[1]);

    /**
     * 首尾连接的[1,...,n]的最大值可简化为解[1,...,n-1],[2,...,n]这两种情况的最大值
     */
    var nums2 = nums.slice(0);
    nums.pop();
    nums2.shift();

    var max = [], max2 = [];
    var i;
    for (i = 0; i < len - 1; i++) {
        if (i === 0) {
            max[0] = nums[0];
            max2[0] = nums2[0];
        } else if (i === 1) {
            max[1] = Math.max(nums[0], nums[1]);
            max2[1] = Math.max(nums2[0], nums2[1]);
        } else {
            max[2] = Math.max(max[1], max[0] + nums[i]);
            max2[2] = Math.max(max2[1], max2[0] + nums2[i]);

            max.shift();
            max2.shift();
        }
    }

    return Math.max(max[1], max2[1]);
};