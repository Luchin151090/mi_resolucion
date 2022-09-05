import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import LoginVue from './components/LoginVue.vue'
import BusquedaVue from './components/BusquedaVue.vue'
import DashboardVue from './components/DashboardVue.vue'
import HomeVue from './components/HomeVue.vue'
import CuentaVue from './components/CuentaVue.vue'
import Dash2Vue from './components/Dash2Vue.vue'
import RegistrarVue from './components/RegistrarVue.vue'


const router = new VueRouter({
  mode : 'history',
  base: __dirname,
  routes:[
    {
      path:'/admin',
      name:'admin',
      component:Dash2Vue,
      children:[
        {
        path:'/admin/busquedas',
        name:'adbus',
        component:BusquedaVue
      },
      {
        path:'/admin/cuenta',
        name:'adcuen',
        component:CuentaVue
      },
      {
        path:'/admin/administrar',
        name:'ada',
        component:RegistrarVue
      }
      ]
    
    },
    {
      path:'/',
      name:'home',
      component:DashboardVue,
      children:[
  
        {
          path:'/busquedas',
          name:'busquedas',
          component:BusquedaVue
        },
        {
          path:'/cuenta',
          name:'cuenta',
          component:CuentaVue
        }
      ]
    },
    
  {
    path:'/logins',
    name:'login',
    component:LoginVue
  },
]
})


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
