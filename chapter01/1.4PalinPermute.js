// MY SOLUTION
function getFrequency(string) {
       const freq = {};
     
         for (const char of string.toLowerCase().split("")) {
           if (char !== " ") {
             freq[char] = freq[char] +1 || 1
           }
           // console.log(char)
           // console.log(Object.keys(freq))
           // console.log(Object.values(freq))
           console.log(char)
           console.log([char])
           console.log(freq[char])
           console.log(freq)
           console.log("\n");
         }
     
         let oddCount = 0;
         for (const count of Object.values(freq)) {
         if (count % 2 !== 0) {
           // console.log(freq)
           if (oddCount >= 1) {
             return false;
           }
           oddCount += 1;
         }
       }
       return true;
     }
     
     // TESTS
     console.log(getFrequency('Tact Coa'), true);
     console.log(getFrequency('Tact boa'), false);
     console.log(getFrequency('Ace Carr'), true);
     console.log(getFrequency('Ace Car'), false);
     console.log(getFrequency('kayak'), true);
     