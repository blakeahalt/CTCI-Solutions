// FOR...IN / FOR...OF
// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// for (const day in days) {
//        console.log(day)
//        // returns 0123456
// }
// for (const day of days) {
//        console.log(day)
//        // returns:
//        // Monday 
//        // Tuesday
//        // Wednesday
//        // Thursday
//        // Friday
//        // Saturday
//        // Sunday
// }


// KEY / VALUE / ENTRIES
// const people = { name: "John", age: 21, Location: "Chicago" }

// for (const [key, value] of Object.entries(people)) {
//        // console.log(key);
//        // let firstKey = Object.keys(people)[0]     // accesses first key of dictionary
//        // let firstValue = Object.values(people)[0] // accesses first value of dictionary
//        // console.log(firstKey)                     // returns name
//        // console.log(firstValue)                   // returns John
//        // console.log(key)                          // returns all keys (name age location)
//        // console.log(value)                        // returns all values (John 21 Chicago)
//        // console.log(key[0])                       // returns first index of each key (n a L)
//        // console.log(Object.entries(people)[0])    // returns first entry (['name', 'John'])
//        // console.log(Object.entries(people))       // returns entire dictionary ([['name', 'John'], ['age', 21], ['Location', 'Chicago']])
// }

// const stringExample = ["strings"];
// let freq = {}
// for (const char of stringExample) {
// 	if (char !== " ") {
// 		freq[char] = freq[char] + 1 || 1
// 	}
// 	console.log(char)                                // returns (strings)
// 	console.log([char])                              // returns (['strings'])
// 	console.log(freq[char])                          // returns (1)
// }


// function stringExample(string) {
// 	const freq = {}
// 	for (const char of stringExample.split("")) {
// 		if (char !== " ") {
// 			freq[char] = freq[char] + 1 || 1
// 		}
// 	console.log(stringExample('string'))             // returns (strings)
// 	}
// }
function getFrequency(string) {
	const freq = {};
	
	for (const char of string.toLowerCase().split("")) {
		if (char !== " ") {
			freq[char] = freq[char] +1 || 1
		}
		console.log(Object.keys(freq))		// [ 'a', 'b', 'c' ]
		console.log(Object.values(freq))	// [ 4, 4, 1 ]
		console.log(char)					// a
		console.log([char])					// ['a']
		console.log(freq[char])				// 4
		console.log(freq)					// {a:4, b:4, c:1}
		console.log("\n");
	}
}
return getFrequency('aabbcabba')
// console.log(getFrequency('aababba'));
// console.log(getFrequency('strings'));
  // /**
//  * FOR...IN LOOPS
// * Example - 01
// * -------------------------------------+
// * for-in loop iterates throgh a JSON object
// * Output: a: 1, b: 1
// * -------------------------------------+
// **/
// let Obj = {
//   a: 1,
//   b: 2
// }

// for(let prop in Obj) {
//   // console.log(`${prop}: ${Obj[prop]}`);
//   console.log(prop);
// }


// /**
// * Example - 02
// * -------------------------------------+
// * for-in loop iterates throgh an object
// * Output: width height
// * -------------------------------------+
// **/

// class Icon{
//   constructor(w, h) {
//     this.width = w;
//     this.height = h;
//   }
// }

// for(let prop in new Icon(128, 32)) {
// 	console.log(prop);
// }
/**
 * FOR...OF LOOPS
* Example - 01
* -------------------------------------+
* for-of loop with several built-in iterables
* -------------------------------------+
**/

// // -- Looping through charactors of a string

// for(let i of "String")
// console.log(i)

// // --- Looping through key-value paris of a Map  

// let m = new Map();
// m.set("a", 1).set("b", 2);

// for(let [i, j] of m)
// console.log(`${i}->${j}`);

// // --- Looping through elements of an array of arrays

// for(let [i, j, k] of [[4,5,6], [1,2,3]])
// console.log(i, j, k);
