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
    ],
  },
];
