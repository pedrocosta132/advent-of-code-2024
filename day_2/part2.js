//read input
const fs = require("node:fs");
const input = fs.readFileSync("./input.txt", "utf8");
var startTime = performance.now();
const lines = input.split(/\r?\n/);

//solution
let sum = 0;

function isSafe(deltas) {
  const ascending = deltas[0] > 0;
  const min = ascending ? 1 : -3;
  const max = ascending ? 3 : -1;
  for (const delta of deltas) {
    if (delta < min || delta > max) return false;
  }
  return true;
}

lines.forEach((line) => {
  const values = line.split(" ").map(Number);
  if (values[0] === values[values.length - 1]) return;
  const diffs = new Array(values.length - 1);
  for (let i = 0; i < values.length - 1; i++) {
    diffs[i] = values[i + 1] - values[i];
  }
  if (isSafe(diffs.slice(0, -1)) || isSafe(diffs.slice(1))) {
    sum++;
    return;
  }
  for (let i = 0; i < diffs.length - 1; i++) {
    const delta = diffs[i] + diffs[i + 1];
    const newValues = [...diffs.slice(0, i), delta, ...diffs.slice(i + 2)];
    if (
      ((delta >= 1 && delta <= 3) || (delta >= -3 && delta <= -1)) &&
      isSafe(newValues)
    ) {
      sum++;
      return;
    }
  }
});

//======== results
var endTime = performance.now();
console.log(`Took ${Math.round(endTime - startTime)} milliseconds`);
console.log("Result:", sum);
