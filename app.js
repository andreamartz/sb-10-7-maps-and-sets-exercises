// Maps and Sets Exercise
// ******************************************************
// Quick Question #1
// ******************************************************

// What does the following code return?

new Set([1, 1, 2, 2, 3, 4]);
// console.log(new Set([1, 1, 2, 2, 3, 4]));
// it returns {1,2,3,4}, a set

// ******************************************************
// Quick Question #2
// ******************************************************

// What does the following code return?

[...new Set("referee")].join("");
// console.log([...new Set("referee")].join(""));
// it returns "ref"

// ******************************************************
// Quick Question #3
// ******************************************************

// What does the Map m look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// console.log(m);
// m looks like this: { [1,2,3]: true, [1,2,3]: false } because arrays are reference types.
// To avoid this "strange" behavior, we'd need to create a variable to hold each key that is an array.

// ******************************************************
// hasDuplicate
// ******************************************************
// Write a function called hasDuplicate which accepts an array and
// returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => {
  const arrFromSet = [...new Set(arr)];
  return arrFromSet.length === arr.length ? false : true;
};

const hasDuplicate2 = (arr) => new Set(arr).size !== arr.length;

hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false
hasDuplicate2([1, 3, 2, 1]); // true
hasDuplicate2([1, 5, -1, 4]); // false

// console.log(hasDuplicate([1, 3, 2, 1])); // true
// console.log(hasDuplicate([1, 5, -1, 4])); // false
// console.log(hasDuplicate2([1, 3, 2, 1])); // true
// console.log(hasDuplicate2([1, 5, -1, 4])); // false

// ******************************************************
// vowelCount
// ******************************************************

// Write a function called vowelCount which accepts a string and
// returns a map where the keys are numbers and the values
// are the count of the vowels in the string.

const vowelsSet = new Set(["a", "e", "i", "o", "u"]); // {"a", "e", "i", "o", "u"}
const strVowels = (arr) => arr.filter((letter) => vowelsSet.has(letter)); // ["a", "m", "e", "r", "i", "c", "a"] => ["a", "e", "i"]

const vowelCount = (str) => {
  let strArr = str.toLowerCase().split(""); // ["a", "m", "e", "r", "i", "c", "a"]
  const vowelsInStr = strVowels(strArr); // ["a", "m", "e", "r", "i", "c", "a"] => ["a", "e", "i", "a"]
  const resultMap = new Map();
  for (let vowel of vowelsInStr) {
    if (resultMap.has(vowel)) {
      resultMap.set(vowel, resultMap.get(vowel) + 1);
    } else {
      resultMap.set(vowel, 1);
    }
  }
  return resultMap;
};

vowelCount("awesome"); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount("Colt"); // Map { 'o' => 1 }
vowelCount("America"); // Map { 'a' => 2, 'e' => 1, 'i' => 1 }

console.log(vowelCount("awesome")); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount("Colt")); // Map { 'o' => 1 }
console.log(vowelCount("America")); // Map { 'a' => 2, 'e' => 1, 'i' => 1 }

// Notes:
// 1. Have: "america"
// 2. create strArr ["a", "m", "e", "r", "i", "c", "a"]
// get a set of vowels: { 'a', 'e', 'i', 'o', 'u' }
// Create strVowels that filters strArr to keep only the vowels (using the set of vowels as a reference).
//   Now you have strVowels = ["a", e", "i", "a"].
// Create a set of unique values from the filtered strArr.
//   Now you have {"a", "e", "i"}
// Create an array of subarrays. Each subarray should contain a vowel and a count for that vowel
//   Now you have [["a", 2], ["e", 1], ["i", 1]]

//
// 98. Plug the array of subarrays (i.e., [["a", 2], ["e", 1], ["i", 1]]) into new Map like this:
//   new Map([["a", 2], ["e", 1], ["i", 1]])
// 99. Goal: a map:  { 'a' => 2, 'e' => 1, 'i' => 1 }
