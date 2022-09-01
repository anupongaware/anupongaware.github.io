const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create array to store number
let arrNum = [];

// create function to filter number
const filterNum = (num) => {
  arrNum.push(num);
  if (arrNum.length >= 10) {
    let total = arrNum.filter((num) => num % 2 == 0);
    total.forEach((filtNum) => console.log(filtNum));
    rl.close();
  }
};

// call function
rl.on("line", filterNum);
