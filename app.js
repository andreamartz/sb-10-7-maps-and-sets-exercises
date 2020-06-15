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
