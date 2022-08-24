<template>
  <v-app class="purple lighten-3">
    <v-card class="ma-auto" height="580" width="374">
      <v-img
        height="170"
        src="https://thumbs.dreamstime.com/b/plaza-de-armas-arequipa-per%C3%BA-49441219.jpg"
      ></v-img>
      <v-card-title class="justify-center"> Ugel-BuResol v1.0 </v-card-title>
      <v-card-title class="purple--text justify-center">Login</v-card-title>
      <v-form class="ml-5 mr-5">
        <v-text-field v-model="nombre" label="Usuario"></v-text-field>

        <v-text-field
          v-model="contrasena"
          label="Contraseña"
          type="password"
        ></v-text-field>

        <v-btn
          :disabled="valid"
          color="purple"
          block
          class="white--text"
          @click="validate"
        >
          Acceder
        </v-btn>

        <v-divider class="my-4" ></v-divider>

        <v-btn block color="gray" class="mr-4" @click="reset">Registrarse</v-btn>
      </v-form>
    </v-card>
  </v-app>
</template>
<script></script>
