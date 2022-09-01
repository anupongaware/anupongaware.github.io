const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arrNum = [];
rl.on("line", function (num) {
  arrNum.push(num);
  if (arrNum.length >= 10) {
    const result = arrNum.reduce((prev, current) => Math.max(prev, current));
    console.log(result);
    rl.close();
  }
});
