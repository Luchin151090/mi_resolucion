<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      width="180"
      class="teal lighten-1"
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
          class="amber"
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

    <v-app-bar app class="teal lighten-1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">BuResol v1.0</v-toolbar-title>
    </v-app-bar>

    <v-main class="fondo">
      <HomeVue v-if="this.$router.currentRoute.name !=='cuenta' &&
      $router.currentRoute.name !== 'ajustes' &&
      $router.currentRoute.name !== 'busquedas'
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
            { title: "Inicio", icon: "mdi-home",route:'/'},
            { title: "Busquedas", icon: "mdi-magnify",route:'/busquedas'},
            { title: "Cuenta", icon:"mdi-account",route:'/cuenta'},
        ],
        drawer: null
    }),
    components: { BusquedaVue, HomeVue }
}
</script>

<style>
  .fondo{
    background: url('https://img.freepik.com/vector-premium/paisaje-natural-fondo-videoconferencia_23-2148642199.jpg?w=2000');
  }
</style>