import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/bootstrap";
import vuetify from "./plugins/vuetify";
import "./plugins/ckeditor";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  // ckeditor,
  render: (h) => h(App),
}).$mount("#app");
