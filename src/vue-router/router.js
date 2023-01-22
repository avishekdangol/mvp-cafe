import { createWebHashHistory , createRouter } from "vue-router"
import Home from '../views/Home/Index.vue'
import Menu from'../views/Menu/Index.vue'
import Query from'../views/Query/Index.vue'
import PageNotFound from '../views/404.vue'
// import Contact from '../views/Contact/Index.vue'
import About from '../views/About/Index.vue'

//  routes for contents
const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/menus',
        component: Menu,
        name: 'menus'
    },
    {
        path: '/query',
        component: Query,
        name: 'query'
    },
    // {
    //     path: '/contact',
    //     component: Contact,
    //     name: 'contact'
    // },
    {
        path: '/about',
        component: About,
        name: 'about'
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to) {
        let el = 'body'
        if (to.hash) el = to.hash
        return {
            el,
            top: 0,
            left: 0,
        }
    }
});

export default router

