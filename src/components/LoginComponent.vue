<template>
    <v-container class="d-flex flex-column align-center min-vh-100 py-4">


        <v-card class="my-4" outlined width="400">
            <v-card-title class="justify-center">
                <h3>Iniciar sesión</h3>
            </v-card-title>

            <v-card-text>
                <!-- Alert Message -->
                <v-alert v-if="alertMessage" type="error" dismissible class="mb-4">
                    {{ alertMessage }}
                </v-alert>

                <!-- Login Form -->
                <v-form>
                    <v-text-field label="Correo" v-model="email" outlined dense
                        :rules="[v => !!v || 'El correo es requerido']" />

                    <v-text-field label="Contraseña" v-model="password" type="password" outlined dense
                        :rules="[v => !!v || 'La contraseña es requerida']" />

                    <v-btn @click="login" color="primary" block class="mt-3">
                        Iniciar sesión
                    </v-btn>
                </v-form>

                <!-- Register Link -->
                <v-row justify="center" class="mt-5">
                    <router-link to="/register" class="text-decoration-none text-primary">
                        Registrarse
                    </router-link>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import axios from "axios";


export default {
    components: {
    },
    data() {
        return {
            email: "",
            password: "",
            alertMessage: "",
        };
    },
    methods: {
        async login() {
            try {
                const url = "https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/login.json";
                const response = await axios.get(url);
                const data = response.data.loginRequest;
                const emailData = data.email;
                const passwordData = data.password;

                if (this.email.trim() !== "" && this.password.trim() !== "") {
                    if (this.email === emailData && this.password === passwordData) {
                        this.alertMessage = "";
                        this.$router.push("/home");
                    } else {
                        this.alertMessage = "Credenciales inválidas.";
                    }
                } else {
                    this.alertMessage = "Algún campo está vacío.";
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style scoped>
.min-vh-100 {
    min-height: 100vh;
}

.text-decoration-none {
    text-decoration: none;
}
</style>