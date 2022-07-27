    //  var partition = function(head, partition) {
    //    // approach is to create left and right threads
    //    // and attach nodes with values less than partition value to the left
    //    // and nodes with values more than partition value to the right
    //    var left;
    //    var middle;
    //    var right;
    //    var currLeft = null;
    //    var currMiddle = null;
    //    var currRight = null;
     
    //    var node = head;
    //    while (node !== null) {
    //      if (node.value < partition) {
    //        if (currLeft === null) {
    //          left = node;
    //          currLeft = left;
    //        } else {
    //          currLeft.next = node;
    //          currLeft = currLeft.next;
    //        }
    //      } else if (node.value === partition) {
    //        if (currMiddle === null) {
    //          middle = node;
    //          currMiddle = middle;
    //        } else {
    //          currMiddle.next = node;
    //          currMiddle = currMiddle.next;
    //        }
    //      } else {
    //        if (currRight === null) {
    //          right = node;
    //          currRight = right;
    //        } else {
    //          currRight.next = node;
    //          currRight = currRight.next;
    //        }
    //      }
    //      node = node.next;
    //    }
    //    currRight.next = null;
    //    // connect the left values with those matching the partition value
    //    currLeft.next = middle;
    //    // connect the middle with the right partitions
    //    currMiddle.next = right;
    //    return left; // return head of new linkedList
    //  };


class Node {
	constructor(val) {
		this.val = val;
		this.next = null
	}
}
	
// const a = new Node("a")
// const b = new Node("b")
// const c = new Node("c")
// const d = new Node("d")
// const e = new Node("e")
// const f = new Node("f")
// const g = new Node("g")
// const h = new Node("h")
// const i = new Node("i")
// const j = new Node("j")

// a.next = b
// b.next = c
// c.next = d
// d.next = e
// e.next = f
// f.next = g
// g.next = h
// h.next = i
// i.next = j


// const deleteValue = (head, target) => {
// 	if (head === target) {
// 		return head.next
// 	}
// 	let prev = null
// 	let curr = head
// 	while (curr !== null) {
// 		if (curr.val === target) {
// 		prev.next = curr.next
// 		}
// 		prev = curr
// 		curr = curr.next
	
// 	}
// 	return head
// }

// // Iterative reverse linked list
// const IterativeReverseList = (head) => {
// 	let prev = null
// 	// let current = head

// 	while (head !== null) {
// 		const next = head.next
// 		head.next = prev
// 		prev = head
// 		head = next
// 	}
// return prev
// }

// // Recursive reverse linked list
// const recursiveReverseList = (head, prev = null) => {
// 	if (head === null) return prev;
// 	const next = head.next
// 	head.next = prev
// 	return reverseList(next, head)
// }


/* 
Given a linked list and a value x, partition it such that all nodes less than x come 
first, then all nodes with a value greater than or equal to x.
EXAMPLE
Input: [1,4,3,2,5,2], partition = 3
Output: [1,2,2,4,3,5]
*/

// const LinkedList = require("../util/LinkedList");
// const LinkedList = require("../util/LinkedListX");


function partition(node, x) {
  const beforeHead = new LinkedList("Filler");
  const afterHead = new LinkedList("Filler");

  let before = beforeHead;
  let after = afterHead;

  while (node) {
    if (node.data < x) {
      before.next = node;
      before = before.next;
    } else {
      after.next = node;
      after = after.next;
    }

    node = node.next;
  }

  before.next = afterHead.next;
  after.next = null;

  return beforeHead.next;
}
	
const print = (node) => {
  if (node === null) return;
  console.log(node.val)
  print(node.next)
}

print(a)

// const newHead = IterativeReverseList(a)		// working
// const newHead = deleteValue(a, "d")	// working
// const newHead = recursiveReverseList(a)	// working
const newHead = partition(a,e)	

console.log('-')
console.log(partition(a,e));
print(newHead)

     

     /* TESTS */
     // Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
     // Output: 3 -> 2 -> 1 -> 5 -> 5 -> 8 -> 10
     
    //  var printList = function(a) {
    //    while (a !== null) {
    //      console.log(a.value);
    //      a = a.next;
    //    }
    //  };
     
     var a = new LinkedList(3);
     var b = new LinkedList(5);
     var c = new LinkedList(8);
     var d = new LinkedList(5);
     var e = new LinkedList(10);
     var f = new LinkedList(2);
     var g = new LinkedList(1);
     var h = new LinkedList(6);
     var i = new LinkedList(21);
     
     a.next = b;
     b.next = c;
     c.next = d;
     d.next = e;
     e.next = f;
     f.next = g;
     g.next = h;
     h.next = i;
     i.next = j;
     
    //  var newa = partition(a, 5);
    //  printList(newa);
     