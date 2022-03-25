import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import Create from './pages/Create.vue'
import List from './pages/List.vue'
import Edit from './pages/Edit.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            breadcrumb: [
                { name: 'Home' }
            ]
        }
    },
    {
        name: 'Create',
        path: '/create',
        component: Create,
        meta: {
            breadcrumb: [
                { name: 'Home', link: '/' },
                { name: 'Create User' }
            ]
        }
    },
    {
        name: 'List',
        path: '/list',
        component: List,
        meta: {
            breadcrumb: [
                { name: 'Home', link: '/' },
                { name: 'Users List' }
            ]
        }
    },
    {
        name: 'Edit',
        path: '/list/edit/:id',
        component: Edit,
        meta: {
            breadcrumb: [
                { name: 'Home', link: '/' },
                { name: 'Users List', link: '/list/' },
                { name: 'Edit' },
            ]
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;