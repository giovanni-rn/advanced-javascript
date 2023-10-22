// SPREAD OPERATOR : Extract elements from array
// Spread operator on array
const fruits: string[] = ["banana", "orange", "kiwi"];
const food: string[] = [...fruits, "chicken", "bread"];
console.log("All food mixed up in a single array: ", food);

// Spread operator on string
const alphabetString: string = "abcdefghijklmnopqrstuvwxyz";
const alphabetArray: string[] = [...alphabetString];
console.log("All elements spread out into a new array", alphabetArray);

// REST OPERATOR : Creates array from elements
const a: string = "a";
const b: string = "b";
const c: string = "c";

const assembleIntoArray = (...letters: string[]): string[] => letters;

const assembledLetters: string[] = assembleIntoArray(a, b, c);
console.log("All strings grouped into a new array", assembledLetters);

// Rest operator cancels spread operator
const arr: number[] = [1, 2, 3, 4];
const regroupItems = (...items: number[]): number[] => items;
const reArr = regroupItems(...arr);
const reArr2 = [...reArr];
console.log(reArr2);

// Matrix
const list1D: number[] = [1, 2, 3, 4];
const add1D = (...items: number[][][][][]): number[][][][][] => items;
console.log(add1D([[[arr]]])[0][0][0][0][0]);
