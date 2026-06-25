import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import InvitationView from '../views/InvitationView.vue';

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/wedding',
    redirect: '/angel-e-camila'
  },
  {
    path: '/:slug',
    component: InvitationView
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});