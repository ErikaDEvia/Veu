<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import fondo from '@/assets/fondo.png';
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="container">
    <div class="background"></div> <!-- FONDO SEPARADO -->

    <div class="content">
      <Header />
      <Nav />
      <main>
        <RouterView /> <!-- Aquí se cargan las vistas -->
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
/* 🔹 Asegurar que **toda la pantalla** está ocupada */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden; /* Evita cualquier desplazamiento */
  display: flex;
}

/* 🔹 Contenedor principal */
.container {
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* 🔹 Fondo independiente */
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/fondo.png') center/cover no-repeat;
  z-index: -1; /* Lo manda atrás */
  background-size: cover;
  background-position: left;
}

/* 🔹 Contenido sobre el fondo */
.content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

/* 🔹 Ajustar `main` para evitar el scroll global */
main {
  flex-grow: 1;
  overflow-y: auto; /* Permite scroll SOLO dentro de main */
  }
</style>
