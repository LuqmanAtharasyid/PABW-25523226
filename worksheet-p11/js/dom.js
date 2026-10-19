import { saring } from "./data.js";
import { state, pasangRender, aturKategori, ubahFavorit } from "./state.js";

const bagianProyek = document.querySelector("#proyek");
const wadah = bagianProyek.querySelector("#daftar");
const pesanKosong = bagianProyek.querySelector("#kosong");
const statusMuat = bagianProyek.querySelector("#muat");
const pesanGalat = bagianProyek.querySelector("#galat");
const barisFilter = bagianProyek.querySelector(".filter-proyek");

function buatKartu(proyek) {
  const kartu = document.createElement("li");
  kartu.className = "kartu";

  const judul = document.createElement("span");
  judul.textContent = proyek.judul;

  const tombolFavorit = document.createElement("button");
  tombolFavorit.type = "button";
  tombolFavorit.textContent = state.favorit.includes(proyek.id)
    ? "★ Hapus favorit"
    : "☆ Favorit";
  tombolFavorit.addEventListener("click", () => {
    ubahFavorit(proyek.id);
  });

  kartu.append(judul, tombolFavorit);
  return kartu;
}

export function render() {
  wadah.textContent = "";

  const proyekTerfilter = saring(state.semuaProyek, state.kategoriAktif);

  proyekTerfilter.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });

  if (state.semuaProyek.length === 0) {
    pesanKosong.textContent = "Belum ada data proyek.";
    pesanKosong.hidden = false;
  } else if (proyekTerfilter.length === 0) {
    pesanKosong.textContent = "Tidak ada proyek yang sesuai dengan filter.";
    pesanKosong.hidden = false;
  } else {
    pesanKosong.hidden = true;
  }

  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle(
      "aktif",
      tombol.dataset.kategori === state.kategoriAktif,
    );
  });
}

pasangRender(render);

export function tampilkanGalat(galat) {
  pesanGalat.textContent = "Data proyek gagal dimuat: " + galat.message;
  pesanGalat.hidden = false;
}

export function aturMemuat(aktif) {
  statusMuat.hidden = !aktif;

  if (aktif) {
    pesanGalat.hidden = true;
  }
}

export function tampilkanKategoriAktif(kategori) {
  aturKategori(kategori);
}

export function pasangPesanAwal() {
  render();
}

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

export function pasangValidasiForm() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validasiForm()) {
      form.reportValidity();
      return;
    }

    alert("Form valid! Data siap diproses.");
  });
}
