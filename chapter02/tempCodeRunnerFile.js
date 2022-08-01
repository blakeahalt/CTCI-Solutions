  var intersection = function(headA, headB) {
          let currA = headA;
          let currB = headB;
          // console.log(currA);
          // console.log(currB);
          
          while (currA !==currB) {
              currA = currA === null ? headB : currA.next;
              currB = currB === null ? headA : currB.next;
              
              if (currA === currB) {
                return currA;
              }
            }
            
            console.log('currA:',currA);
          return currA;
      };

       const Node = function(val) {
           this.val = val;
           this.next = next;
       }
      
console.log(intersection(a,e));