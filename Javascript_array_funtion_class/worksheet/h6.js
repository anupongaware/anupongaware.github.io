const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arrNum = [];
const sumNumber = (num) => {
  arrNum.push(num);
  if (arrNum.length >= 10) {
    const total = arrNum.reduce(
      (previousValue, currentValue) =>
        Number(previousValue) + Number(currentValue),
      0
    );
    console.log(total);
    rl.close();
  }
};

rl.on("line", sumNumber);
