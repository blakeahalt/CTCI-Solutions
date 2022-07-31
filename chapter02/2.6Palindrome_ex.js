// if doubly - move to middle, and then extend front and back to check
// if singly - make a reversed linkedlist from the first half

// let LinkedList = require('../util/LinkedList');
var LinkedList = function(val) {
  this.val = val;
  this.next = null;
};

var a = new LinkedList('1');
var b = new LinkedList('2');
var c = new LinkedList('3');
var d = new LinkedList('4');
var e = new LinkedList('a');
var f = new LinkedList('b');
var g = new LinkedList('c');
var h = new LinkedList('d');
var i = new LinkedList('c');
var j = new LinkedList('b');
var k = new LinkedList('a');
var l = new LinkedList('4');
var m = new LinkedList('3');
var n = new LinkedList('2');
var o = new LinkedList('1');

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

var printList = function(a) {
	while (a !== null) {
		console.log(a.val);
		a = a.next;
	}
};

const print = (node) => {
	if (node === null) return;
		console.log(node.val)
		print(node.next)
}

let palindrome = function(head) {
  let mid = head;
    console.log('mid:',mid);
  let end = head;
    console.log('end:',end);
  let isEven = true;
  let firstHalf = null;
  let frontNode = null;

  while (end.next !== null) {
    isEven = true;
    if (firstHalf === null) {
      firstHalf = new LinkedList(mid.val);
        console.log('firstHalf in LinkedList:',firstHalf);
    } else {
        console.log('\n' + 'else');
      frontNode = firstHalf;
        console.log('frontNode=firstHalf:', frontNode);
      firstHalf = new LinkedList(mid.val);
        console.log('firstHalf in LinkedList2:', firstHalf);
      firstHalf.next = frontNode;
        console.log('firstHalf.next:', firstHalf.next);
    }
    mid = mid.next;
    end = end.next;
      console.log('mid=mid.next',mid);
      console.log('end=end.next',end);
      if (end.next !== null) {
        end = end.next;
          console.log('end=end.next2',end);

      isEven = false;
    }
  }

  if (!isEven) {
    mid = mid.next;
    console.log('!isEven; mid:',mid);
  }
  
  while(mid !== null) {
    // console.log(mid.value, firstHalf.value);
    if (mid.value !== firstHalf.value) {
      return false;
    }
    mid = mid.next;
    console.log('!==null; mid:',mid);
    if (firstHalf!== null) {
      firstHalf = firstHalf.next;
        console.log('firstHalf=firstHalf.next:', firstHalf);
    }
  }
  return true;

};

/* TEST */


console.log(print(palindrome(a)));

