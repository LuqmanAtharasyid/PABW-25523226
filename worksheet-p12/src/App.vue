<script setup>
import { computed, ref } from "vue";
import { profil, saring } from "./data.js";

import KepalaProfil from "./components/KepalaProfil.vue";
import DaftarProyek from "./components/DaftarProyek.vue";
import FormTopup from "./components/FormTopup.vue";
import TentangSaya from "./components/TentangSaya.vue";

import proyekLokal from "./data/proyek.json";

const semuaProyek = ref([]);
const kategoriAktif = ref("semua");
const status = ref("memuat");

const proyekTampil = computed(() =>
  saring(semuaProyek.value, kategoriAktif.value),
);

async function muat() {
  status.value = "memuat";

  try {
    semuaProyek.value = proyekLokal;
    status.value = "berhasil";
  } catch (galat) {
    console.error("Gagal memuat proyek:", galat);
    status.value = "error";
  }
}

function ubahFilter(kategori) {
  kategoriAktif.value = kategori;
}

muat();
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
      :kategori-aktif="kategoriAktif"
      :status="status"
      @ubah-filter="ubahFilter"
    />

    <FormTopup />

    <TentangSaya />
  </main>
</template>
