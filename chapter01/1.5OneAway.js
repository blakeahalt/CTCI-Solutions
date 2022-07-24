// MY SOLUTION
function oneAway (str1, str2) {
       if (str1.length === str2.length) {
         return editReplaceOne (str1, str2)
       } else if (str1.length + 1 === str2.length) {
         return editInsertOne (str1, str2)
       } else if (str1.length - 1 === str2.length) {
         return editInsertOne (str2, str1)
       }
       return false
     }
     
     function editReplaceOne (str1, str2) {
       let differences = 0;
       
       for (i=0; i<str1.length; i++) {
         if (str1[i] !== str2[i]) {
           if (differences >= 1) {
             return false
           }
           differences += 1;
         }
       }
       return true
       }
     //   for (let char1 of str1) {
     //     for (let char2 of str2) {
     //       if (char1 !== char2) {
     //         if (differences >= 1) {
     //           return false
     //         }
     //         differences += 1;
     //       }
     //     }
     //   }
     //   return true
     // }
       
     
     function editInsertOne (str1, str2) {
       let index1 = 0;
       let index2 = 0;
     
       while (index1 < str1.length && index2 < str2.length) {
         if (str1[index1] !== str2[index2]) {
           if (index1 != index2) {
             return false;
           }
           index2++;
         } else {
           index1++;
           index2++;
         }
       }
       return true;
     }
     
     // OTHER SOLUTION
     // var oneAway = function(string1, string2) {
     //   // insert a char for str1 -> remove a char for str2
     //   var checkOneMissing = function(first, second) {
     //     if (first.length !== second.length - 1) {
     //       return false;
     //     } else {
     //       var mulligan = false;
     //       var fP = 0; // first Pointer
     //       var sP = 0; // second Pointer
     //       while (fP < first.length) {
     //         if (first[fP] !== second[sP]) {
     //           if (mulligan) {
     //             return false;
     //           } else {
     //             mulligan = true;
     //             sP++; // second length is longer
     //           }
     //         } else {
     //           fP++;
     //           sP++;
     //         }
     //       }
     //       return true;
     //     }
     //   };
     
     //   var checkOneDiff = function(first, second) {
     //     if (first.length !== second.length) {
     //       return false;
     //     } else {
     //       var mulligan = false;
     //       var fP = 0; // first Pointer
     //       var sP = 0; // second Pointer
     //       while (fP < first.length) {
     //         if (first[fP] !== second[sP]) {
     //           if (mulligan) {
     //             return false; // more than one mismatch
     //           } else {
     //             mulligan = true; // use up mulligan
     //           }
     //         }
     //         fP++;
     //         sP++;
     //       }
     //       return true;
     //     }
     //   };
     //   // insert a char for str1 -> remove a char for str2
     //   // check one diff
     
     //   // console log checks
     //   // console.log(string1, string2, 'checkMiss', checkOneMissing(string1, string2));
     //   // console.log(string2, string1, 'checkMiss', checkOneMissing(string2, string1));
     //   // console.log(string1, string2, 'checkDiff', checkOneDiff(string1, string2));
     
     //   return checkOneMissing(string1, string2) || checkOneMissing(string2, string1) || checkOneDiff(string1, string2);
     // };
     
     
     
     // Test
     console.log(oneAway('pale', 'ple'), true);
     console.log(oneAway('pales', 'pale'), true);
     console.log(oneAway('pale', 'bale'), true);
     console.log(oneAway('pale', 'bake'), false);