"use strict";
// Initialize a set
const primeNb = [2, 3, 5, () => console.log("HERE"), 11, 13];
const set1 = new Set(primeNb);
// Core methods for adding and removing
set1.add(17);
console.log(set1, set1.has(13));
set1.delete(3);
console.log(set1.has(3));
// Improvised getter by type of item
set1.forEach((nb) => typeof nb === "function" && nb());
// Loop through each item in the set
const arrayFromSet = [];
set1.forEach((primeNb) => arrayFromSet.push(primeNb));
console.log(arrayFromSet);
// Loop through each values (similar)
const array2FromSet = [];
for (const item of set1.values())
    array2FromSet.push(item);
console.log(array2FromSet);
console.log(set1.values() === set1.keys()); // weirdly the same...
// Get length of set
console.log("Size :", set1.keys(), set1);
// Returns an iterable of [v,v] pairs for every value v in the set.
console.log("Entries", set1.entries());
// Get all values from set with SPREAD operator and group them into a new array
const array3FromSet = new Array(...set1);
console.log(array3FromSet);
// Empty the set
set1.clear();
console.log(set1);
console.log(typeof set1); // returns 'object'
// PRACTICAL CASE : Remove all duplicate values from array
const arrayToUnify = ["a", "a", "b", "c", "d", "c", "e", "e"];
const unifiedArray = [...new Set(arrayToUnify)];
console.log(unifiedArray);
const unifyArray = (list) => [...new Set(list)];
const unifiedArray2 = unifyArray(arrayToUnify);
console.log(unifiedArray2);
