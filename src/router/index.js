import { createRouter, createWebHistory } from 'vue-router';
import UseCase1 from '../components/satusehat/Usecaseone.vue';
import UseCase2 from '../components/satusehat/Usecasetwo.vue';
import UseCase3 from '../components/satusehat/Usecasethree.vue';
import UseCase4 from '../components/satusehat/Usecasefour.vue';
import UseCase5 from '../components/satusehat/Usecasefive.vue';
import UseCase6 from '../components/satusehat/Usecasesix.vue';
import Location from '../components/satusehat/Location.vue';
import Organization from '../components/satusehat/Organization.vue';
import Patient from '../components/satusehat/Patient.vue';
import Practitioner from '../components/satusehat/Practitioner.vue';

const routes = [
    { 
        path: '/Usecaseone', 
        name: 'UseCaseOne', 
        component: UseCase1 },
    { 
        path: '/Usecasetwo', 
        name: 'UseCaseTwo', 
        component: UseCase2 },
    { 
        path: '/Usecasethree', 
        name: 'UseCaseThree', 
        component: UseCase3 },
    { 
        path: '/Usecasefour', 
        name: 'UseCaseFour', 
        component: UseCase4 },
    { 
        path: '/Usecasefive', 
        name: 'UseCaseFive', 
        component: UseCase5 },
    { 
        path: '/Usecasesix', 
        name: 'UseCaseSix', 
        component: UseCase6 },
    { 
        path: '/Location', 
        name: 'Location', 
        component: Location },
    { 
        path: '/Organization', 
        name: 'Organization', 
        component: Organization },
    { 
        path: '/Patient', 
        name: 'Patient', 
        component: Patient },
    { 
        path: '/Practitioner', 
        name: 'Practitioner',
        component: Practitioner },
    { 
        path: '/', 
        redirect: '/Usecaseone' },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;