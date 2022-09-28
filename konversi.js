const phasil = document.querySelector(".hasilnya");
let des = document.querySelector("#des");
let bin = document.querySelector("#bin");
let okt = document.querySelector("okt");
let hek = document.querySelector("#hek");

let des2 = document.querySelector("#des2");
let bin2 = document.querySelector("#bin2");
let okt2 = document.querySelector("#okt2");
let hek2 = document.querySelector("#hek2");

let basis2;
var basiss2 = "";



function hitung() {
    if (des && bin2.checked) {
        basis2 = 2;
        basiss2="BINER"
        desbin();
    }else if (des && okt2.checked) {
        basis2 = 8;
        basiss2 = "OKTAL"
        desbin();
    }else if (des && hek2.checked) {
        basis2 = 16;
        basiss2 = "HEKSADESIMAL"
        desbin();
    }
}

function desbin() {
    let basis1 = document.querySelector("#basis1").value;
    let basiss = document.querySelector("#basis1").value;
    let i = 0;
    var hasil = "";
    const angkabiner = [];
    while (basis1 > 0) {
        angkabiner[i] = basis1 % basis2;
        basis1 = Math.floor(basis1 / basis2);
        i++;
    }
    for (let j = i-1; j >= 0; j--) {
        hasil += angkabiner[j];
    }
    phasil.innerHTML= basiss2 + " DARI DESIMAL "+basiss+" = "+hasil;
}