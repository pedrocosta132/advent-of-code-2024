//read input
const fs = require("node:fs");
const input = fs.readFileSync("./input.txt", "utf8");
var startTime = performance.now();
const [firstPart, secondPart] = input.split(/\r?\n\r?\n/);

const connections = firstPart.split(/\r?\n/);
const paths = secondPart.split(/\r?\n/);

//solution
let sum = 0;
const rules = {};
connections.forEach((line) => {
  const [x, y] = line.split("|").map(Number);
  if (rules[y]) {
    rules[y].push(x);
  } else {
    rules[y] = [x];
  }
});

paths.forEach((line) => {
  const path = line.split(",").map(Number);
  const forbidden = [];
  for (let p of path) {
    if (forbidden.includes(p)) return;
    if (rules[p]) forbidden.push(...rules[p]);
  }
  sum += path[Math.floor(path.length / 2)];
});

//======== results
var endTime = performance.now();
console.log(`Took ${Math.round(endTime - startTime)} milliseconds`);
console.log("Result:", sum);
