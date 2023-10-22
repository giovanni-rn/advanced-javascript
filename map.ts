// TS TYPES AND INTERFACES
type s = string;
type n = number;
type b = boolean;
type ef = () => void;

interface yomi {
  name: s;
  age: n;
  place: s;
}

interface tugan extends yomi {
  log: ef;
  ai?: s;
}

// COOL OBJECT METHODS : BIND(), FREEZE(), DELETE KEYWORD
const tugan: tugan = {
  name: "Tugan",
  age: 31,
  place: "Dubaï",
  log: function () {
    console.log(this.name);
  },
  ai: "tugan.ai",
};

const yomi: yomi = {
  name: "Yomi",
  age: 27,
  place: "Dubaï",
};

tugan.log(); // "Tugan"
tugan.log.bind(yomi)(); // "Yomi"
delete tugan.ai;
Object.freeze(tugan);
// console.log((tugan.ai = "tugan.ai")); // TypeError
console.log(tugan?.ai); // undefined
console.log(tugan.ai ?? tugan.name); // "Tugan"

// OBJECT ITERATION USING FOR...OF LOOPS
// for (const key of Object.keys(tugan)) console.log(key); // returns all keys
// Object.keys(tugan).forEach((element) => console.log(element)); // same as above

for (const [key, value] of Object.entries(tugan)) {
  console.log(key, ":", value); // returns "key : value" pairs
}

// TESTING TYPEOF: STRING VS INSTANCEOF: BOOLEAN
const set2: Set<number> = new Set([1, 2, 3]);
console.log(typeof set2);
console.log(set2 instanceof Set);

// PLAYING AROUND WITH JS NUMBER OBJECT
const edge_minimal: n = 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003; // 5e-324

const differentThanZero: b = Boolean(edge_minimal); // true
const toCloseToZero: b = Boolean(edge_minimal / 10); // false
const closestToZero: n = Number.MIN_VALUE; // 5e-324
edge_minimal === Number.MIN_VALUE; // true
const toCloseToOne: b = 1 === 1 + Number.EPSILON / 10; // true
const toLittleToBePrecise: b =
  Number.MIN_SAFE_INTEGER - 4 === Number.MIN_SAFE_INTEGER - 5; // true
// console.log(("5" === 5) === ("5" == 5)); // false

debugger; // breakpoint

/* ARGUMENTS OBJECT ON ARROW FUNCTIONS TO GET INFO ABOUT FUNCTION
const getFileName = (): void => {
  const fullPath = arguments[1].main.path.split("\\");
  console.log(getFileName.name, ":", fullPath[fullPath.length - 1]);
};
getFileName(); // "getFileName : advanced-js"
 */

// ARGUMENTS OBJECT ON REGULAR FUNCTIONS TO GET PARAMETERS
const getArguments = function (a: s, b: s, c: s): void {
  console.log(getArguments.name, ":", Object.values(arguments));
};
getArguments("a", "b", "c"); // "getArguments : [ 'a', 'b', 'c' ]"

// TRYING REGEXP SEARCH(), MATCH() AND REPLACE() METHODS
const sentence: s = "You imagine I would like to.";
console.log(sentence.search("imagine")); // 4
console.log(sentence.match(/Like/i)![0]); // "like"
console.log(sentence.replace(/I/, "you")); // "You imagine you would like to."
console.log(sentence.replace(/you/i, "I")); // "I imagine I would like to."

// TRYING OUT MAPS
const entrepreneur: Map<string, string | number> = new Map([
  ["tugan".toUpperCase(), (30_000_000).toLocaleString()],
  ["yomi".toUpperCase(), (300_000_000).toLocaleString()],
  ["oussama".toUpperCase(), (3_000_000_000).toLocaleString()],
]);
entrepreneur.forEach((v, k) => console.log(`${k} : $${v}`)); // "TUGAN : $30 000 000..."

// TESING ARRAY.FIND() METHOD ON A SPREAD STRING
const lettersArray: s[] = [..."ABCDEFG"];
console.log(lettersArray.find((v) => v > "E")); // "F"

// TESING ES6 MATH METHODS : TRUNC(), SIGN()
console.log(Math.trunc(45.67)); // 45
console.log(Math.sign(-77), Math.sign(0), Math.sign(416)); // -1 0 1

// TESING ES6 STRING METHODS : PADSTART/END(), TRIM()
const strEx = "Salut !";
console.log("Before trim : |" + strEx.padStart(10, " ").padEnd(13, " ") + "|"); // "...|   Salut !   |"
console.log("After trim : |" + strEx.trim() + "|"); // "...|Salut !|"

// GET LAST ITEM FROM ARRAY USING ARRAY.AT() FROM ES2022 !
const fruits2: s[] = ["Banana", "Orange", "Apple", "Mango"];
let fruit: s = fruits2.at(-1)!; // "Mango"

// IMPLEMENTING SIMPLE USE OF CALLBACK FUNCTION
const log = (v: any) => console.log(v); // function that will be called back
const add = (x: n, y: n, log: (v: any) => void) => {
  const result = x + y; // perform operations...
  log(result); // use callback
};
add(10, 23, log); // use function including callback -> "33"

(() => {
  "use strict";
  // y = 5; // Strict mode prevents from using undeclared variables
  // log(y); //  Strict mode is scoped (here locally)
})();

/*
HTML Password manager : HTML, TypeScript, TailwindCSS
- Get value from input, store users in Set
- Get value from input, store passwords in Map
- Render all users in select menu
- Render all passwords in list
- Use TailwindCSS for styling
- Type all variables with type hints, interfaces and types
- Explore the global window object using this
*/

/*
NODE Live Chat : NodeJS, File system, Socket.io, TypeScript, HTML, TailwindCSS, Jest
- Follow the Socket.io starting guide
- Create synchronization between HTML client and Node server
- Create user from HTMLInput to SQLite database
- Allow user to upload profile picture on server
- Allow connection using JWT authentication
- Create rooms for chats using JS Dom
- Send messages and receive it on second client in real time
- Trigger notification when new message is received
*/
