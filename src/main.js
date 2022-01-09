import Vue from 'vue'
import './plugins/fontawesome'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
