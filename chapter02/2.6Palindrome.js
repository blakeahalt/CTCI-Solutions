// if doubly - move to middle, and then extend front and back to check
// if singly - make a reversed linkedlist from the first half
// let LinkedList = require('../util/LinkedList');
class Node {
	constructor(val) {
		this.val = val;
		this.next = null
	}
}


const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(a);
const f = new Node(b);
const g = new Node(c);
const h = new Node(d);
const i = new Node(c);
const j = new Node(b);
const k = new Node(a);
const l = new Node(4);
const m = new Node(3);
const n = new Node(2);
const o = new Node(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;
j.next = k;
k.next = l;
l.next = m;
m.next = n;
n.next = o;

// var LinkedList = function (val) {
//   this.val = val;
//   this.next = null;
// };

// var a = new LinkedList('1');
// var b = new LinkedList('2');
// var c = new LinkedList('3');
// var d = new LinkedList('4');
// var e = new LinkedList('a');
// var f = new LinkedList('b');
// var g = new LinkedList('c');
// var h = new LinkedList('d');
// var i = new LinkedList('c');
// var j = new LinkedList('b');
// var k = new LinkedList('a');
// var l = new LinkedList('4');
// var m = new LinkedList('3');
// var n = new LinkedList('2');
// var o = new LinkedList('1');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;
// g.next = h;
// h.next = i;
// i.next = j;
// j.next = k;
// k.next = l;
// l.next = m;
// m.next = n;
// n.next = o;

// const palindrome = function(head) {
//   var mid = head;
//   var end = head;
//   var isEven = true;
//   var firstHalf = null;
//   var frontNode = null;

//   while (end.next !== null) {
//     isEven = true;
//     if (firstHalf === null) {
//       firstHalf = new LinkedList(mid.value);
//     } else {
//       frontNode = firstHalf;
//       firstHalf = new LinkedList(mid.value);
//       firstHalf.next = frontNode;
//     }
//     mid = mid.next;
//     end = end.next;
//     if (end.next !== null) {
//       end = end.next;
//       isEven = false;
//     }
//   }

//   if (!isEven) {
//     mid = mid.next;
//   }

//   while(mid !== null) {
//     // console.log(mid.value, firstHalf.value);
//     if (mid.value !== firstHalf.value) {
//       return false;
//     }
//     mid = mid.next;
//     if (firstHalf!== null) {
//       firstHalf = firstHalf.next;
//     }
//   }
//   return true;
// };

const reverse = head => {
  let cur = head
  let prev = null
  let next

  while (cur) {
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

const palindrome = function (head) {
  let fast = head
  let slow = head
  let current = new Node(fast)
  let len = 0

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  console.log('fast:', fast);
  console.log('slow:', slow);
  console.log('len++:', len);
  let mid = reverse(slow)
  fast = head
  console.log('regular mid:', reverse(slow));
  console.log('reverse mid:', mid);

  while (mid !== null) {
    if (mid.val !== current.val) {
      return false
    }
    mid = mid.next
    current = current.next
    // console.log('mid.next:',mid);
    // console.log('current:',current.val);
  }
  return true
}
const print = (node) => {
  if (node === null) return;
  console.log(node.val)
  print(node.next)
}

var printList = function (a) {
  while (a !== null) {
    console.log(a.value);
    a = a.next;
  }
};

/* TEST */
const newHead = palindrome(a)
print(newHead)
// console.log(print(palindrome(a)));
// printList(palindrome(a))