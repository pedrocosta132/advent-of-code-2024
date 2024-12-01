//read input
const fs = require("node:fs");
const input = fs.readFileSync("./input.txt", "utf8");
var startTime = performance.now();
const lines = input.split(/\r?\n/);

//solution
let sum = 0;
const list1 = [],
  similarity = {};
lines.forEach((line) => {
  const [v1, v2] = line.split(/\s+/);
  list1.push(v1);
  if (similarity[v2]) {
    similarity[v2]++;
  } else {
    similarity[v2] = 1;
  }
});
for (let v of list1) {
  sum += similarity[v] ? v * similarity[v] : 0;
}
//======== results
var endTime = performance.now();
console.log(`Took ${Math.round(endTime - startTime)} milliseconds`);
console.log("Result:", sum);
