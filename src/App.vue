<template>
  <v-app>
    <NavbarComponent/>
    <v-main>
      <router-view/>
    </v-main>
    <footer-component/>
  </v-app>


</template>
 
<script>
import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue'
 
export default {
  name: 'App',
  components:{
    NavbarComponent,
    FooterComponent
  },
  data: () => ({
    //
  }),
};
</script>