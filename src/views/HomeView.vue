<template>
  <v-container>

    <HomeComponent></HomeComponent>
  </v-container>
</template>

<script>
import HomeComponent from '../components/HomeComponent.vue'
//import NavbarComponent from '../components/NavbarComponent.vue'

export default {
  name: 'Home',

  components: {
     HomeComponent // Registrar el componente
  },

}
</script>