import { mount, createLocalVue } from '@vue/test-utils';
import HomeComponent from '@/components/HomeComponent.vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import axios from 'axios';

// Mock de los datos para evitar llamadas reales a la API
jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({
        data: {
            home: {
                generalInfo: {},
                providers: [
                    { name: 'Proveedor 1', contactInfo: { email: 'test1@email.com', phone: '123456789' } }
                ],
                laboratories: [
                    {
                        name: 'Lab 1',
                        contactInfo: { email: 'lab@email.com', phone: '987654321' },
                        services: ['Servicio 1', 'Servicio 2']
                    }
                ],
                contactInfo: {}
            }
        }
    }))
}));

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
const vuetify = new Vuetify();

describe('HomeComponent.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(HomeComponent, {
            localVue,
            router,
            vuetify,
        });
    });

    it('renderiza correctamente el componente', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('h2').text()).toBe('Proveedores');
    });

    it('verifica la carga de proveedores', async () => {
        await wrapper.vm.fetchHomeData();
        expect(wrapper.vm.providers.length).toBe(1);
        expect(wrapper.find('tbody tr').exists()).toBe(true);
        expect(wrapper.find('tbody tr td').text()).toBe('1');
    });

    it('navega al registro de proveedores', async () => {
        await wrapper.find('v-btn').trigger('click');
        expect(wrapper.vm.$route.path).toBe('/registro');
    });

    it('simula error en la carga de datos', async () => {
        axios.get.mockRejectedValueOnce(new Error('Error al obtener los datos'));
        await wrapper.vm.fetchHomeData();
        expect(console.error).toHaveBeenCalled();
    });
});
