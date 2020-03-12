import Vue from "vue";
import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

Vue.config.productionTip = false;

Vue.component("ray-navbar", Navbar);
Vue.component("ray-sidebar", Sidebar);

new Vue({
  render: h => h(App)
}).$mount("#app");
