import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/pages/home.vue'
import About from '@/pages/about.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/hello',
        component: HelloWorld
    },
    {
        path: '/:pathMatch(.*)*',
        component: HelloWorld
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router