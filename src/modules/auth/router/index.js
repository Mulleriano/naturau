export const routes = [
  {
    path: "/",
    component: () => import("../layouts/Access.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("../views/Login.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("../views/Register.vue"),
      },
      {
        path: "hello",
        name: "Hello",
        component: () => import("../views/Hello.vue"),
      },
      {
        path: "pet-name",
        name: "PetName",
        component: () => import("../views/PetName.vue"),
      },
      {
        path: "pet-detail",
        name: "PetDetail",
        component: () => import("../views/PetDetail.vue"),
      },
      {
        path: "pet-foto",
        name: "PetFoto",
        component: () => import("../views/PetFoto.vue"),
      },
    ],
  },
  {
    path: "/perfil",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "Perfil",
        component: () => import("../views/Perfil.vue"),
      },
    ],
  },
];
