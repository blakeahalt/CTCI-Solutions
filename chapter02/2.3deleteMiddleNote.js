// WALKTHROUGH SETUP
// const LinkedList = require("../util/LinkedListX");
// const printList = require("../util/printList");

// // OTHER SOLUTION - WALKTHROUGH
// // const deleteMidNode = (node) => {
// //   if (node === null || node.next === null) {
// //     return false
// //   }
// //   else {
// //     node = node.next
// //     node.next = node.next.next
// //   }
// //   return node
// // }

// // OTHER SOLUTION - WALKTHROUGH
// // function deleteMidNode(node) {

// //   if(node !== null && node.next !== null) {
// //     node = node.next;
// //     node.next = node.next.next;
// //     }
// // };

// // OTHER SOLUTION - WALKTHROUGH
// // function deleteMidNode(node) {
// //     if (node === null && node.next === null) {
// //         return false
// //       }
// //       else {
// //           node = node.next
// //           node.next = node.next.next
// //         }
// //       }
      
// // OTHER SOLUTION - CTCI
// function deleteMidNode(node) {
//     if (!node.next) {
//         return;
//       }
    
//       node = node.next;
//       node.next = node.next.next;
//     }
          
          

// /* TEST */

// let list = new LinkedList();
// for (let item of [1, 2, 3, 4, 5, 6, 7, 8]) {
//   list.append(item);
// }

// printList(list.head);
// console.log("-");
// deleteMidNode(list.head);
// printList(list.head);

// ----------------------------------------
// CODERBYTE SETUP
class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")

a.next = b
b.next = c
c.next = d
d.next = e

// OTHER SOLUTION - CODERBYTE
// const deleteMidValue = (head, target) => {
//   if (head === target) {
//     return head.next
//   }
//   let prev = null
//   let curr = head
//   while (curr !== null) {
//     if (curr.val === target) {
//       prev.next = curr.next
//     }
//     prev = curr
//     curr = curr.next

// }
// return head
// }


const reverseList = (head) => {
	let prev = null
	let current = head

	while (current !== null) {
		const next = current.next
		current.next = prev
		prev = current
		current = next
	}
return prev
}
	

const print = (node) => {
  if (node === null) return;
  console.log(node.val)
  print(node.next)
}

print(a)

const newHead = reverseList(a)

console.log('-')
// console.log(deleteMidValue(a));
print(newHead)














// let deleteMidNode = function(node) {

//   if(node !== null && node.next !== null) {
//     node.value = node.next.value;
//     node.next = node.next.next;
//     }
// };