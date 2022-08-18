import Vue from "vue";
import App from "./Fresh.vue";
import "jquery/dist/jquery.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/index.scss";
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
