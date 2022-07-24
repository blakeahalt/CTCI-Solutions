// var checkPermute = function(stringOne, stringTwo) {
//     // if different lengths, return false
//     if (stringOne.length !== stringTwo.length) {
//         return false;
//       // else sort and compare 
//       // (doesnt matter how it's sorted, as long as it's sorted the same way)
//       } else {
//           var sortedStringOne = stringOne.split('').sort().join('');
//           var sortedStringTwo = stringTwo.split('').sort().join('');
//           return sortedStringOne === sortedStringTwo;
//         }
//       };
      
// MY 1st SOLUTION: Didn't check for specific values of characters - only length
// function checkPermute (str1, str2) {
//   if (str1.length != str2.length) return false;
  
//   let letters = new Array(128)
//   for (i = 0; i < str1.length; i++) {
//     letters[str1.charAt(i)]++;
//   }
//   for (i = 0; i < str2.length; i++) {
//     letters[str2.charAt(i)]--;
//     if (letters[str2.charAt(i) < 0]) {
//       return false;
//     }
//   }
//   return true;
//   }

// MY 2nd SOLUTION: checks for same length and compares character values
// Runtime: O(2N)?
// Also specific to ASCII parameter, otherwise top solution can test for broader cases

function checkPermute (str1, str2) {
       if (str1.length != str2.length) return false;
       
       const str1ASCII = str1.split("").reduce((acc, val) => {
             return acc + val.charCodeAt(0);
         }, 0)
       const str2ASCII = str2.split("").reduce((acc, val) => {
             return acc + val.charCodeAt(0);
         }, 0)
         
         if (str1ASCII === str2ASCII && str1.length === str2.length) {
           console.log(str1ASCII)
           console.log(str2ASCII)
           return true
         }
         else {
           console.log(str1ASCII)
           console.log(str2ASCII)
           return false
         }
     }
     
     // Tests
     
     console.log(checkPermute('kayak', 'aaaay'), false);
     console.log(checkPermute('kayak', 'aakky'), true);
     console.log(checkPermute('art', 'tar'), true);
     console.log(checkPermute('aba', 'aab'), true);
     console.log(checkPermute('art', 'car'), false);
     console.log(checkPermute('kayak', 'aaaaa'), false);
     console.log(checkPermute('aba', 'aab'), true);
     // console.log(checkPermute('art', 'ttar'), false);  ## Won't log any more str1ASCII/str2ASCII values, but only if false??
     // console.log(checkPermute('aa', 'aba'), false);
     // console.log(checkPermute('aba', 'aaba'), false);