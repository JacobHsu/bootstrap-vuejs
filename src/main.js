import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VeeValidate)

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
