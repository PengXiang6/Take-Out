import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset.css'
import 'vant/lib/index.css'
import './assets/css/base.css'
Vue.config.productionTip = false
import Vant from 'vant'


Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
