
class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

// const LinkedList = function (val) {
//   this.val = val;
//   this.next = null;
// };

var a = new Node(2)
var b = new Node(4)
var c = new Node(6)
var d = new Node(14)
var e = new Node(29)

var f = new Node(9)
var g = new Node(12)
var h = new Node(14)
var i = new Node(29)

a.next = b
b.next = c
c.next = d
d.next = e
f.next = g
g.next = d
h.next = e

        // MY SOLUTION WITH ERROR CHECKS
        // function intersection(head1, head2) {
        //   let current1 = head1
        //   // console.log('head1:', current1);
        //   // console.log('head1.next:', head1.next);
        //   // console.log('current1.next:', current1.next);
        //   let current2 = head2
        //   // console.log('head2:',current2);

        //   if (head1 === null || head2 === null) {
        //     return null
        //   }

        //   while (current1 !== current2) {

        //     current1 = current1.next
        //     // console.log('c1->c1.next:',current1);
        //     current2 = current2.next
        //     // console.log ('c2->c2.next:',current2);

        //     // console.log('c1===c2:',current1);
        //     if (current1 === null) current1 = head2
        //     // console.log('should be head2:', current1);
            
        //     if (current2 === null) current2 = head1
        //     if (current1 === current2) {
        //       return current1
        //     }
        //     // console.log('should be head1:', current2);
        //     // console.log(current1);
        //     // console.log(current2);
        //   }
        //   // console.log(current1);
        //   return current1
        // };
        
// MY SOLUTION 
insert
function intersection(head1, head2) {
  let current1 = head1
  let current2 = head2

  if (head1 === null || head2 === null) {
    return null
  }

  while (current1 !== current2) {

    current1 = current1.next
    current2 = current2.next

    if (current1 === null) current1 = head2
    if (current2 === null) current2 = head1
    if (current1 === current2) {
      return current1
    }
  }
  return current1
};


// OTHER SOLUTION
//   var intersection = function(headA, headB) {
//     let currA = headA;
//     let currB = headB;
//     // console.log(currA);
//     // console.log(currB);
    
//     while (currA !==currB) {
//         currA = currA === null ? headB : currA.next;
//         currB = currB === null ? headA : currB.next;
        
//         if (currA === currB) {
//           return currA;
//         }
//       }
      
//       console.log('currA:',currA);
//     return currA;
// };

// OTHER SOLUTION
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

var newHead = intersection(a, f);
printList(newHead);
// console.log(intersection(a,f));