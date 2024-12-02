//read input
const fs = require("node:fs");
const input = fs.readFileSync("./input.txt", "utf8");
var startTime = performance.now();
const lines = input.split(/\r?\n/);

//solution
let sum = 0;
lines.forEach((line) => {
  const values = line.split(" ").map(Number);
  if (values[0] === values[values.length - 1]) return;
  const ascending = values[0] < values[values.length - 1];
  for (let i = 0; i < values.length - 1; i++) {
    const diff = ascending
      ? values[i + 1] - values[i]
      : values[i] - values[i + 1];
    if (diff < 1 || diff > 3) return;
  }
  sum++;
});

//======== results
var endTime = performance.now();
console.log(`Took ${Math.round(endTime - startTime)} milliseconds`);
console.log("Result:", sum);
