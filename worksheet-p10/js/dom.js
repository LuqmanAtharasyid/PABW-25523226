const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const statusMuat = document.querySelector("#status-muat");
const pesanGalat = document.querySelector("#pesan-galat");
const barisFilter = document.querySelector(".filter-proyek");

let semuaProyek = [];
let kategoriAktif = "semua";

// Membuat satu kartu proyek
function buatKartu(proyek) {
  const kartu = document.createElement("li");
  kartu.className = "kartu";
  kartu.textContent = proyek.judul;
  return kartu;
}

// Menampilkan proyek sesuai filter aktif
function renderTampilan() {
  wadah.textContent = "";

  const proyekTerfilter = semuaProyek.filter((proyek) => {
    if (kategoriAktif === "semua") {
      return true;
    }

    if (kategoriAktif === "selesai") {
      return proyek.selesai;
    }

    if (kategoriAktif === "proses") {
      return !proyek.selesai;
    }

    return false;
  });

  proyekTerfilter.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });

  if (semuaProyek.length === 0) {
    pesanKosong.textContent = "Belum ada data proyek.";
    pesanKosong.hidden = false;
  } else if (proyekTerfilter.length === 0) {
    pesanKosong.textContent = "Tidak ada proyek yang sesuai dengan filter.";
    pesanKosong.hidden = false;
  } else {
    pesanKosong.hidden = true;
  }
}

// Dipanggil setelah data berhasil diambil dari API
export function render(daftar) {
  semuaProyek = daftar;
  pesanGalat.hidden = true;
  renderTampilan();
}

// Menampilkan pesan error
export function tampilkanGalat(galat) {
  pesanGalat.textContent = "Data proyek gagal dimuat: " + galat.message;
  pesanGalat.hidden = false;
}

// Mengatur tampilan loading
export function aturMemuat(aktif) {
  statusMuat.hidden = !aktif;

  if (aktif) {
    pesanGalat.hidden = true;
  }
}

// Menandai tombol filter yang aktif
function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// Event delegation untuk tombol filter
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");

  if (!tombol || !barisFilter.contains(tombol)) {
    return;
  }

  kategoriAktif = tombol.dataset.kategori;
  tandaiTombolAktif(tombol);
  renderTampilan();
});

// Filter awal
tandaiTombolAktif(barisFilter.querySelector('[data-kategori="semua"]'));

// Validasi formulir
const form = document.querySelector(".form-kolom");
const inputNama = document.querySelector("#nama");
const inputEmail = document.querySelector("#email");
const inputJumlah = document.querySelector("#jumlah");

function validasiForm() {
  let valid = true;

  if (inputNama.value.trim() === "") {
    inputNama.setCustomValidity("Nama wajib diisi.");
    valid = false;
  } else {
    inputNama.setCustomValidity("");
  }

  if (inputEmail.value.trim() === "") {
    inputEmail.setCustomValidity("Email wajib diisi.");
    valid = false;
  } else if (!inputEmail.validity.valid) {
    inputEmail.setCustomValidity("Masukkan email yang valid.");
    valid = false;
  } else {
    inputEmail.setCustomValidity("");
  }

  if (inputJumlah.value === "" || Number(inputJumlah.value) < 1) {
    inputJumlah.setCustomValidity("Jumlah Diamond minimal 1.");
    valid = false;
  } else {
    inputJumlah.setCustomValidity("");
  }

  return valid;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validasiForm()) {
    form.reportValidity();
    return;
  }

  alert("Form valid! Data siap diproses.");
});
