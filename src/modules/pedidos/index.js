import router from "@/router";
import { routes } from "./router";

routes.forEach((route) => {
  router.addRoute(route);
});
