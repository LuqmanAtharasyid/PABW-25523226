<script setup>
import { ref } from "vue";

const namaGame = ref("");
const jumlahDiamond = ref("");
const pesan = ref("");

function kirimForm() {
  if (!namaGame.value || !jumlahDiamond.value) {
    pesan.value = "Silakan lengkapi semua pilihan.";
    return;
  }

  pesan.value = `Permintaan top up ${namaGame.value} sebanyak ${jumlahDiamond.value} diamond berhasil dicatat.`;
}
</script>

<template>
  <section id="topup">
    <h2>Form Top Up Diamond</h2>

    <form @submit.prevent="kirimForm">
      <label for="nama-game">Pilih game</label>
      <select id="nama-game" v-model="namaGame" required>
        <option value="" disabled>Pilih game</option>
        <option value="Mobile Legends">Mobile Legends</option>
        <option value="Free Fire">Free Fire</option>
        <option value="PUBG Mobile">PUBG Mobile</option>
      </select>

      <label for="jumlah-diamond">Jumlah diamond</label>
      <input
        id="jumlah-diamond"
        v-model="jumlahDiamond"
        type="number"
        min="1"
        required
        placeholder="Masukkan jumlah diamond"
      />

      <button type="submit">Catat Permintaan</button>
    </form>

    <p v-if="pesan" role="status">{{ pesan }}</p>
  </section>
</template>
