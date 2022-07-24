// MY SOLUTION
function stringCompression (str) {
       // traverse string, keep count of repeated chars
       // if cur and next char is the same, inc count
       // otherwise, concat cur char and count to output string
       // return compressed string, only if the length is less than the original string
       let compressed = '';
       let count = 1;
     
       for (i = 0; i < str.length; i++) {
         let cur = str[i];
         let next = str[i + 1];
         if (cur === next) {
           count++;
         } else {
           compressed += cur + count;
           count = 1;
         }
       }
       return compressed
     }
     // Below??
     // if (compressed.length < str.length) {
     //   return compressed
     // } else {
     //   return str
     // }
     // return compressed.length < str.length ? compressed : str;
     
     // OTHER SOLUTION
     // var stringCompression = function(string) {
     //   var compressed = '';
     //   var currChar = '';
     //   var currCount = '';
     //   var maxCount = 1;
     //   for (var i = 0; i < string.length; i++) {
     //     if (currChar !== string[i]) {
     //       console.log(currChar, string[i], i);
     //       compressed = compressed + currChar + currCount;
     //       maxCount = Math.max(maxCount, currCount);
     //       currChar = string[i];
     //       currCount = 1;
     //     } else {
     //       currCount++;
     //     }
     //   }
     //   compressed = compressed + currChar + currCount;
     //   maxCount = Math.max(maxCount, currCount);
     
     //   return maxCount === 1 ? string : compressed;
     // };
     
     
     // Test
     // console.log(stringCompression('aabcccccaaa'));
     console.log(stringCompression('aaaaaajja'));
     console.log(stringCompression('aaaaaacba'));
     console.log(stringCompression('aaaaaggeeeeed'));
     console.log(stringCompression('aaaaaa'));
     console.log(stringCompression('aabcccccaaa'));