/**
 * Author: imzhi
 * Date: 2015-05-24
 * Result: Accepted
 * Runtime: 140 ms
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var nums_len = nums.length;
    if (!nums_len) {
        return 0;
    }

    var d = new Array(nums_len), i;

    /**
     * 类似背包问题进行动态规则
     * 状态转移方程：d[i] = max(d[i-2] + nums[i], d[i-1])，表示到i下标时不相邻数能形成的最大和
     * d[0] = nums[0], d[1] = max(nums[0], nums[1]), d[2] = max(d[0] + nums[2], d[1]), ...
     */
    for (i = 0; i < nums_len; i++) {
        if (i === 0) {
            d[0] = nums[0];
        } else if (i === 1) {
            d[1] = Math.max(nums[0], nums[1]);
        } else {
            d[i] = Math.max(d[i - 2] + nums[i], d[i - 1]);
        }
    }

    return d[nums_len - 1];
};

//var arr = [1,2,3,4,5,6];
//var arr = [1,2,3,4,5,6,7,8,9,10];
//var arr = [2,1,1,2];
var arr = [183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211];
var aa = rob(arr);
l(aa);

function l(){ Function.apply.call(console.log, console, arguments); }