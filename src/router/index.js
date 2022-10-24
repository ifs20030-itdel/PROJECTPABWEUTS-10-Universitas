import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../views/AppHome.vue";
import AppDataDosen from "../views/AppDataDosen.vue";
import AppArtikelSatu from "../views/AppArtikelSatu.vue";

const routes = [
  {
    path: "/",
    name: "AppHome",
    component: AppHome,
  },
  {
    path: "/datadosen",
    name: "AppDataDosen",
    component: AppDataDosen,
  },
  {

    path: "/artikel",
    name: "AppArtikelSatu",
    component: AppArtikelSatu,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
