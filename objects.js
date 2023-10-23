"use strict";
// ITERATOR
const infiniteCount = () => {
    let n = 0;
    return {
        next: () => {
            n++;
            return { value: n, done: false };
        },
    };
};
const n = infiniteCount();
n.next(); // 1
n.next(); // 2
n.next(); // 3
// SYMBOL AND SYMBOL ITERATOR
const id = Symbol("Clé unique.");
const safeObject = {
    name: "Safe object",
    [id]: 257,
};
console.log(id.description);
console.log(safeObject.name, safeObject[id]);
const tuganInfos = {
    name: "Tugan Bara",
    activity: "Entrepreneur",
    city: "Dubai, UAE",
    birthCountry: "France",
    netWorth: 35_000_000,
    [Symbol.iterator]: function () {
        let x = 0;
        const values = Object.values(this);
        return {
            next: function () {
                if (x < values.length) {
                    x++;
                    return { value: values[x - 1], done: false };
                }
                else {
                    return { value: undefined, done: true };
                }
            },
        };
    },
};
for (const info of tuganInfos)
    console.log(info);
// while (true) tuganInfos[Symbol.iterator];
// ACCESSORS : GETTERS AND SETTERS + OBJECT.DEFINEPROPERTY() + READONLY PROPERTIES
const nodeLiveChat = {
    nbDays: 2,
    techStack: ["nodejs", "html", "typescript", "socket.io"],
    get getDuration() {
        return this.nbDays;
    },
};
Object.defineProperty(nodeLiveChat, "changeDuration", {
    set: function (days) {
        this.nbDays += days;
    },
});
console.log("Number of days :", nodeLiveChat.getDuration);
nodeLiveChat.changeDuration = -1;
console.log("Number of days :", nodeLiveChat.getDuration);
Object.defineProperty(nodeLiveChat, "complexity", {
    value: "medium",
    writable: false,
});
Object.defineProperty(nodeLiveChat, "done", { value: false, writable: true });
Object.defineProperty(nodeLiveChat, "setStatus", {
    set: function (value) {
        this.done = value;
    },
});
// Prevents adding properties to an object
Object.preventExtensions(nodeLiveChat);
// Returns true if properties can be added to an object
console.log("Can add properties to the object :", Object.isExtensible(nodeLiveChat));
console.log(nodeLiveChat.complexity);
console.log(nodeLiveChat.done);
nodeLiveChat.setStatus = true;
console.log(nodeLiveChat.done, "\n\n\n");
/* CONSTRUCTOR AND PROTOTYPES
function Entrepreneur(
  // this: Entrepreneur,
  name: string,
  age: number,
  netWorth: number,
  activities: string | string[]
): void {
  this.name = name;
  this.age = age;
  this.netWorth = netWorth;
  this.activities = activities;
}

const Tugan = Entrepreneur("Tugan Bara", 31, 30_000_000, ["web3", "ia", "MVG"]); */
// SUMMARIZE ALL DATA TYPES IN JAVASCRIPT
const data = {
    String: '"Salut"',
    Number: 1,
    BigInt: 9007199254740991n,
    Boolean: true,
    Undefined: undefined,
    Function: () => { },
    Null: null,
    Array: [1, 2, 3],
    Object: { cle: "valeur" },
    Date: new Date(),
    URL: new URL("http://localhost:5500/page?q=searchString&sort=false").href,
    RegExp: new RegExp(/a/i),
    Symbol: Symbol("Ceci est un symbole."),
    Set: new Set(["a", "b"]),
    Map: new Map([["a", "b"]]),
    JSON: JSON.stringify({ results: ["a", "b", "c"] }),
    Class: class Objet {
        constructor() { }
    },
};
for (const type of Object.keys(data))
    console.log(`${type} :`, data[type], `(${typeof data[type]})`);
