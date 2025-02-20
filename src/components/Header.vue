<script setup>
import logo from '@/assets/logo_lobo.png'; // Imagen del logo
</script>

<template>
  <header class="header">
    <div class="header-content">
      <img :src="logo" alt="Linex Logo" class="logo" />
      <h1 class="title">Linex</h1>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 10px;
}

.header-content {
  display: flex;
  flex-direction: column; /* Apila el logo y el título */
  align-items: center; /* Centrar elementos */
  justify-content: center;
}

.logo {
  width: 200px; /* Ajusta el tamaño del logo */
  height: auto;
}


.title {
  color: white;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
}
</style>
