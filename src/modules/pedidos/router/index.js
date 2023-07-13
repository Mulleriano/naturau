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
      {
        path: "/pedidos/:id",
        name: "PedidoInfo",
        component: () => import("../views/PedidoInfo.vue"),
      },
    ],
  },
];
