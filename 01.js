class Handphone {
  constructor(merk, warna) {
    this.merk = merk;
    this.warna = warna;
  }

  info() {
    return Handphone ini adalah ${this.merk} berwarna ${this.warna}.;
  }
}

const hp = new Handphone("SAMSUNG A55", "putih");
console.log(hp.info());
