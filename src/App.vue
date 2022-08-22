<template>
  <v-app >
    
    <v-main>
      <router-view/>
    </v-main>
    <DashboardVue v-if="this.$router.currentRoute.name !== 'login'"/>
  </v-app>
</template>

<script>
import DashboardVue from './components/DashboardVue.vue';

export default {
  name: 'App',

  components: {
    DashboardVue,
  },

  data: () => ({
    //
  }),
};
</script>