// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/naturau",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "RestList",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/modules/restaurantes/views/RestList.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
