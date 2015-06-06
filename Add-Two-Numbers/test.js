function ListNode(val) {
    this.val = val;
    this.next = null;
}

function node(val) {
    this.head = new ListNode(val);

    this.add = function(val) {
        var curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = new ListNode(val);
    };

    this.get = function() {
        return this.head;
    };
}

//var curr;
//var head = new ListNode(1);
//curr = head;
//curr.next = new ListNode(2);
//curr = curr.next;
//curr.next = new ListNode(3);
//curr = curr.next;
//curr.next = new ListNode(99);
//curr = curr.next;
//curr.next = new ListNode(100);

//console.log(head);

//var head = new node(5);
//head.add(2);
//head.add(3);
//head.add(4);
//head.add(6);

//console.log(head.get());

//var l1 = new node(2);
//l1.add(4);
//l1.add(3);
//
//var l2 = new node(5);
//l2.add(6);
//l2.add(4);
//
//console.log(addTwoNumbers(l1.get(), l2.get()));

var l1 = new node(9);
l1.add(8);
l1.add(7);
l1.add(2);

var l2 = new node(6);
l2.add(9);
l2.add(9);
l2.add(8);

console.log(addTwoNumbers(l1.get(), l2.get()));

var l1 = new node(9);
l1.add(8);
l1.add(7);
l1.add(2);

var l2 = new node(6);
l2.add(9);
l2.add(9);

console.log(addTwoNumbers(l1.get(), l2.get()));

//var l1 = new node(1);
//
//var l2 = new node(9);
//l2.add(9);
//
//console.log(addTwoNumbers(l1.get(), l2.get()));