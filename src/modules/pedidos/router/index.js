export const routes = [
  {
    path: "/pedidos",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "Pedidos",
        component: () => import("../views/Pedidos.vue"),
      },
    ],
  },
];
