import { aturKategori } from "./state.js";
import { pasangValidasiForm } from "./dom.js";

const barisFilter = document.querySelector(".filter-proyek");

// Mengatur event tombol filter
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

// Mengatur event formulir
export function pasangEventForm() {
  pasangValidasiForm();
}
