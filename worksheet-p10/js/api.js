const ALAMAT = "data/proyek.json";

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);

    console.log("Status:", respons.status);
    console.log("OK:", respons.ok);
    console.log("Content-Type:", respons.headers.get("Content-Type"));

    if (!respons.ok) {
      throw new Error("Status " + respons.status);
    }

    const data = await respons.json();

    console.log("Data yang diterima:", data);

    return data;
  } catch (galat) {
    console.error("Gagal memuat:", galat.message);
    throw galat;
  }
}
