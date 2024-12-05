//read input
const fs = require("node:fs");
const input = fs.readFileSync("./input.txt", "utf8");
var startTime = performance.now();
const [firstPart, secondPart] = input.split(/\r?\n\r?\n/);

const connections = firstPart.split(/\r?\n/);
const paths = secondPart.split(/\r?\n/);

//solution
let sum = 0;
const rules = {}; // n => [list of numbers only before n]
const rules2 = {}; // n => [list of number n needs to be before]
connections.forEach((line) => {
  const [x, y] = line.split("|").map(Number);
  if (rules[y]) {
    rules[y].push(x);
  } else {
    rules[y] = [x];
  }
  if (rules2[x]) {
    rules2[x].push(y);
  } else {
    rules2[x] = [y];
  }
});
paths.forEach((line) => {
  const path = line.split(",").map(Number);
  const forbidden = [];
  let hasForbidden = false;
  for (let i = 0; i < path.length; i++) {
    const p = path[i];
    if (forbidden.includes(path[i])) {
      const index = path.findIndex(
        (val, idx) => idx < i && rules2[p].includes(val)
      );
      if (index !== -1) {
        path.splice(index, 0, path.splice(i, 1)[0]);
      }
      hasForbidden = true;
    }
    if (rules[p]) forbidden.push(...rules[p]);
  }

  if (!hasForbidden) {
    return;
  }
  sum += path[Math.floor(path.length / 2)];
});

//======== results
var endTime = performance.now();
console.log(`Took ${Math.round(endTime - startTime)} milliseconds`);
console.log("Result:", sum);
