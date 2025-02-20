<template>
  <footer class="footer">
    <p>Don't have an account? <a href="#" class="signup-link">Sign Up now!</a></p>
  </footer>
</template>

<style scoped>
.footer {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}

.footer p {
  font-size: 1.2rem; /* Texto más grande */
  font-weight: bold; /* Texto en negrita */
  color: white; /* Asegura que se vea bien sobre el fondo */
}

.signup-link {
  color: #eba2a2; /* Azul llamativo */
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>
