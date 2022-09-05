<template>
  <v-app>
    <v-main class="fondo3">
    <v-card class="ma-auto mt-10" height="620" width="374">
      <v-img
        height="30%"
        src="https://thumbs.dreamstime.com/b/plaza-de-armas-arequipa-per%C3%BA-49441219.jpg"
      ></v-img>
      <v-card-title class="mt-0 mb-0 justify-center"> Ugel-BuResol v1.0 </v-card-title>
      <v-card-title class="amber--text justify-center">Login</v-card-title>
      <v-form class="mt-0 ml-5 mr-5">
        <v-text-field v-model="nombre" label="Usuario"></v-text-field>

        <v-text-field
          v-model="contrasena"
          label="Contraseña"
          type="password"
        ></v-text-field>

        <v-btn
          :disabled="valid"
          color="amber"
          block
          class="white--text"
          @click="validate"
        >
          Acceder
        </v-btn>

        <v-divider class="my-2" ></v-divider>

        <v-btn block color="gray" class="mr-4" @click="reset">Registrarse</v-btn>
        <v-divider class="my-2" ></v-divider>
          <v-btn
      block
      color="blue"
      class="white--text">¿Olvidaste Contraseña?</v-btn>
      </v-form>
    
    </v-card>
    </v-main>
  </v-app>
</template>
<style>
  .fondo3{
    width: 100%;
    background: url('https://img.freepik.com/vector-premium/ilustracion-paisaje-verano-granja-escena-fondo-campo-tierras-cultivo-dibujos-animados-camino-casa-agricultores-traves-campo-hierba-verde-colinas-pradera-pastizales-molinos-viento-paisaje-naturaleza_213110-516.jpg?w=2000');
  }
</style>
