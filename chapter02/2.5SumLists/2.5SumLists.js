// /* 
// Given two numbers represented by two lists, write a function that adds the two numbers 
// and return the sum as a linked list. The digits are stored in reverse order.
// EXAMPLE
// Input: [7,1,6] + [5,9,2]
// Output: [2,1,9] --> 617 + 295 = 912
// */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null
	}
}

const a = new Node(7)
const b = new Node(1)
const c = new Node(6)

a.next = b
b.next = c
// c.next = d

const e = new Node(5)
const f = new Node(9)
const g = new Node(2)

e.next = f
f.next = g
// g.next = h

// MY SOLUTION
function sumList (head1, head2) {

  let current1 = head1
  // console.log(current1)  // LinkedList{7, next:LL{1,next:LL{6, next:null}}}
  let current2 = head2
  // console.log(current2)  // LinkedList{5, nextLL{9, next: LL{2, next:null}}}
  let head3 = new Node()
  let current3 = head3

  carry = 0
  
  while (current1 || current2 || carry) {
    currSum = current1.val + current2.val
    // console.log(currSum);  // 12, 10, 8
    // if (current1 && current2) {
    carry += currSum
    // console.log('carry:', carry); // 12, 11, 9
    current1 = current1.next
    current2 = current2.next
    // console.log(current1);  // Node{1, next{6, next:null}}, Node{6, next:null}, null  *interates through linked list
    // }  
    
    current3.next = new Node(carry % 10)
    // console.log('current3.next:', current3.next); // Node{2, next:null}, Node{1, next:null}, Node{9, next:null}
    current3 = current3.next
    // console.log(current3);  // Node{2, next:null}, Node{1, next:null}, Node{9, next:null}
    // console.log(current3.next);  // null, null, null
    carry = carry >= 10 ? 1 : 0
    // console.log('last carry:', carry); // 1, 1, 0
  }
  return head3.next
}

// OTHER SOLUTION
// function sumList(l1, l2) {
//   let head = new Node();
//   let current = head; // Will always be tail of created LL

//   let carry = 0;

//   while (l1 !== null || l2 !== null) {
//     if (l1) {
//       carry += l1.val;
//       l1 = l1.next;
//     }

//     if (l2) {
//       carry += l2.val;
//       l2 = l2.next;
//     }

//     current.next = new Node(carry % 10);
//     current = current.next;
//     carry = carry >= 10 ? 1 : 0;
//   }

//   return head.next;
// }

const print = (node) => {
  if (node === null) return;
  console.log(node.val)
  print(node.next)
}

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


const newHead = sumList(a, e);
// print(newHead)                                        // 219
// print(IterativeReverseList(newHead))                  // 912
// console.log(IterativeReverseList(sumList(a,e)));      // Node{9, next:{1, next{2, next:null}}}
print(IterativeReverseList(sumList(a,e)))             // 912

 