
<template>
  <v-carousel height="100%" width="100%" cycle :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://ugelarequipanorte.gob.pe/wp/wp-content/uploads/2021/12/comunicado.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>