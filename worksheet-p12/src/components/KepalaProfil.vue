<script setup>
defineProps({
  nama: {
    type: String,
    required: true,
  },
  peran: {
    type: String,
    required: true,
  },
  keahlian: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <header class="kepala-profil">
    <h1>{{ nama }}</h1>
    <p>{{ peran }}</p>

    <ul class="daftar-keahlian">
      <li v-for="item in keahlian" :key="item">
        {{ item }}
      </li>
    </ul>
  </header>
</template>
