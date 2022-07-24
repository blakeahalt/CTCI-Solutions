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

function isSubstring (str1, str2) {
  
    let String1 = str1.split("")
    let String2 = str2.split("")
    console.log('str1:', str1)
    console.log('str2:', str2)

    for (i=0; i<String1.length; i++) {
  for (j=0; j<String2.length; j++) {
  // index = str2.find(str1[0])
  // console.log(index)
  const index = String2.find((i) => {
    if (String1[0] === String2[j]){
      return j
    }
  })
  // let indexfound = str2.find(index)
  const s = String2.slice(index, str2.length)
  console.log(index);
    // console.log(s);
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
    //  console.log(isSubstring('waterbottle', 'erbotlewatt'), false);
    //  console.log(isSubstring('aaata', 'aataa'), true);






