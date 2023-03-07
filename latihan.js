/** Conditional */
const name  = "Wahyu Ramadhan";
const major = "Informatics";
console.log(name, major);

const age = 19; // number
const isMarried = false; // boolean
let xyz; //undefined
console.log(typeof xyz);

const nama = "Wahyu";
const hasil = 'Perkenalkan nama saya: ${nama}';
console.log(hasil);

const nilai = 90;
if (nilai > 90) {
    console.log("A");
}
else if (nilai > 80) {
    console.log("B");
}
else if (nilai > 70) {
    console.log("C");
}
else {
    console.log("D");
}

/** Looping */
for (let i = 1; i < 10; i++) {
    console.log(i);
}

/** Function */
function HitungUmur(tahunlahir) {
    const umur = 2023 - tahunlahir;
    return umur;
}

console.log(HitungUmur(2003));
console.log(HitungUmur(2004));
console.log(HitungUmur(2005));

const HitungUmur = (tahunlahir) => {
    const umur = 2023 - tahunlahir;
    return umur;
}

/** Array */
const animals = ["Landak", "Kucing Langka" , "Anjing"]
console.log(animals[2]);

/** Looping Array */
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for ( let i = 0; i < angka.length; i++) {
    console.log(angka[i]);
}

/** Object  */
const Wahyu = {
    nama: "Wahyu Ramadhan",
    umur: 19,
    jenisKelamin: "Pria",
};

console.log (Wahyu);

/** Looping Object */
const wahyu = {
    nama: "Wahyu Ramadhan",
    umur: 19,
    jenisKelamin: "Pria",
};

for (label in wahyu) {
    console.log(label);
    console.log(wahyu[label]);
}
