import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import VueGoodTablePlugin from 'vue-good-table'
import vSelect from "vue-select"
import VeeValidate from 'vee-validate'
import JsonExcel from 'vue-json-excel'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'vue-good-table/dist/vue-good-table.css'
import 'vue-select/dist/vue-select.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2)
Vue.use(VueGoodTablePlugin)
Vue.use(VeeValidate)

Vue.component("v-select", vSelect)
Vue.component("downloadExcel", JsonExcel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
