//read input
const fs = require("node:fs");
const input = fs.readFileSync("./input.txt", "utf8");
var startTime = performance.now();
const lines = input.split(/\r?\n/);

//solution
let sum = 0;
const list1 = [],
  list2 = [];
lines.forEach((line) => {
  const [v1, v2] = line.split(/\s+/);
  list1.push(v1);
  list2.push(v2);
});
list1.sort();
list2.sort();
for (let i = 0; i < list1.length; i++) {
  sum += Math.abs(list1[i] - list2[i]);
}
//======== results
var endTime = performance.now();
console.log(`Took ${Math.round(endTime - startTime)} milliseconds`);
console.log("Result:", sum);
