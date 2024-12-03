//read input
const fs = require("node:fs");
const input = fs.readFileSync("./input.txt", "utf8");
var startTime = performance.now();
// const lines = input.split(/\r?\n/);

//solution
let sum = 0;
const matches = input.match(/mul\((\d{1,3}),(\d{1,3})\)/g);
matches.forEach((value) => {
  const [x, y] = value.match(/\d+/g);
  sum += x * y;
});

//======== results
var endTime = performance.now();
console.log(`Took ${Math.round(endTime - startTime)} milliseconds`);
console.log("Result:", sum);
