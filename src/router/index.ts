import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RestablecerContrasenaView from '@/views/RestablecerContrasenaView.vue';
import RegistroView from '@/views/RegistroView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/RestablecerContrasena',
      name: 'Restablecer Contraseña',
      component: RestablecerContrasenaView,
    },
    {
      path: '/Registro',
      name: 'Registro',
      component: RegistroView,
    },
  ],
})

export default router;
