class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    // this.val = value
  }
}


// var LinkedList = function(value) {
//   this.value = value;
//   this.next = null;
// };

// var a = new LinkedList(7);
// var b = new LinkedList(1);
// var c = new LinkedList(6);

// a.next = b;
// b.next = c;

// var e = new LinkedList(5);
// var f = new LinkedList(9);
// var g = new LinkedList(2);

// e.next = f;
// f.next = g;

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

function sumList(l1, l2) {
  let head = new Node();
  let current = head; // Will always be tail of created LL

  let carry = 0;

  while (l1 !== null || l2 !== null) {
    if (l1) {
      carry += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      carry += l2.val;
      l2 = l2.next;
    }

    current.next = new Node(carry % 10);
    current = current.next;
    carry = carry >= 10 ? 1 : 0;
  }

  return head.next;
}


const print = (node) => {
  if (node === null) return;
  console.log(node.val)
  print(node.next)
}

// var printList = function(a) {
//   while (a !== null) {
//     console.log(a.value);
//     a = a.next;
//   }
// };

// console.log(sumList(a,e))
const newHead = sumList(a, e);
print(newHead)


// var newa = sumList(a, e);
// printList(newa);