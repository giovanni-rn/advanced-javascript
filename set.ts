type exampleItem = number | (() => void) | string;
type fn = () => void;

// Initialize a set
const primeNb: exampleItem[] = [2, 3, 5, () => console.log("HERE"), 11, 13];
const set1: Set<exampleItem> = new Set(primeNb);

// Core methods for adding and removing
set1.add(17);
console.log(set1, set1.has(13));
set1.delete(3);
console.log(set1.has(3));

// Improvised getter by type of item
set1.forEach((nb: exampleItem) => typeof nb === "function" && (nb as fn)());

// Loop through each item in the set
const arrayFromSet: Array<exampleItem> = [];
set1.forEach((primeNb) => arrayFromSet.push(primeNb));
console.log(arrayFromSet);

// Loop through each values (similar)
const array2FromSet: Array<exampleItem> = [];
for (const item of set1.values()) array2FromSet.push(item);
console.log(array2FromSet);
console.log(set1.values() === set1.keys()); // weirdly the same...

// Get length of set
console.log("Size :", set1.keys(), set1);

// Returns an iterable of [v,v] pairs for every value v in the set.
console.log("Entries", set1.entries());

// Get all values from set with SPREAD operator and group them into a new array
const array3FromSet: Array<exampleItem> = new Array(...set1);
console.log(array3FromSet);

// Empty the set
set1.clear();
console.log(set1);
console.log(typeof set1); // returns 'object'

// PRACTICAL CASE : Remove all duplicate values from array
const arrayToUnify: exampleItem[] = ["a", "a", "b", "c", "d", "c", "e", "e"];
const unifiedArray: Array<exampleItem> = [...new Set(arrayToUnify)];
console.log(unifiedArray);

const unifyArray = (list: any[]): any[] => [...new Set(list)];
const unifiedArray2: Array<exampleItem> = unifyArray(arrayToUnify);
console.log(unifiedArray2);
