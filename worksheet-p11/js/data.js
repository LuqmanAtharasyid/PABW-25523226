export const profil = {
  nama: "Luqman Atharasyid",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftarProyek, kategoriAktif) {
  if (kategoriAktif === "semua") {
    return daftarProyek;
  }

  if (kategoriAktif === "selesai") {
    return daftarProyek.filter((proyek) => proyek.selesai);
  }

  if (kategoriAktif === "proses") {
    return daftarProyek.filter((proyek) => !proyek.selesai);
  }

  return [];
}
