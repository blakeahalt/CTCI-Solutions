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

var loopDetection = (head) => {
  if (!head || !head.next) return null
  
  var fast = head
  var slow = head
  
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next

    if(fast === slow) return true
  }
  return false
};


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

/* TEST */
// A -> B -> C -> D -> E -> C

var a = new LinkedList();
var b = new LinkedList();
var c = new LinkedList();
var d = new LinkedList();
var e = new LinkedList();
var f = new LinkedList();

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = c;

console.log(loopDetection(a), true);

var A = new LinkedList();
var B = new LinkedList();
var C = new LinkedList();
var D = new LinkedList();
var E = new LinkedList();
var F = new LinkedList();

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

console.log(loopDetection(A), false);
