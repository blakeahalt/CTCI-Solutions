
class Node {
	constructor(val) {
		this.val = val;
		this.next = null
	}
}

const a = new Node(3)
const b = new Node(6)
const c = new Node(6)
const d = new Node(12)
const e = new Node(5)
const f = new Node(8)
const g = new Node(6)
const h = new Node(4)
const i = new Node(6)
const j = new Node(7)
const k = new Node(10)
const l = new Node(18)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g
g.next = h
h.next = i
i.next = j
j.next = k
k.next = l
// l.next = m

// function removeDuplicates(list) {
//   const _set = new Set();
//   let cur = list.head;
//   let prev = null;
//   while (cur) {
//     if (_set.has(cur.value)) {
//       // duplicate found
//       // de-link it from the list
//       // cur jumps next but previous stays
//       // right behind cur (as always)
//       let elem = cur;
//       prev.next = cur.next;
//       cur = cur.next;
//       elem.next = null;
//     }
//     else {
//       // add to the set
//       _set.add(cur.value);
//       prev = cur;
//       cur = cur.next;
//     }
//   }

//   return list;
// }

// function removeDuplicates (list) {
//   const set = new Set()
//   let prev = null
//   let curr = list.head
//   while (curr) {
//     if (set.has(curr.value)) {
//       let elem = curr
//       prev.next = curr.next
//       curr = curr.next
//       elem.next = null

//     } else {
//       set.add(curr.value)
//       prev = curr
//       curr = curr.next
//     }
// }
//   return list
// }

function removeDuplicates(head) {
  const map = {};

  let current = head;
  let previous = null;

  while (current) {
    if (current.val in map) {
      previous.next = current.next;
    } else {
      map[current.val] = true;
      previous = current;
    }

    current = current.next;
  }
}


// function removeDuplicates (list) {
//   let set  = new Set()
//   let prev = null
//   let curr = list.head

//   while (curr) {
//     if (set.has(curr.val)) {
//       let elem = curr
//       prev.next = curr.next
//       curr = curr.next
//       elem.next = null
//     }
//     else {
//       set.add(curr.val)
//       prev = curr
//       curr = curr.next
//     }
//   }
//   return list
// }
// quick test
// let list = new LinkedList();
// for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
//   list.append(elem);
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

// console.log(removeDuplicates(a));
const newHead = (removeDuplicates(a))
printList(newHead)
// printList(removeDuplicates(a));

// console.log(list._toArray()); // [1, 5, 6, 8]
