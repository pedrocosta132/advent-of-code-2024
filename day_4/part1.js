//read input
const fs = require("node:fs");
const input = fs.readFileSync("./input.txt", "utf8");
var startTime = performance.now();

//solution
let sum = 0;
const matrix = input.split(/\r?\n/).map((line) => line.split(""));
const word = ["X", "M", "A", "S"];

function saveXmas(x, y, dx, dy, l) {
  if (
    x < 0 ||
    x > matrix.length - 1 ||
    y < 0 ||
    y > matrix[0].length - 1 ||
    l > word.length - 1
  )
    return 0;
  if (word[l] === matrix[x][y]) {
    if (l === word.length - 1) return 1;
    return saveXmas(x + dx, y + dy, dx, dy, l + 1);
  }
  return 0;
}

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] !== "X") continue;
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        sum += saveXmas(i, j, x, y, 0);
      }
    }
  }
}

//======== results
var endTime = performance.now();
console.log(`Took ${Math.round(endTime - startTime)} milliseconds`);
console.log("Result:", sum);
