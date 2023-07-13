export const routes = [
  {
    path: "/naturau",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "Restaurantes",
        component: () =>
          import("@/modules/restaurantes/views/Restaurantes.vue"),
      },
      {
        path: "/comidas",
        name: "Comidas",
        component: () => import("@/modules/restaurantes/views/Comidas.vue"),
      },
      {
        path: "/comidas/:id",
        name: "ComidasRestaurante",
        component: () => import("@/modules/restaurantes/views/Comidas.vue"),
      },
    ],
  },
];
