import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

import HelloWorld from '@/components/HelloWorld.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HelloWorld
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