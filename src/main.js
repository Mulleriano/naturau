import "./firebase.config";
import App from "./App.vue";
// Composables
import { createApp } from "vue";
import "@/modules/restaurantes";
// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
