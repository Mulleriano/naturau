export const routes = [
  {
      path: "/",
      component: () => import ("../layouts/Access.vue"),
      children: [
        {
          path: "login",
          name: "Login",
          component: () => import ("../views/Login.vue"),
        },
        {
          path: "register",
          name: "Register",
          component: () => import ("../views/Register.vue"),
        },
        {
          path: "hello",
          name: "Hello",
          component: () => import ("../views/Hello.vue"),
        },
        {
          path: "pet-name",
          name: "PetName",
          component: () => import ("../views/PetName.vue"),
        },
        {
          path: "pet-detail",
          name: "PetDetail",
          component: () => import ("../views/PetDetail.vue"),
        },
      ]
    }
];