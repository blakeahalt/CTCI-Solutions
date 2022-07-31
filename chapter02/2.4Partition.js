/* 
Given a linked list and a value x, partition it such that all nodes less than x come 
first, then all nodes with a value greater than or equal to x.
EXAMPLE
Input: [1,4,3,2,5,2], partition = 3
Output: [1,2,2,3,4,5]
*/

// MY SOLUTION

var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};
     
const partitionList = (head, partition) => {
  let left
	let middle 
	let right

	let currleft = null
	let currmiddle = null
	let currright = null

	let current = head 
  while (current !== null) {
    if (current.value < partition) {
      if (currleft === null) {
				left = current
				currleft = left
			} else {
				currleft.next = current
				currleft = currleft.next
			}
		} else if (current.value === partition)	{
			if (currmiddle === null) {
				middle = current
				currmiddle = middle
			}
			else {
				currmiddle.next = current
				currmiddle = currmiddle.next
			}
		} else {
			if (current.value > partition) {
				if (currright === null) {
					right = current
					currright = right
				}
				else {
					currright.next = current
					currright = currright.next
				}
			}
		}
		current = current.next

	}
	currleft.next = middle;
	currmiddle.next = right;
	currright.next = null;
		// connect the left values with those matching the partition value
		// connect the middle with the right partitions
       return left; // return head of new linkedList
	}
			

// OTHER SOLUTION
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

//   while (node) {
//     if (node.data < x) {
//       before.next = node;
//       before = before.next;
//     } else {
//       after.next = node;
//       after = after.next;
//     }

//     node = node.next;
//   }

//   before.next = afterHead.next;
//   after.next = null;

//   return beforeHead.next;
// }
	
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

/* TESTS */// -------------------------------------

// print(a)

// const newHead = IterativeReverseList(a)		// working
// const newHead = deleteValue(a, "d")	// working
// const newHead = recursiveReverseList(a)	// working
// const newHead = partitionList(a,5)	

// console.log('-')
// print(newHead)

var a = new LinkedList(1);
var b = new LinkedList(4);
var c = new LinkedList(3);
var d = new LinkedList(2);
var e = new LinkedList(5);
var f = new LinkedList(2);
// var g = new LinkedList(1);
// var h = new LinkedList(7);
// var i = new LinkedList(12);
// var j = new LinkedList(4);
// var k = new LinkedList(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// f.next = g;
// g.next = h;
// h.next = i;
// i.next = j;
// j.next = k;
// k.next = l;

var newa = partitionList(a, 3);
printList(newa);
