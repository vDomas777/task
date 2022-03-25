import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import Create from './pages/Create.vue'
import List from './pages/List.vue'
import Edit from './pages/Edit.vue'

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
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: Edit
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;