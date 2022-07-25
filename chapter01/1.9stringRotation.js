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

// function isSubstring(s1, s2) {
//        console.log(s1);
//        console.log(s2);
//   return s1.length === s2.length && (s1 + s1).includes(s2);
// }

function isSubstring(str1, str2) {

  // let String1 = str1.split()
  // let String2 = str2.split()
  // console.log('str1:', str1)
  // console.log('str2:', str2)
  // console.log('string1:',String1);
  // console.log('string2:',String2);
  // console.log(String1[0])
  // const temp = []
  let N = str2.length

  setTemp = (string1, string2) => {
    for (char in Object.entries(string2)) {
      if (Object.values(string1)[0] === Object.values(string2)[char]) {

        // let tempValue = string2[char];
        let tempKey = Object.keys(string2[char])
        for (i=0; i<tempKey.length; i++) {
          tempKey.push(Object.keys(string2)[char])
        // let tempAppend = str2.append(tempKey)
        }
        console.log(tempKey.length);
        // console.log(tempAppend);

        if (tempKey.length = 1) {
          let rotated = string2.slice(tempKey) + string2.slice(0,tempKey)
          console.log(string1);
          console.log(rotated);
          if (rotated === string1) {
            return string2 + " is a rotation of " + string1
          } else {
            return string2 + " is not a rotation of " + string1
          }
        }
        if (tempKey.length > 1) {
          for (i=0; i<tempKey.length; i++) {
            if (str1[0] === tempKey[i]) {
              console.log(tempKey);
              return string2.slice(tempKey) + string2.slice(0, tempKey)
            } else {
              return false
            }
          }

        }

        // console.log(tempValue);
        // console.log(tempKey);
        //  return tempKey
        // let stringMatch = string2[tempKey]
        // console.log(what);
        // console.log(string2[tempKey]);
        // let tempString = string2.slice(string2[tempKey],N)
        // console.log(tempString)
      }
    }
  }
  console.log(setTemp(str1,str2));

  const tempIndex = () => {

    for (i = 0; i < str1.length; i++) {
      for (j = 0; j < str2.length; j++) {
        if (str2[j] === str1[0]) {
          let temp = str2[j]
            if (temp > 1) {
              for (chars of temp) {
                if (temp[chars] === str1[0]) {
                temp = Object.keys(str2[j])
                  
                  console.log(chars)
                }
              }
            } 
          // break
          // console.log(temp);
          // console.log(Object.keys(temp));
          // let newTemp = str2.slice(temp,N)
          // console.log(str2.slice(temp,N));
          // console.log(newTemp);
          let newTemp = Object.keys(str2[j])
          console.log(newTemp);

        }
        // console.log(Object.values(String1[0]));
        // console.log(j)
        // index = str2.find(str1[0])
        // console.log(index)
        //   if (String1[0] === String2[j]){
        //     console.log(j.values)
        //   }
        // }
        // for (char in str2) {
        //   if (Object.values(str1[0]) === Object.values(str2[j])) {
        //     let indexMatch = Object.keys(str2[j])

        //     // console.log(str2[indexMatch]);
        //     console.log(indexMatch);
        //     // return indexMatch
        //     // console.log([indexMatch]);
        //     // console.log(Object.values(str2));
        //     // console.log(Object.entries(str2));
        //     // return index
        //     // break
        //     // console.log(s);
        //     const s = str2.slice(0, 6)
        //     console.log(s);
        //   }
        // }
        // console.log(Object.values(str2[0]));

        // let indexfound = str2.find(index)
        // console.log(index);
      }
    }
  }
}
// function isSubstring (str1, str2) {
//   // check if str2 is a rotation of str1 calling isSubstring only once
//   // 

//   let String1 = str1.split("")
//   let String2 = str2.split("")
//   // let temp = new Array()
//   let stringtemp = ""
//   console.log(String1);
//   console.log(String2);

//   for (i=0; i<String1.length; i++) {
//     for (j=0; j<String2.length; j++) {
//       if (String1[0] === String2[j]) {
//         let temp = String2[j]
//         String2[i] = String2[0] 
//         String2[0] = temp
//         console.log('temp:', temp)
//         console.log('String2:', String2)
//       }
//     }
//     console.log(String2)
//   }
// }

// Test
console.log(isSubstring('waterbottle', 'bottlewater'), true);
console.log(isSubstring('waterbottle', 'erbotlewatt'), false);
console.log(isSubstring('aataa', 'aaaat'), true);






