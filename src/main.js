import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import LoginVue from './components/LoginVue.vue'
import BusquedaVue from './components/BusquedaVue.vue'

const router = new VueRouter({
  mode : 'history',
  base: __dirname,
  routes:[
  {
    path:'/logins',
    name:'login',
    component:LoginVue
  },
  {
    path:'/busquedas',
    name:'busqueda',
    component:BusquedaVue
  }
]
})


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
