"use strict";
// SPREAD OPERATOR : Extract elements from array
// Spread operator on array
const fruits = ["banana", "orange", "kiwi"];
const food = [...fruits, "chicken", "bread"];
console.log("All food mixed up in a single array: ", food);
// Spread operator on string
const alphabetString = "abcdefghijklmnopqrstuvwxyz";
const alphabetArray = [...alphabetString];
console.log("All elements spread out into a new array", alphabetArray);
// REST OPERATOR : Creates array from elements
const a = "a";
const b = "b";
const c = "c";
const assembleIntoArray = (...letters) => letters;
const assembledLetters = assembleIntoArray(a, b, c);
console.log("All strings grouped into a new array", assembledLetters);
// Rest operator cancels spread operator
const arr = [1, 2, 3, 4];
const regroupItems = (...items) => items;
const reArr = regroupItems(...arr);
const reArr2 = [...reArr];
console.log(reArr2);
// Matrix
const list1D = [1, 2, 3, 4];
const add1D = (...items) => items;
console.log(add1D([[[arr]]])[0][0][0][0][0]);
