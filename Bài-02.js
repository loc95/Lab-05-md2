class HinhChuNhat {
  constructor(chieuDai, chieuRong) {
    this.chieuDai = chieuDai;
    this.chieuRong = chieuRong;
  }

  chuVi() {
    let chuVi = (this.chieuDai + this.chieuRong) * 2;
    return chuVi;
  }
  dienTich() {
    let dienTich = this.chieuDai * this.chieuRong;
    return dienTich;
  }
}

let myHcn = new HinhChuNhat(5, 4);
console.log(`Chu vi la: ${myHcn.chuVi()}`);
console.log("dien tich la:", myHcn.dienTich());
