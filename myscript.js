/* if */
let nilai = 90;
if (nilai >= 70) {
  console.log("Anda lulus, nilai lebih besar dari 70");
}


/* else */
let nilai = 65;
if (nilai > 75) {
  console.log("Selamat! Anda lulus");
} else {
    console.log("Maaf, Anda belum lulus, nilai tidak lebih besar dari 75");
}


/* nested if */
let umur = 23;
if (umur >= 12) {
  console.log("Anda kuat dan hebat!");
  if (umur >= 46) {
    console.log("Anda seorang lansia");
  } else if (umur >= 26) {
    console.log("Anda seorang dewasa");
  } else {
    console.log("Anda seorang remaja");
  }
} else {
  console.log("Anda seorang kanak-kanak");
}


/* switch case */
var prodi = "Teknik Informatika";
switch (prodi) {
  case "Teknik Informatika":
    console.log("Ini adalah jurusan di Fakultas Teknik");
    break;
  case "Ilmu Ekonomi":
  case "Akuntansi":
  case "Manajemen":
    console.log("Ini adalah jurusan di Fakultas Ekonomi");
    break;
  case "Seni Rupa Murni":
  case "Kriya Seni":
    console.log("Ini adalah jurusan di Fakultas Seni Rupa");
    break;
  default:
    console.log("Prodi tidak valid");
}


/* for statement */
for (let nilaiUTS = 0; nilaiUTS < 10; nilaiUTS++) {
    console.log("Rekapitulasi ke-" + (nilaiUTS + 1));
  }  


/* while */
let absen = ["Aisyah", "Bima", "Cikal", "Dani", "Eka"];
let index = 0;
while (index < absen.length) {
  console.log("Hadir: " + absen[index]);
  index++;
}
console.log("Absensi selesai");


/* do while */
let nilai = 68;
do {
  const keterangan = (nilai >= 75) ? "Selamat, Anda lulus!" : "Anda belum lulus, silahkan belajar lagi.";
  console.log("Nilai Ujian: " + nilai);
  console.log(keterangan);
  nilai += 5; // Menambahkan 5 ke nilai ulangan setiap iterasi.
} while (nilai <= 100);
console.log("Kalian Luar Biasa!");


/* function */
function rekapSkor(namaPeserta, waktu, kesalahan) {
    const maxWaktu = 100;
    const maxKesalahan = 10;
    const skor = maxWaktu - waktu + (maxKesalahan - kesalahan);
    console.log(namaPeserta + " berhasil mendapatkan skor " + skor);
  }
  rekapSkor("Aisy", 90, 2);
  rekapSkor("Beni", 95, 1);
  rekapSkor("Caca", 85, 2); 
  rekapSkor("Dika", 80, 1);
  rekapSkor("Erna", 75, 5);  