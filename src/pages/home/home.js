import Vue from 'vue'
import App from './Home.vue'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
