<template>
    <v-container class="d-flex justify-center align-center min-vh-100">
    <v-card class="mx-auto" max-width="400" outlined>
    <v-card-title class="text-center">Registro Usuario</v-card-title>
    <v-card-text>
    <v-form>
    <!-- Campo de Nombre -->
    <v-text-field
                v-model="user.nombre"
                label="Nombre"
                placeholder="Nombre"
                outlined
                dense
    ></v-text-field>
     
              <!-- Campo de Email -->
    <v-text-field
                v-model="user.email"
                label="Email"
                placeholder="email@email.com"
                type="email"
                outlined
                dense
    ></v-text-field>
     
              <!-- Campo de Teléfono -->
    <v-text-field
                v-model="user.telefono"
                label="Teléfono"
                placeholder="1234123"
                outlined
                dense
    ></v-text-field>
     
              <!-- Campo de Contraseña -->
    <v-text-field
                v-model="user.password"
                label="Contraseña"
                type="password"
                outlined
                dense
    ></v-text-field>
     
              <!-- Campo de Repetir Contraseña -->
    <v-text-field
                v-model="user.repeatPassword"
                label="Repetir Contraseña"
                type="password"
                outlined
                dense
    ></v-text-field>
     
              <!-- Botón de Registro -->
    <v-btn
                color="primary"
                block
                class="mt-4"
                @click="registroUsuario"
    >
                Registrarme
    </v-btn>
    </v-form>
     
            <!-- Separador -->
    <v-divider class="my-4"></v-divider>
     
            <!-- Botón para Volver al Login -->
    <v-btn
              color="secondary"
              block
              to="/login"
    >
              Volver al Login
    </v-btn>
    </v-card-text>
    </v-card>
    </v-container>
    </template>
     
    <script>
    import axios from "axios";
     
    export default {
      name: "RegistroUsuario",
      data() {
        return {
          user: {
            nombre: "",
            email: "",
            telefono: "",
            password: "",
            repeatPassword: "",
          },
        };
      },
      methods: {
        registroUsuario() {
          this.$router.push({ name: "ConfirmarUsuario" });
          console.log(this.user);
        },
        datosusuario() {
          axios
            .get(
              "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/registroreq.json"
            )
            .then((response) => {
              this.user = response.data.registroUsuario;
              console.log(this.user);
            })
            .catch((error) => {
              console.error("Error en la comunicación", error);
            });
        },
      },
      mounted() {
        this.datosusuario();
      },
    };
    </script>
     
    <style scoped>
    .min-vh-100 {
      min-height: 100vh;
    }
    </style>
    tiene menú contextual
    
    