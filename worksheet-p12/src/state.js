
import { reactive } from "vue";

const KUNCI_PENYIMPANAN = "pabw-p11";
const VERSI_STATE = 1;

export const state = reactive({
  kategoriAktif: "semua",
  daftarProyek: [],
  favorit: [],
  memuat: true,
  galat: "",
});

export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI_PENYIMPANAN);

    if (teks === null) {
      return { favorit: [], kategoriAktif: "semua" };
    }

    const data = JSON.parse(teks);

    if (
      data === null ||
      typeof data !== "object" ||
      data.versi !== VERSI_STATE ||
      !Array.isArray(data.favorit) ||
      !data.favorit.every(
        (id) => Number.isInteger(id) && id > 0,
      ) ||
      !["semua", "selesai", "proses"].includes(data.kategoriAktif)
    ) {
      localStorage.removeItem(KUNCI_PENYIMPANAN);
      return { favorit: [], kategoriAktif: "semua" };
    }

    return data;
  } catch (galat) {
    console.warn("Penyimpanan tidak dapat dibaca:", galat);

    try {
      localStorage.removeItem(KUNCI_PENYIMPANAN);
    } catch (galatHapus) {
      console.warn("Penyimpanan rusak tidak dapat dihapus:", galatHapus);
    }

    return { favorit: [], kategoriAktif: "semua" };
  }
}

export function simpan(nilai = state) {
  try {
    localStorage.setItem(
      KUNCI_PENYIMPANAN,
      JSON.stringify({
        versi: VERSI_STATE,
        favorit: nilai.favorit,
        kategoriAktif: nilai.kategoriAktif,
      }),
    );
  } catch (galat) {
    console.warn("State tidak dapat disimpan:", galat);
  }
}

export function pulihkan(data) {
  state.favorit = data.favorit;
  state.kategoriAktif = data.kategoriAktif ?? "semua";
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
}

export function tambahFavorit(idProyek) {
  if (state.favorit.includes(idProyek)) {
    state.favorit = state.favorit.filter(
      (id) => id !== idProyek,
    );
  } else {
    state.favorit = [...state.favorit, idProyek];
  }
}

export function aturUlang() {
  state.favorit = [];
}

export function isiProyek(daftarProyek) {
  state.daftarProyek = daftarProyek;
}
