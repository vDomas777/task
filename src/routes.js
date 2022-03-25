import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import Create from './pages/Create.vue'
import List from './pages/List.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Create',
        path: '/create',
        component: Create
    },
    {
        name: 'List',
        path: '/list',
        component: List
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;