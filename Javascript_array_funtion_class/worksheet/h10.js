const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arrNum = [];

rl.on("line", (number) => {
  arrNum.push(number);
  if (arrNum.length >= 10) {
    const result = arrNum.reduce((prev, curr) => Math.min(prev, curr));
    console.log(result);
    rl.close();
  }
});
