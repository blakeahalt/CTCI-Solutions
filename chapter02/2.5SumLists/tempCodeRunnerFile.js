ar printList = function(a) {
    while (a !== null) {
      console.log(a.value);
      a = a.next;
    }
  };