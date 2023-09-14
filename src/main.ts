import { createSSRApp } from "vue";
import pinia from "./pinia";
import App from "./App.vue";
import gloalComponent from "./components";

export function createApp() {
  const app = createSSRApp(App);

  app.use(pinia);

  app.use(gloalComponent);

  return {
    app,
  };
}
