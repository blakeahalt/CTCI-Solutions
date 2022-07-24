// var allUniqueChars = function(string) {
  
//   // O(n^2) approach, no additional data structures used
//   // for each character, check remaining characters for duplicates
//   for (var i = 0; i < string.length; i++) {
//     for (var j = i + 1; j < string.length; j++) {
//       if (string[i] === string[j]) {
//         return false; // if match, return false
//       }
//     }
//   }
//   return true; // if no match, return true
// };

// const everyCharUnique = (str, indexOffset = 'a'.charCodeAt()) => {
//     let counterTable = Number();
//     for(let index of [...str].map(c => c.charCodeAt() - indexOffset)) {
//         const mask = 1 << index;
//         if(counterTable & mask)
//             return false;
//         counterTable |= mask;
//     }
//     return true;
// };

// function everyCharUnique(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] && obj[str[i]] >= 1) {
//       return false;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//   return true;
// }

// MY SOLUTION
function everyCharUnique (str) {
	if (str.length > 128) return false;
  const char_set = [128]
// #another way to initiiate the array
// let char_set = new Array(128) 
	for (i = 0; i < str.length; i++) {
	val = str.charAt(i);
	if (char_set[val]) {
		return false;
		}
		console.log(char_set) 				// [128]
		console.log(char_set.length)		// 1
		char_set[val] = true;				// true/false
	}
	return true;
}

/* TESTS */
console.log(everyCharUnique('abcd'), 'true');
console.log(everyCharUnique('abccd'), 'false');
// console.log(everyCharUnique('bhjjb'), 'false');
// console.log(everyCharUnique('mdjq'), 'true');
