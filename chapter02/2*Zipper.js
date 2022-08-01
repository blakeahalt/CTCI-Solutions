class Node {
	constructor(val) {
		this.val = val;
		this.next = null
	}
}
	
const a = new Node("z")
const b = new Node("p")
const c = new Node("e")
const d = new Node("l")
const e = new Node("s")
const f = new Node("i")
const g = new Node("p")
const h = new Node("r")
const i = new Node("i")
const j = new Node("t")
const k = new Node("f")
const l = new Node("t")
const m = new Node("w")

// const a = new Node(3)
// const b = new Node(6)
// const c = new Node(1)
// const d = new Node(12)
// const e = new Node(5)
// const f = new Node(8)
// const g = new Node(2)
// const h = new Node(4)
// const i = new Node(9)
// const j = new Node(7)
// const k = new Node(10)
// const l = new Node(18)

a.next = b
b.next = c
c.next = d
d.next = e
// e.next = f

f.next = g
g.next = h
h.next = i
i.next = j
j.next = k
k.next = l
l.next = m
     
/* 
Given 2 linked lists, create a list that alternates the nodes from each list, starting at the heads of each.
EXAMPLE
Input: [1,2,3,4,5], [6,7,8,9,10]
Output: [1,6,2,7,3,8,4,9,5,10]
*/

const zipperLists = (head1, head2) => {
  let tail = head1
  let current1 = head1.next
  let current2 = head2
  let count = 0

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2
      current2 = current2.next
    } else {
      tail.next = current1
      current1 = current1.next
    }
    tail = tail.next
    count += 1
  }
  
  if (current1 !== null) tail.next = current1
  if (current2 !== null) tail.next = current2
  return head1
}
	
const print = (node) => {
  if (node === null) return;
  console.log(node.val)
  print(node.next)
}

// print(a)

// const newHead = IterativeReverseList(a)		// working
// const newHead = deleteValue(a, "d")	// working
// const newHead = recursiveReverseList(a)	// working
const newHead = zipperLists(a,f)	


console.log('-')
print(newHead)