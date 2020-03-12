import Vue from "vue";
import App from "./App.vue";
import PortalVue from "portal-vue";
import { BootstrapVue } from "bootstrap-vue";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

Vue.config.productionTip = false;

Vue.use(PortalVue);
Vue.use(BootstrapVue);

Vue.component("ray-navbar", Navbar);
Vue.component("ray-sidebar", Sidebar);

new Vue({
  render: h => h(App)
}).$mount("#app");
