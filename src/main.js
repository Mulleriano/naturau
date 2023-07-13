import "./firebase.config";
import App from "./App.vue";
// Composables
import { createApp } from "vue";
import "@/modules/restaurantes";
// Plugins
import { registerPlugins } from "@/plugins";
import router from "./router";

import "@/modules/auth";
import "@/modules/pedidos";

const app = createApp(App);

registerPlugins(app);

app.use(router);

app.mount("#app");
