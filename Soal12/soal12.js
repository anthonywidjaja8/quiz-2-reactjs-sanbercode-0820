class BangunDatar {
    constructor(nama) {
        this._nama = nama
    }
    luas() {
        return ""
    }
    keliling() {
        return ""
    }
    get nama() {
        return this._nama
    }
    set nama(nama) {
        this._nama = nama
    }
}

class Lingkaran extends BangunDatar {
    constructor(nama, jariJari) {
        super(nama)
        this._jariJari = jariJari
    }
    luas() {
        return Math.PI * this._jariJari * this._jariJari
    }
    keliling() {
        return 2 * Math.PI * this._jariJari
    }
    get jariJari() {
        return this._jariJari
    }
    set jariJari(jariJari) {
        this._jariJari = jariJari
    }
}

class Persegi extends BangunDatar {
    constructor(nama, sisi) {
        super(nama)
        this._sisi = sisi
    }
    luas() {
        return this._sisi * this._sisi
    }
    keliling() {
        return 4 * this._sisi
    }
    get sisi() {
        return this._sisi
    }
    set sisi(sisi) {
        this._sisi = sisi
    }
}

let bangunDatar = new BangunDatar()
bangunDatar.nama = "jajargenjang" //memanggil setter
console.log("Nama Bangun Datar: " + bangunDatar.nama) //memanggil getter
console.log("Luas Bangun Datar: " + bangunDatar.luas())
console.log("Keliling Bangun Datar: " + bangunDatar.keliling())

let lingkaran = new Lingkaran()
lingkaran.nama = "lingkaran" //memanggil setter
lingkaran.jariJari = 10 //memanggil setter
console.log("Nama Lingkaran: " + lingkaran.nama) //memanggil getter
console.log("Jari - Jari Lingkaran: " + lingkaran.jariJari) //memanggil getter
console.log("Luas Lingkaran: " + lingkaran.luas()) //memanggil method
console.log("Keliling Lingkaran: " + lingkaran.keliling()) //memanggil method

let persegi = new Persegi()
persegi.nama = "persegi" //memanggil setter
persegi.sisi = 8 //memanggil setter
console.log("Nama Persegi: " + persegi.nama) //memanggil getter
console.log("Sisi Persegi: " + persegi.sisi) //memanggil getter
console.log("Luas Persegi: " + persegi.luas()) //memanggil method
console.log("Keliling Persegi: " + persegi.keliling()) //memanggil method