const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x = [];
rl.on("line", (n) => {
  x.push(n);
  if (x.length >= 10) {
    let even = x.some((n) => {
      n % 2 == 0;
    });
    if (even) {
      console.log("have");
    } else {
      console.log("don't have");
    }
    rl.close();
  }
});
