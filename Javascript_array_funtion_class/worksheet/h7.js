const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arrNum = [];

rl.on("line", (number) => {
  arrNum.push(number);
  if (arrNum.length >= 10) {
    const result = arrNum.reduce(
      (prev, current) => Number(prev) * Number(current),
      1
    );
    console.log(result);
    rl.close();
  }
});
