
<template>

  <v-carousel class="ma-6" height="600" cycle :show-arrows="false">
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
            src: 'https://img.freepik.com/vector-premium/ilustracion-paisaje-verano-granja-escena-fondo-campo-tierras-cultivo-dibujos-animados-camino-casa-agricultores-traves-campo-hierba-verde-colinas-pradera-pastizales-molinos-viento-paisaje-naturaleza_213110-516.jpg?w=2000',
            
          },
            {
            src: 'https://img.freepik.com/vector-premium/ilustracion-paisaje-verano-granja-escena-fondo-campo-tierras-cultivo-dibujos-animados-camino-casa-agricultores-traves-campo-hierba-verde-colinas-pradera-pastizales-molinos-viento-paisaje-naturaleza_213110-516.jpg?w=2000',
          },
          
        ],
      }
    },
  }
</script>