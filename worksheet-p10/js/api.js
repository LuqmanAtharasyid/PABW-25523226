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

    // C.1: Teks JSON dari server diubah menjadi nilai JavaScript (larik)
    const data = await respons.json();

    // C.3: Periksa bentuk data dan tiap kuncinya (pastikan tidak ada yang undefined)
    console.log("Data yang diterima:", data);
    console.log("Objek pertama:", data[0]);
    console.log("ID:", data[0].id);
    console.log("Judul:", data[0].judul);
    console.log("Tahun:", data[0].tahun);
    console.log("Kategori:", data[0].kategori);
    console.log("Selesai:", data[0].selesai);

    // C.1: Objek JavaScript diubah menjadi teks JSON (arah sebaliknya)
    const badan = JSON.stringify({
      judul: "Website Top Up Diamond",
      kategori: "web",
    });
    console.log("Hasil stringify:", badan);
    console.log("Tipe hasil stringify:", typeof badan); // harus tampil: string

    return data;
  } catch (galat) {
    console.error("Gagal memuat:", galat.message);
    throw galat;
  }
}
