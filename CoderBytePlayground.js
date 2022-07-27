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

const deleteValue = (head, target) => {
	if (head === target) {
		return head.next
	}
	let prev = null
	let curr = head
	while (curr !== null) {
		if (curr.val === target) {
		prev.next = curr.next
		}
		prev = curr
		curr = curr.next
	}
	return head
}

// Iterative reverse linked list
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

// Recursive reverse linked list
const recursiveReverseList = (head, prev = null) => {
	if (head === null) return prev;
	const next = head.next
	head.next = prev
	return reverseList(next, head)
}
	
const print = (node) => {
  if (node === null) return;
  console.log(node.val)
  print(node.next)
}

print(a)

// const newHead = IterativeReverseList(a)	// working
// const newHead = deleteValue(a, "d")			// working
// const newHead = recursiveReverseList(a)	// working

console.log('-')
print(newHead)
