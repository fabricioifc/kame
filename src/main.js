import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import router from './router'
=======
import {router} from "./routes"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
>>>>>>> main

Vue.config.productionTip = false



new Vue({
  router,
<<<<<<< HEAD
  render: h => h(App)
=======
  render: h => h(App),
>>>>>>> main
}).$mount('#app')
