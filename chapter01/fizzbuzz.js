// function FizzBuzz(n) {
// 	for (i=1; i<n+1; i++) {
// 		if (i % 15 === 0) {
// 			console.log("FizzBuzz")
// 		} else if (i % 5 === 0) {
// 			console.log("Buzz")
// 			// return "Buzz"
// 		} else if (i % 3 === 0) {
// 			console.log("Fizz")
// 			// return "Fizz"
// 		} else {
// 			console.log(i);
// 			// return i
// 		}
// 	}
// }
// console.log(FizzBuzz(30))


// let FizzBuzz = Array.from(Array(100).keys())

// for (char in FizzBuzz) {
// 	if (char % 15 === 0 ) {
// 		FizzBuzz[char] = "FizzBuzz"
// 		// console.log("FizzBuzz");
// 	}
// 	else if (char % 5 === 0 ) {
// 		FizzBuzz[char] = "Buzz"
// 		// console.log("Buzz");
// 	}
// 	else if (char % 3 === 0 ) {
// 		FizzBuzz[char] = "Fizz"
// 		// console.log("Fizz");
// 	} else {
// 		FizzBuzz[char] = [char]
// 		// console.log(char);
// 	}
// }
// console.log(FizzBuzz)


let FizzBuzz = Array.from(Array(100).keys())
for (char=1; char<FizzBuzz.length; char++){
	if (char % 15 === 0 ) {
		FizzBuzz[char] = "FizzBuzz"
		// console.log("FizzBuzz");
	}
	else if (char % 5 === 0 ) {
		FizzBuzz[char] = "Buzz"
		// console.log("Buzz");
	}
	else if (char % 3 === 0 ) {
		FizzBuzz[char] = "Fizz"
		// console.log("Fizz");
	} else {
		FizzBuzz[char] = [char]
		// console.log(char);
	}
}
console.log(FizzBuzz);


// function FizzBuzz(n) {
// 	for(i=1; i<n+1; i++) {
// 		if (i % 15 === 0) {
// 			console.log("FizzBuzz")
// 		} else if (i % 5 === 0) {
// 			console.log("Buzz")
// 		} else if (i % 3 === 0) {
// 			console.log("Fizz")
// 		} else {
// 			console.log(i);
// 		}
// 	}
// }
// console.log(FizzBuzz(100))