/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Author: imzhi
 * Date: 2015-05-20
 * Result: Accepted
 * Runtime: 136 ms
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var curr = head, arr = [], i = 0;
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
        i++;
    }
    curr = head;
    while (curr) {
        curr.val = arr[--i];
        curr = curr.next;
    }
    return head;
};
