<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Menu
          </v-list-item-title>
          <v-list-item-subtitle>
            <!-- texto -->
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="$router.push({ path: item.route })"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Ugel-BuResol 1.0</v-toolbar-title>
    </v-app-bar>
    
    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      items: [
          { title: 'Búsqueda', icon: 'mdi-view-dashboard',route:'/busquedas'},
          { title: 'Cuenta', icon: 'mdi-account' },
          { title: 'Soporte', icon: 'mdi-nut' },
        ],
      right: null,
      drawer: null
    }),
  }
</script>