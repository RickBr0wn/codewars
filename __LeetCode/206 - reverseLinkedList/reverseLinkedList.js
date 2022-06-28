/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head, newHead = null) {
  if (head === null) {
    return newHead
  }

  let next = head.next
  head.next = newHead
  newHead = head
  head = next

  return reverseList(head, newHead)
}
