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

<style scoped>
  
.v-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}


.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.v-card-title {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.v-card-text h3 {
  font-size: 1.5rem;
  text-align: center;
  color: #2c3e50;
}

/* Espaciado en el botón */
.v-btn {
  margin-bottom: 20px;
}

/* Responsividad */
@media (max-width: 600px) {
  .v-row {
    gap: 8px;
  }

  .product-card {
    margin-bottom: 16px;
  }
}
</style>