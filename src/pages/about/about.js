import Vue from 'vue'
import App from './About.vue'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
