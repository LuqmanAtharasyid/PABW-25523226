const KUNCI_PENYIMPANAN = "p11-state";
const VERSI_STATE = 1;

function bacaPenyimpanan() {
  try {
    const teks = localStorage.getItem(KUNCI_PENYIMPANAN);

    if (teks === null) {
      return { favorit: [] };
    }

    const data = JSON.parse(teks);

    if (
      data === null ||
      typeof data !== "object" ||
      data.versi !== VERSI_STATE ||
      !Array.isArray(data.favorit) ||
      !data.favorit.every((id) => Number.isInteger(id) && id > 0)
    ) {
      return { favorit: [] };
    }

    return data;
  } catch (galat) {
    console.warn("Penyimpanan tidak dapat dibaca:", galat);
    return { favorit: [] };
  }
}

export const state = {
  semuaProyek: [],
  kategoriAktif: "semua",
  favorit: bacaPenyimpanan().favorit,
};

let fungsiRender = () => {};

export function pasangRender(render) {
  fungsiRender = render;
}

function simpanPenyimpanan() {
  try {
    localStorage.setItem(
      KUNCI_PENYIMPANAN,
      JSON.stringify({
        versi: VERSI_STATE,
        favorit: state.favorit,
      }),
    );
  } catch (galat) {
    console.warn("Favorit tidak dapat disimpan:", galat);
  }
}

export function aturProyek(daftarProyek) {
  state.semuaProyek = daftarProyek;
  fungsiRender();
}

export function aturKategori(kategori) {
  state.kategoriAktif = kategori;
  fungsiRender();
}

export function ubahFavorit(idProyek) {
  if (state.favorit.includes(idProyek)) {
    state.favorit = state.favorit.filter((id) => id !== idProyek);
  } else {
    state.favorit = [...state.favorit, idProyek];
  }

  simpanPenyimpanan();
  fungsiRender();
}
