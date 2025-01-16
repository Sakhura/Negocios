<template>
    <v-container>
    <v-btn color="primary" to="/">Volver al Home</v-btn>
    <v-row>
    <v-col
            v-for="(product, index) in products"
            :key="index"
            @click="DetalleProducto(index)"
    >
    <v-card>
    <v-card-title class="blue lighten-1 white--text">
                Categoria: {{ product.category }}
    </v-card-title>
    <v-card-text>
    <h3>{{ product.name }}</h3>
    </v-card-text>
    </v-card>
    </v-col>
    </v-row>
    </v-container>
    </template>
     
     
    <script>
    import axios from 'axios';
     
    export default {
      name: 'ListaProductos',
      data() {
        return {
          products: []
        };
      },
      methods: {
        obtenerDatos() {
          axios
            .get(
              `https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/products.json`
            )
            .then((resp) => {
              this.products = resp.data.products;
            });
        },
        DetalleProducto(id) {
          // Navega a la página de detalle del producto
          this.$router.push(`/Productos/${id}`);
        }
      },
      created() {
        this.obtenerDatos();
      }
    };
    </script>