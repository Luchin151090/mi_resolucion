<template>
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        width="180"
        class="grey darken-3"
      >
      <v-list-item>
          <v-list-item-content class="justify-center">
            <v-list-item-title class="white--text text-h6 justify-center">
              Menu
            </v-list-item-title>
            <v-list-item-subtitle class="white--text justify-center">
              Ugel-Arequipa-Norte
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list
          dense
          nav
          
        >
          <v-list-item
            class="pink darken-4"
            v-for="item in items"
            :key="item.title"
            link
            @click="$router.push({path:item.route})"
          >
            <v-list-item-icon>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content >
              <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <!--  -->
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              salir
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
  
      <v-app-bar app class="grey darken-3">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title class="white--text">BuResol v1.0</v-toolbar-title>
      </v-app-bar>
  
      <v-main class="fondo2">
        <HomeVue v-if="this.$router.currentRoute.name !=='adcuen' &&
        $router.currentRoute.name !== 'ajustes' &&
        $router.currentRoute.name !== 'adbus' &&
        $router.currentRoute.name !== 'ada'
        "/>
        <router-view></router-view>
        <!--BusquedaVue/-->
      </v-main>
    </v-app>
  </template>
  
  <script>
  import BusquedaVue from './BusquedaVue.vue';
  import HomeVue from './HomeVue.vue';
  
    export default {
      data: () => ({
          items: [
              { title: "Inicio", icon: "mdi-home",route:'/admin'},
              { title: "Administrar",icon: "mdi-pencil",route:'/admin/administrar'},
              { title: "Busquedas", icon: "mdi-magnify",route:'/admin/busquedas'},
              { title: "Cuenta", icon:"mdi-account",route:'/admin/cuenta'},
        
          ],
          drawer: null
      }),
      components: { BusquedaVue, HomeVue }
  }
  </script>

  <style>
  .fondo2{
    background: url('https://static.vecteezy.com/system/resources/previews/008/161/955/non_2x/background-savanna-field-cartoon-african-nature-vector.jpg');
  }
  </style>