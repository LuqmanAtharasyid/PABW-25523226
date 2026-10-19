import { aturKategori, resetFavorit } from "./state.js";
import { pasangValidasiForm } from "./dom.js";

const bagianProyek = document.querySelector("#proyek");
const barisFilter = bagianProyek.querySelector(".filter-proyek");
const tombolReset = bagianProyek.querySelector("#reset-favorit");

// Mengatur event tombol filter proyek
export function pasangEventFilter() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol || !barisFilter.contains(tombol)) {
      return;
    }

    const kategori = tombol.dataset.kategori;

    if (!kategori) {
      return;
    }

    aturKategori(kategori);
  });
}

// Mengatur event reset favorit
export function pasangEventReset() {
  tombolReset.addEventListener("click", () => {
    resetFavorit();
  });
}

// Mengatur event formulir top up
export function pasangEventForm() {
  pasangValidasiForm();
}
