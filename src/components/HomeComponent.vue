<template>
    <div class="min-vh-100 d-flex flex-column">        
        <v-container class="flex-grow-1 d-flex flex-column align-start">
        <!-- Proveedores Section -->
        <section class="my-4">
            <h2 class="mb-4">Proveedores</h2>
            <v-simple-table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>E-mail</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(provider, index) in providers" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ provider.name }}</td>
                        <td>{{ provider.contactInfo.email }}</td>
                        <td>{{ provider.contactInfo.phone }}</td>
                    </tr>
                </tbody>
            </v-simple-table>
            <v-btn @click="navigateToRegisterProvider" color="info" large class="mt-4">
                Registrar Proveedor
            </v-btn>
        </section>

        <!-- Laboratorios Section -->
        <section class="my-4">
            <h2 class="mb-4">Laboratorios</h2>
            <v-row>
                <v-col v-for="(lab, index) in laboratories" :key="index" cols="12" md="6">
                    <v-card outlined>
                        <v-card-title>{{ lab.name }}</v-card-title>
                        <v-card-text>
                            <p><strong>Teléfono:</strong> {{ lab.contactInfo.phone }}</p>
                            <p><strong>Correo:</strong> {{ lab.contactInfo.email }}</p>
                            <ul>
                                <li v-for="(service, serviceIndex) in lab.services" :key="serviceIndex">
                                    {{ service }}
                                </li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </section>

        <!-- Listado Productos Section -->
        <v-row class="my-5 g-3 py-4" justify="center">
            <v-col cols="12" md="6" class="text-center">
                <h2 class="fs-1">Listado Productos</h2>
            </v-col>
            <v-col cols="auto">
                <v-btn @click="navigateToProducts" color="info" large>
                    Ver Listado de Productos
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "HomeView",

    data() {
        return {
            generalInfo: {},
            providers: [],
            laboratories: [],
            contactInfo: {},
        };
    },

    methods: {
        async fetchHomeData() {
            try {
                const response = await axios.get(
                    "https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/home.json"
                );
                const homeData = response.data.home;
                this.generalInfo = homeData.generalInfo;
                this.providers = homeData.providers;
                this.laboratories = homeData.laboratories;
                this.contactInfo = homeData.contactInfo;
            } catch (error) {
                console.error("Error fetching home data:", error);
            }
        },

        navigateToRegisterProvider() {
            this.$router.push("/register-provider");
        },

        navigateToProducts() {
            this.$router.push("/products");
        },
    },

    created() {
        this.fetchHomeData();
    },
};
</script>

<style scoped>
.min-vh-100 {
    min-height: 100vh;
}

.fs-1 {
    font-size: 2rem;
}
</style>