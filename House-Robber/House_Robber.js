/**
 * Author: imzhi
 * Date: 2015-05-22
 * Result: Time Limit Exceeded
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 存储所有情况偷完整条街坊所得金额总额
    var arr = [];

    /**
     * 根据实际分析，只可能存在跳过1个或者跳过2个的情况存在，
     * 因此分别对这两种情况进行递归，求出总额最大值
     * @param index 开始的index（或者可理解为此时的index）
     * @param total 到此index时得到的总额
     */
    function find(index, total) {
        if (index >= nums.length - 2) {
            arr.push(total);
            return;
        }

        typeof nums[index + 2] !== 'undefined' && find(index + 2, total + nums[index + 2]);
        typeof nums[index + 3] !== 'undefined' && find(index + 3, total + nums[index + 3]);

        return Math.max.apply(null, arr);
    }

    return Math.max(find(0, nums[0]), find(1, nums[1]));
};
//var arr = [1,2,3,4,5,6];
//var arr = [1,2,3,4,5,6,7,8,9,10];
//var arr = [2,1,1,2];
var arr = [183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211];
var aa = rob(arr);
l(aa);

function l(){ Function.apply.call(console.log, console, arguments); }