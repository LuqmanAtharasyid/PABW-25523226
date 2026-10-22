<script setup>
defineProps({
  proyek: {
    type: Array,
    default: () => [],
  },
  kategoriAktif: {
    type: String,
    default: "semua",
  },
  status: {
    type: String,
    default: "berhasil",
  },
});

const emit = defineEmits(["ubah-filter"]);
</script>

<template>
  <section id="proyek">
    <h2>Proyek Saya</h2>

    <div class="filter-proyek" aria-label="Filter proyek">
      <button
        type="button"
        :aria-pressed="kategoriAktif === 'semua'"
        @click="emit('ubah-filter', 'semua')"
      >
        Semua
      </button>

      <button
        type="button"
        :aria-pressed="kategoriAktif === 'selesai'"
        @click="emit('ubah-filter', 'selesai')"
      >
        Selesai
      </button>

      <button
        type="button"
        :aria-pressed="kategoriAktif === 'proses'"
        @click="emit('ubah-filter', 'proses')"
      >
        Dalam Proses
      </button>
    </div>

    <p v-if="status === 'memuat'">Memuat proyek...</p>
    <p v-else-if="status === 'error'">
      Proyek gagal dimuat. Silakan coba lagi nanti.
    </p>
    <p v-else-if="proyek.length === 0">Belum ada proyek pada kategori ini.</p>

    <div v-else class="daftar-proyek">
      <article v-for="item in proyek" :key="item.id" class="kartu-proyek">
        <h3>{{ item.judul }}</h3>
        <p>Tahun: {{ item.tahun }}</p>
        <p>Kategori: {{ item.kategori }}</p>
        <p>
          Status:
          {{ item.selesai ? "Selesai" : "Dalam Proses" }}
        </p>
      </article>
    </div>
  </section>
</template>
