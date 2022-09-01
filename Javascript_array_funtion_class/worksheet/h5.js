const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arrNum = [];

const AmountEvenNum = (num) => {
  arrNum.push(num);
  if (arrNum.length >= 10) {
    let countEvenNum = arrNum.filter((num) => num % 2 === 0);
    console.log(countEvenNum.length);
    rl.close();
  }
};

rl.on("line", AmountEvenNum);
