import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "./assets/less/index.less";
import store from "./store/index.js";
import api from "./api/api.js";
const app = createApp(App);
app.config.globalProperties.$api = api;
app.use(router).use(store);
app.mount("#app");

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
