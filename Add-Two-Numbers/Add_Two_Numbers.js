/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Author: imzhi
 * Date: 06-07
 * Result: Accepted
 * Runtime: 252 ms
 * Remark: 提交了2次通过
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var val1, val2, sum, digit, ge10 = 0,
        is_end1 = false, is_end2 = false,
        head, curr;

    do {
        val1 = is_end1 ? 0 : l1.val;
        val2 = is_end2 ? 0 : l2.val;
        sum = val1 + val2 + ge10;
        digit = sum % 10;

        if (!head) {
            head = new ListNode(digit);
            curr = head;
        } else {
            curr.next = new ListNode(digit);
            curr = curr.next;
        }

        ge10 = +(sum >= 10);

        if (!is_end1) {
            l1 = l1.next;
            if (!l1) {
                is_end1 = true;
            }
        }
        if (!is_end2) {
            l2 = l2.next;
            if (!l2) {
                is_end2 = true;
            }
        }
    } while (!is_end1 || !is_end2);

    if (ge10) {
        curr.next = new ListNode(1);
    }

    return head;
};