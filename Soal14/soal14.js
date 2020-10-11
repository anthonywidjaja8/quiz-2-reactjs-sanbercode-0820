const volumeBalok = (...data) => {
    if (data.length != 3) {
        return "Maaf Parameter Salah"
    } else {
        let panjang = data[0]
        let lebar = data[1]
        let tinggi = data[2]
        return panjang * lebar * tinggi
    }
}

const volumeKubus = (...data) => {
    if (data.length != 1) {
        return "Maaf Parameter Salah"
    } else {
        let sisi = data[0]
        return sisi * sisi * sisi
    }
}

let hasilVolumeBalok = volumeBalok(8, 9, 10)
let hasilVolumeKubus = volumeKubus(10)
let hasilPerhitunganVolumeBalokDanKubus = `Hasil Perhitungan Volume Balok: ${hasilVolumeBalok} dan Volume Kubus : ${hasilVolumeKubus}`
console.log(hasilPerhitunganVolumeBalokDanKubus)