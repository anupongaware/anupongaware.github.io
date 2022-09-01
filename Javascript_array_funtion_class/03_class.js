class person {
  constructor(userName, birthDate) {
    this.name = userName;
    this.age =
      (Number(new Date()) - Number(new Date(birthDate))) /
      (1000 * 3600 * 24 * 365);
    this.birthDate = birthDate;
  }
}

let n = new person("Ice", "2000/07/31 10:00:53");
console.log(n);
console.log(n.name);
console.log(n.age);
console.log(Number(new Date()));
