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
// // var g = new LinkedList(1);
// // var h = new LinkedList(7);
// // var i = new LinkedList(12);
// // var j = new LinkedList(4);
// // var k = new LinkedList(9);

// // h.next = i;
// // i.next = j;
// // j.next = k;
// // k.next = l;
	
// // const a = new Node("a")
// // const b = new Node("b")
// // const c = new Node("c")
// // const d = new Node("d")
// // const e = new Node("e")
// // const f = new Node("f")
// // const g = new Node("g")
// // const h = new Node("h")
// // const i = new Node("i")
// // const j = new Node("j")
// // const k = new Node("k")
// // const l = new Node("l")

// const a = new Node(7)
// const b = new Node(1)
// const c = new Node(6)

// a.next = b
// b.next = c
// // c.next = d

// const e = new Node(5)
// const f = new Node(9)
// const g = new Node(2)

// e.next = f
// f.next = g
// // g.next = h

// // const g = new Node(2)
// // const h = new Node(4)
// // const i = new Node(9)
// // const j = new Node(7)
// // const k = new Node(10)
// // const l = new Node(18)

var sumList = function(head1, head2) {

  let current1 = head1
  let current2 = head2
  let tail = null
  let head3 = null
  // let currSum1
  // let currSum2
  // let currSum3

  let currSum 
  // let current1 = head1.next
  // let current2 = head2

  while (current1 !== null && current2 !== null) {
    if (currSum > 9) {
      if (tail === null) {
        currSum = current1.value + current2.value - 10
        // console.log(current1.value);
        // console.log(current2.value);
        tail = currSum
      } else {
        tail.next = currSum - 10
        // current1 = current1.next
        // current2 = current2.next
        tail = tail.next
        // console.log(tail);
        // console.log(currSum);
      }
      current1 = current1.next
      current2 = current2.next
    } else if (currSum <= 9) {
      if (tail === null) {
        currSum = current1.value + current2.value
        tail = currSum
      } else {
        // tail.next = currSum
        // current1 = current1.next
        // current2 = current2.next
        tail = tail.next
        // console.log(tail);
        // console.log(currSum);
      }
      current1 = current1.next
      current2 = current2.next
    }

  } 
    // console.log(tail)
    return tail.next
  }

  
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


// var sumList = function(head1, head2) {
  
//   var node1 = head1;
//   var node2 = head2;
//   var node3 = null;
//   var head3 = null;
  
//   var ones;
//   var tens = 0;
//   var sum;
  
//   while (node1 !== null && node2 !== null) {
//     if (node1 === null) {
//       sum = node2.value;
//     } else if (node2 === null) {
//       sum = node1.value;
//     } else {
//       sum = node1.value + node2.value;
//     }

//     sum += tens;
//     ones = sum % 10;
//     if (node3 === null) {
//       head3 = new LinkedList(ones);
//       node3 = head3;
//     } else {
//       node3.next = new LinkedList(ones);
//       node3 = node3.next;
//     }

//     tens = Math.floor(sum / 10);

//     if (node1 !== null) {
//       node1 = node1.next;
//     }

//     if (node2 !== null) {
//       node2 = node2.next;
//     }

//   }
//   if (tens > 0) {
//     node3.next = new LinkedList(tens);
//     node3 = node3.next;
//   }

//   return head3;
// };

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

// var a = new LinkedList(7);
// var b = new LinkedList(1);
// var c = new LinkedList(6);

// a.next = b;
// b.next = c;

// var d = new LinkedList(5);
// var e = new LinkedList(9);
// var f = new LinkedList(2);

// d.next = e;
// e.next = f;

var newHead = sumList(a, e);
printList(IterativeReverseList(newHead))
// printList(newHead);

