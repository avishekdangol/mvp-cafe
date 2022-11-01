import { createWebHistory , createRouter } from "vue-router"
import Home from '../views/Home/Index.vue'
import Menu from'../views/Menu/Index.vue'
// import Contact from '../views/Contact/Index.vue'
import PageNotFound from '../views/404.vue'
// import About from '../views/About/Index.vue'

//  routes for contents
const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/menu',
        component: Menu,
        name: 'menu'
    },
    // {
    //     path: '/contact',
    //     component: Contact,
    //     name: 'contact'
    // },
    // {
    //     path: '/about',
    //     component: About,
    //     name: 'about'
    // },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router

