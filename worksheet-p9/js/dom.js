import { daftarProyek } from "./app.js";

// A. Mengambil elemen dari halaman
const wadah = document.querySelector("#daftar");

// B. Membuat satu kartu proyek
function buatKartu(proyek) {
  const kartu = document.createElement("li");
  kartu.className = "kartu";
  kartu.textContent = proyek.judul;

  return kartu;
}

// C. Menampilkan semua proyek
function renderProyek(daftar) {
  wadah.textContent = "";

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

// D. Menampilkan proyek pertama kali
renderProyek(daftarProyek);

// C. Mengambil tombol filter dan pesan daftar kosong
const barisFilter = document.querySelector(".filter-proyek");
const pesanKosong = document.querySelector("#pesan-kosong");

// C. Memfilter proyek dengan event delegation
let kategoriAktif = "semua";

function filterProyek(kategori) {
  kategoriAktif = kategori;

  const proyekTerfilter = daftarProyek.filter((proyek) => {
    if (kategori === "semua") {
      return true;
    }

    if (kategori === "selesai") {
      return proyek.selesai;
    }

    if (kategori === "proses") {
      return !proyek.selesai;
    }

    return false;
  });

  renderProyek(proyekTerfilter);

  pesanKosong.hidden = proyekTerfilter.length > 0;

  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");

  if (!tombol || !barisFilter.contains(tombol)) {
    return;
  }

  filterProyek(tombol.dataset.kategori);
});

// Atur filter awal
filterProyek("semua");

// D. Validasi form
function validasiForm() {
  let valid = true;

  // Validasi nama
  if (inputNama.value.trim() === "") {
    inputNama.setCustomValidity("Nama wajib diisi.");
    valid = false;
  } else {
    inputNama.setCustomValidity("");
  }

  // Validasi email
  if (inputEmail.value.trim() === "") {
    inputEmail.setCustomValidity("Email wajib diisi.");
    valid = false;
  } else if (!inputEmail.validity.valid) {
    inputEmail.setCustomValidity("Masukkan email yang valid.");
    valid = false;
  } else {
    inputEmail.setCustomValidity("");
  }

  // Validasi jumlah diamond
  if (inputJumlah.value === "" || Number(inputJumlah.value) < 1) {
    inputJumlah.setCustomValidity("Jumlah Diamond minimal 1.");
    valid = false;
  } else {
    inputJumlah.setCustomValidity("");
  }

  return valid;
}

// Menjalankan validasi ketika tombol Simpan ditekan
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Event submit berjalan!");

  if (!validasiForm()) {
    console.log("Validasi gagal.");
    form.reportValidity();
    return;
  }

  console.log("Validasi berhasil!");
  alert("Form valid! Data siap diproses.");
});
