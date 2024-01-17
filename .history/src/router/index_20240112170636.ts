import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/pages/home.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: Home
    },
    {
        path: '/hello',
        component: HelloWorld
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router