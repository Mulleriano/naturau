import router from "@/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const routes = [
  {
    path: "/naturau",
    component: () => import("@/layouts/Default.vue"),
    meta: {
      requiresAuth: true,
    },
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
        path: "/comidas/:restId",
        name: "ComidasRestaurante",
        component: () => import("@/modules/restaurantes/views/Comidas.vue"),
      },
      {
        path: "/comidas/:restId/:comidaId",
        name: "ComidaInfo",
        component: () => import("../views/ComidaInfo.vue"),
      },
    ],
  },
];

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListner = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListner();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("Faça login!");
      next("/login");
    }
  } else {
    next();
  }
});
