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
const f = new Node("f")
const g = new Node("g")
const h = new Node("h")
const i = new Node("i")
const j = new Node("j")

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g
g.next = h
h.next = i
i.next = j

const deleteValue = (head, target) => {
	if (head === target) {
		return head.next
	}
	let prev = null
	let current = head
	while (current !== null) {
		if (current.val === target) {
		prev.next = current.next
		console.log('prev:',prev);
		console.log('prev.next:',prev.next);
		console.log('current:',current);
		}
		prev = current
		current = current.next
	
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
	return recursiveReverseList(next, head)
}
	
const print = (node) => {
  if (node === null) return;
  console.log(node.val)
  print(node.next)
}


print(a)

// const newHead = IterativeReverseList(a)		// working
const newHead = deleteValue(a, "c")	// working
// const newHead = recursiveReverseList(a)	// working

console.log('-')
print(newHead)
