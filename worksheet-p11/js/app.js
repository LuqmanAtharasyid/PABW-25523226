import { ambilProyek } from "./api.js";
import { aturProyek } from "./state.js";
import { tampilkanGalat, aturMemuat, pasangPesanAwal } from "./dom.js";
import { pasangEventFilter, pasangEventForm } from "./events.js";

// Menyiapkan tampilan dan event
pasangPesanAwal();
pasangEventFilter();
pasangEventForm();

// Mengambil data proyek dari API
async function muatProyek() {
  aturMemuat(true);

  try {
    const data = await ambilProyek();
    aturProyek(data);
  } catch (galat) {
    tampilkanGalat(galat);
  } finally {
    aturMemuat(false);
  }
}

muatProyek();
