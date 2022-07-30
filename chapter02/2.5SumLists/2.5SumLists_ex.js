// /* 
// Given two numbers represented by two lists, write a function that adds the two numbers 
// and return the sum as a linked list. The digits are stored in reverse order.
// EXAMPLE
// Input: [7,1,6] + [5,9,2]
// Output: [2,1,9] --> 617 + 295 = 912
// */

// class Node {
// 	constructor(val) {
// 		this.val = val;
// 		this.next = null
// 	}
// }

var LinkedList = function(value) {
       this.value = value;
       this.next = null;
     };
     
     var a = new LinkedList(7);
     var b = new LinkedList(1);
     var c = new LinkedList(6);
     
     a.next = b;
     b.next = c;
     
     var e = new LinkedList(5);
     var f = new LinkedList(9);
     var g = new LinkedList(2);
     
     e.next = f;
     f.next = g;
     
     
const print = (node) => {
	if (node === null) return;
		console.log(node.val)
		print(node.next)
}

var printList = function(a) {
	while (a !== null) {
		console.log(a.value);
		a = a.next;
	}
};
// print(a)

// const newHead = IterativeReverseList(a)		// working
// const newHead = deleteValue(a, "d")	// working
// const newHead = recursiveReverseList(a)	// working
// const newHead = SumLists(a,e)	

// var newa = SumLists(a, e);
// printList(newa);
     
       
       
// console.log('-')
// print(SumLists(a,e))
// var LinkedList = require('./../util/LinkedList');
// var printList = require('./../util/printList');
     
     
var sumList = function(head1, head2) {
	
  var node1 = head1;
		// console.log(node1);  // LinkedList {7,next:LL{1,next:LL{6,next:null}}}
  var node2 = head2;
		// console.log(node2);  // LinkedList {5,next:LL{9,next:LL{2,next:null}}}
  var node3 = null;
  var head3 = null;
	
  var ones;
  var tens = 0;
  var sum;
	
  while (node1 !== null && node2 !== null) {
    if (node1 === null) {
      sum = node2.value;
    } else if (node2 === null) {
      sum = node1.value;
    } else {
      sum = node1.value + node2.value;
    }
		// console.log(node2.value);     // 5 9 2
		// console.log(node1.value);     // 7 1 6 
		// console.log(sum);             // 12 10 8

    sum += tens;
    ones = sum % 10;
    if (node3 === null) {
      head3 = new LinkedList(ones);
      // console.log(ones);       // 2
      // console.log(head3);      // LinkedList 2
      node3 = head3;
      // console.log(node3);      // LinkedList 2
    } else {
      node3.next = new LinkedList(ones);
      node3 = node3.next;
      // console.log(node3);      // LinkedList {1, next: 9}
    }

    tens = Math.floor(sum / 10);

    if (node1 !== null) {
      node1 = node1.next;
      // console.log(node1);         // LL {1, next: LL {6, next: null}}
    }
		
    if (node2 !== null) {
      node2 = node2.next;
      // console.log(node2);        // LL {9, next: LL {2, next: null}}
    }
		
  }
  if (tens > 0) {
    node3.next = new LinkedList(tens);
    node3 = node3.next;
    // console.log(node3);
  }
	
  // console.log(head3);             // LL {2, next: LL {1, next: LL {9, next: null}}}
  return head3;
};
     
const IterativeReverseList = (head) => {
	let prev = null
	// let current = head

	while (head !== null) {
		const next = head.next
		head.next = prev
		prev = head
		head = next
	}
return prev
}
     
     /* TEST */
     
     // Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
     // Output: 2 -> 1 -> 9. the answer refers to 912
     
var newHead = sumList(a, e);
// printList(newHead)
printList(IterativeReverseList(newHead))

      