
const ALAMAT =
  "https://raw.githubusercontent.com/LuqmanAtharasyid/PABW-25523226/refs/heads/main/worksheet-p10/data/proyek.json";

export async function ambilProyek() {
  const respons = await fetch(ALAMAT);

  if (!respons.ok) {
    throw new Error(`Gagal memuat proyek: HTTP ${respons.status}`);
  }

  const data = await respons.json();

  if (!Array.isArray(data)) {
    throw new Error("Format data proyek tidak valid.");
  }

  return data;
}
