// var isSubstring = function(string1, string2) {
//        if (string1.length !== string2.length) {
//          return false;
//        }
//        console.log(string1);
//        console.log(string2);
//        return (string2 + string2).includes(string1); // one call of isSubString
//      };

//     //  Approaches:
//     //  a) sorting chars before comparing -> know if it is permutation but not know if it is in the right order
//     //  b) look for starting character before moving around and rotating -> starting characters might repeat
//     //  c) break string 2 into a front and back, and ensure that front tallies with isSubstring before doing isSubstring

function isSubstring(str1, str2) {

  // let String1 = str1.split()
  // let String2 = str2.split()
  console.log('str1:', str1)
  console.log('str2:', str2)

  let charMatch = {};

  setTemp = (string1, string2) => {
    for (char in Object.entries(string2)) {
      if (Object.values(string1)[0] === Object.values(string2)[char]) {
        charMatch[char] = true
        // console.log(Object.keys(charMatch).length);

        for(char in charMatch){    
          //  if (char.length > 1) {
            console.log(char);
            let rotated = string2.slice(char) + string2.slice(0,char)
            // for (char in charMatch) {
            if (rotated === string1) {
              return "\n" + rotated + " is a rotation of " + "\n" + string1
            } else if (rotated !== string1) {
              char ++
              if (rotated === string1) {
                  return "\n" + rotated + " is a rotation of " + "\n" + string1
                } 
                // } else {
                //   return "\n" +  rotated + " is not a rotation of " + "\n" + string1
                // }
              
            } else {
              return "\n" +  rotated + " is not a rotation of " + "\n" + string1
              // console.log(rotated);

          }
        // }
        // if (char.length === 1) {
        //     let rotated = string2.slice(char) + string2.slice(0,char)
        //     // console.log(rotated);
        //     if (rotated === string1) {
        //         return "\n" + rotated + " is a rotation of " + "\n" + string1
        //       } 
        //   }
         
        }

        // if (charMatch[char] = 1) {
        //   for(i in charMatch){                      
        //     let rotated = string2.slice(char) + string2.slice(0,char)
        //     // console.log(rotated);
        //     if (rotated === string1) {
        //         return "\n" + rotated + " is a rotation of " + "\n" + string1
        //       } else {
        //         return "\n" +  rotated + " is not a rotation of " + "\n" + string1
        //       }
        //   }

          // let rotated = string2.slice(tempKey) + string2.slice(0,tempKey)
          // console.log(string1);
          // console.log(string2.slice(tempKey));
          // console.log(rotated);
          // if (rotated === string1) {
          //   return "\n" + rotated + " is a rotation of " + "\n" + string1
          // } else {
          //   return "\n" +  rotated + " is not a rotation of " + "\n" + string1
          // }
        // }
        // if (tempKey.length > 1) {
        //   for (i=0; i<tempKey.length; i++) {
        //     if (str1[0] === tempKey[i]) {
        //       console.log(tempKey);
        //       return string2.slice(tempKey) + string2.slice(0, tempKey)
        //     } else {
        //       return false
        //     }
        //   }
        // }
      } 
    } 
  }
  console.log(setTemp(str1,str2));
}
  
    // const tempIndex = () => {

    //   for (i = 0; i < str1.length; i++) {
    //     for (j = 0; j < str2.length; j++) {
    //       if (str2[j] === str1[0]) {
    //         let temp = str2[j]
    //           if (temp > 1) {
    //             for (chars of temp) {
    //               if (temp[chars] === str1[0]) {
    //               temp = Object.keys(str2[j])
                    
    //                 console.log(chars)
    //               }
    //             }
    //           } 
    //         // break
    //         // console.log(temp);
    //         // console.log(Object.keys(temp));
    //         // let newTemp = str2.slice(temp,N)
    //         // console.log(str2.slice(temp,N));
    //         // console.log(newTemp);
    //         let newTemp = Object.keys(str2[j])
    //         console.log(newTemp);
  
    //       }
        
      
//       }
//   }
// }

// Test
console.log(isSubstring('waterbottle', 'bottlewater'), true);
console.log(isSubstring('waterbottle', 'erbotlewatt'), false);
console.log(isSubstring('aataa', 'aaaat'), true);






