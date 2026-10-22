
<script setup>
import { computed, onMounted, watch } from "vue";
import { profil, saring } from "./data.js";
import {
  state,
  simpan,
  muat,
  pulihkan,
  pilihKategori,
  isiProyek,
} from "./state.js";
import { ambilProyek } from "./api.js";

import KepalaProfil from "./components/KepalaProfil.vue";
import DaftarProyek from "./components/DaftarProyek.vue";
import FormTopup from "./components/FormTopup.vue";
import TentangSaya from "./components/TentangSaya.vue";

const proyekTampil = computed(() =>
  saring(state.daftarProyek, state.kategoriAktif),
);

function ubahFilter(kategori) {
  pilihKategori(kategori);
}

onMounted(async () => {
  pulihkan(muat());

  try {
    isiProyek(await ambilProyek());
  } catch (galat) {
    console.error("Gagal memuat proyek:", galat);
    state.galat =
      "Data gagal dimuat. Periksa koneksi, lalu muat ulang.";
  } finally {
    state.memuat = false;
  }
});

watch(
  state,
  (nilai) => {
    simpan(nilai);
  },
  { deep: true },
);
</script>

<template>
  <main class="wadah">
    <KepalaProfil
      :nama="profil.nama"
      :peran="profil.peran"
      :keahlian="profil.keahlian"
    />

    <DaftarProyek
      :proyek="proyekTampil"
      :kategori-aktif="state.kategoriAktif"
      :status="state.memuat ? 'memuat' : state.galat ? 'error' : 'berhasil'"
      @ubah-filter="ubahFilter"
    />

    <FormTopup />

    <TentangSaya />
  </main>
</template>
