class operators {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum() {
    return this.a + this.b;
  }
  receive() {
    return this.a * this.b;
  }
  subtract() {
    return this.a - this.b;
  }
  divide() {
    return this.a / this.b;
  }
}

const add = new operators(6, 3);

console.log("ab:",add);
console.log("tích 2 số là:",add.receive());
console.log("Thương 2 số là:",add.divide());
console.log("Tổng 2 số là: ",add.sum());
console.log("Hiệu 2 số là:",add.subtract());
