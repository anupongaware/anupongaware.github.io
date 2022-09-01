const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arrNum = [];

const sayNum = (number) => {
  arrNum.push(number);
  if (arrNum.length >= 10) {
    arrNum.forEach((number) => console.log(number));
    rl.close();
  }
};

rl.on("line", sayNum);
