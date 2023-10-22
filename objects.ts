// Home Made Iterable
const infiniteCount = () => {
  let n = 0;
  return {
    next: () => {
      n++;
      return { value: n, done: false };
    },
  };
};

// Create Iterable
const n = infiniteCount();
n.next(); // 1
n.next(); // 2
n.next(); // 3

const id: symbol = Symbol("Clé unique.");

const safeObject: { name: string; [x: symbol]: number } = {
  name: "Safe object",
  [id]: 257,
};

console.log(id.description);
console.log(safeObject.name, safeObject[id]);

const tuganInfos: {
  name: string;
  activity: string;
  city: string;
  birthCountry: string;
  netWorth: number;
  [Symbol.iterator]: () => Iterator<string | number>;
} = {
  name: "Tugan Bara",
  activity: "Entrepreneur",
  city: "Dubai, UAE",
  birthCountry: "France",
  netWorth: 35_000_000,
  [Symbol.iterator]: function (): Iterator<string | number> {
    let x: number = 0;
    const values: (string | number)[] = Object.values(this);
    return {
      next: function (): IteratorResult<string | number> {
        if (x < values.length) {
          x++;
          return { value: values[x - 1], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const info of tuganInfos) console.log(info);
while (true) tuganInfos[Symbol.iterator];
