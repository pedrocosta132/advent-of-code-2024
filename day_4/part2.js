//read input
const fs = require("node:fs");
const input = fs.readFileSync("./input.txt", "utf8");
var startTime = performance.now();

//solution
let sum = 0;
const matrix = input.split(/\r?\n/).map((line) => line.split(""));
const valid = ["MMSS", "MSMS", "SSMM", "SMSM"];

for (let i = 1; i < matrix.length - 1; i++) {
  for (let j = 1; j < matrix[i].length - 1; j++) {
    if (matrix[i][j] !== "A") continue;
    const str =
      "" +
      matrix[i - 1][j - 1] +
      matrix[i - 1][j + 1] +
      matrix[i + 1][j - 1] +
      matrix[i + 1][j + 1];
    if (valid.includes(str)) {
      sum++;
    }
  }
}

//======== results
var endTime = performance.now();
console.log(`Took ${Math.round(endTime - startTime)} milliseconds`);
console.log("Result:", sum);
