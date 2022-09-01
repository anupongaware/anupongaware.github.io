const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arrNum = [];
rl.on("line", function (number) {
  arrNum.push(number);
  if (arrNum.length >= 10) {
    const total = arrNum.reduce(
      (prev, current) => Number(prev) + Number(current),
      0
    );
    const result = total / arrNum.length;
    console.log(result);
  }
});
