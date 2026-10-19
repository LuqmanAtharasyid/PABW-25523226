export const state = {
  semuaProyek: [],
  kategoriAktif: "semua",
  favorit: [],
};

let fungsiRender = () => {};

export function pasangRender(render) {
  fungsiRender = render;
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

  fungsiRender();
}
