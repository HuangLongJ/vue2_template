import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "@/store";
import Avue from "@smallwei/avue";
import "@smallwei/avue/lib/index.css";
import axios from "axios";

Vue.use(Avue, { axios });

Vue.use(Element);

window.axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
