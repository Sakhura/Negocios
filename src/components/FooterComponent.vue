<template>
    <v-footer color="primary" dark padless>
        <v-container>
            <v-row justify="space-between" class="py-4">
                <!-- Información de la Tienda -->
                <v-col cols="12" md="4" class="text-center text-md-left">
                    <h3 class="text-h6 mb-2">PetShop Amigos Peludos</h3>
                    <p class="mb-0">Tu tienda favorita para el cuidado de tus mascotas.</p>
                    <p class="mb-0">© {{ new Date().getFullYear() }} Todos los derechos reservados.</p>
                </v-col>

                <!-- Redes Sociales -->
                <v-col cols="12" md="4" class="text-center">
                    <h3 class="text-h6 mb-2">Síguenos</h3>
                    <v-btn v-for="(social, index) in socialMedia" :key="index" :href="social.link" target="_blank" icon
                        dark class="mx-2">
                        <v-icon>{{ social.icon }}</v-icon>
                    </v-btn>
                </v-col>

                <!-- Información de Contacto -->
                <v-col cols="12" md="4" class="text-center text-md-right">
                    <h3 class="text-h6 mb-2">Contacto</h3>
                    <p class="mb-0">Email: info@petshopamigospeludos.com</p>
                    <p class="mb-0">Teléfono: +123 456 7890</p>
                    <p class="mb-0">Dirección: Calle Mascotas 123, Ciudad, País</p>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: "FooterComponent",
    data() {
        return {
            // Lista de redes sociales
            socialMedia: [
                { icon: "mdi-facebook", link: "https://facebook.com/petshopamigospeludos" },
                { icon: "mdi-twitter", link: "https://twitter.com/petshopamigospeludos" },
                { icon: "mdi-instagram", link: "https://instagram.com/petshopamigospeludos" },
                { icon: "mdi-youtube", link: "https://youtube.com/petshopamigospeludos" },
            ],
        };
    },
};
</script>

<style scoped>
.v-footer {
    margin-top: auto;
    /* Para que el footer se quede abajo si el contenido es corto */
}

.v-btn {
    transition: transform 0.2s;
}

.v-btn:hover {
    transform: scale(1.2);
    /* Efecto de escala al pasar el mouse */
}
</style>