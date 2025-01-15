<template>
  <v-container>
    <navbar-component></navbar-component>

  </v-container>
</template>

<script>
import HomeComponent from '../components/HomeComponent'
import NavbarComponent from '../components/NavbarComponent.vue'

export default {
  name: 'Home',

  components: {
    HomeComponent,
  },
  components: {
    NavbarComponent, // Registrar el componente
  },

}
</script>