// var LinkedList = require('./../util/LinkedList');
class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

var LinkedList = function (val) {
  this.val = val;
  this.next = null;
};


var a = new Node(2)
var b = new Node(5)
var c = new Node(14)
var d = new Node(29)

a.next = b
b.next = c
c.next = d

var e = new Node(10)
var f = new Node(14)
var g = new Node(29)

e.next = f
f.next = g
// g.next = h

// var a = new LinkedList(2)
// var b = new LinkedList(5)
// var c = new LinkedList(14)
// var d = new LinkedList(29)

// a.next = b
// b.next = c
// c.next = d

// var e = new LinkedList(10)
// var f = new LinkedList(14)
// var g = new LinkedList(29)

// e.next = f
// f.next = g
// // g.next = h

function intersection (head1, head2) {
  // The null checking code will handle lists with no loops.
  let current1 = head1
  // console.log('head1:', current1);
  // console.log('head1.next:', head1.next);
  // console.log('current1.next:', current1.next);
  let current2 = head2
  // console.log('head2:',current2);
  
  if (head1 === null || head2 === null) {
    return null
  }

  while (current1 !== current2) {
    
    current1 = current1.next
    console.log('c1->c1.next:',current1);
    current2 = current2.next
    console.log('c2->c2.next:',current2);

    if(current1 === current2) return current1
    // console.log('c1===c2:',current1);
    if (current1 === null) current1 = head2
      // console.log('should be head2:', current1);
    
    if (current2 === null) current2 = head1
      // console.log('should be head1:', current2);
    // console.log(current1);
    // console.log(current2);
  }
  // console.log(current1);
  return current1
};


// console.log(intersection(a,e));
  // do {
  //   hare = hare.next
  //   tortoise = tortoise.next
  //   if (!hare || !hare.next) return null
  //   hare = hare.next
  // } while (hare !== tortoise)

  // tortoise = head

  // while (hare !== tortoise) {
  //   hare = hare.next
  //   tortoise = tortoise.next
  // }

  // return hare


// OTHER SOLUTION
// /* 
// Given the heads of two singly linked-lists that eventually merge, write code that 
// returns the node at which the two lists intersect. 
// Example
// 2
//  \
//   5  10
//    \ /
//    14
//     |
//    29
// */

// function intersection(headA, headB) {
//   let currA = headA;
//   let currB = headB;
//   let lengthA = 0;
//   let lengthB = 0;

//   //Fetches List A length
//   while (currA) {
//     lengthA++;
//     currA = currA.next;
//   }

//   //Fetches List B length
//   while (currB) {
//     lengthB++;
//     currB = currB.next;
//   }

//   currA = headA;
//   currB = headB;

//   // Advance pointer for longer list by difference in lengths
//   let differenceInLength = Math.abs(lengthA - lengthB);
//   while (differenceInLength > 0) {
//     if (lengthA > lengthB) {
//       currA = currA.next;
//     } else {
//       currB = currB.next;
//     }

//     differenceInLength--;
//   }

//   //Move both pointers until collision, if no collision both will eventually be null
//   while (currA !== currB) {
//     currA = currA.next;
//     currB = currB.next;
//   }

//   // Return either one
//   return currA;
// }

// // _________ _______  _______ _________   _______  _______  _______  _______  _______
// // \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
// //    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
// //    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
// //    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
// //    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
// //    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
// //    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
// //                             ____       _
// //                             |  _ \     | |
// //                             | |_) | ___| | _____      __
// //                             |  _ < / _ \ |/ _ \ \ /\ / /
// //                             | |_) |  __/ | (_) \ V  V /
// //                             |____/ \___|_|\___/ \_/\_/
// //                         ______ ______ ______ ______ ______
// //                         |______|______|______|______|______|

// //                          ______ ______ ______ ______ ______
// //                         |______|______|______|______|______|

// //                          ______ ______ ______ ______ ______
// //                         |______|______|______|______|______|

// mocha.setup("bdd");
// const { assert } = chai;

// describe("Intersection Node", () => {
//   it("returns intersection correctly", () => {
//     const oneNode = new ListNode(1);
//     const twoNode = new ListNode(2);
//     const threeNode = new ListNode(3);

//     oneNode.next = threeNode;
//     twoNode.next = threeNode;

//     assert.equal(getIntersectionNode(oneNode, twoNode), threeNode);
//   });
//   it("returns null if no intersection", () => {
//     const l1 = convertArrToLL([0, 1, 2, 1, 3]);
//     const l2 = convertArrToLL([5]);
//     assert.equal(getIntersectionNode(l1, l2), null);
//   });
// });

// mocha.run();

/* TEST */
// A -> B -> C -> D -> E -> C

// var a = new LinkedList(A);
// var b = new LinkedList(B);
// var c = new LinkedList(C);
// var d = new LinkedList(D);
// var e = new LinkedList(E);
// var f = new LinkedList(C);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = c;
const print = (node) => {
  if (node === null) return;
  console.log(node.val)
  print(node.next)
}

var printList = function (a) {
  while (a !== null) {
    console.log(a.val);
    a = a.next;
  }
};

// const newHead = Intersection(a, e)
// printList(newHead)


/* TEST */

// var a = new LinkedList('a');
// var b = new LinkedList('b');
// var c = new LinkedList('c');
// var d = new LinkedList('d');
// var e = new LinkedList('e');
// var f = new LinkedList('f');
// var g = new LinkedList('g');
// var h = new LinkedList('h');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;
// g.next = h;

// var a1 = new LinkedList('a1');
// var b1 = new LinkedList('b1');
// var c1 = new LinkedList('c1');

// a1.next = b1;
// b1.next = c1;
// c1.next = d1;




var intersectNode = intersection(a, e);
print(intersection(a,e));
console.log(intersection(a,e));