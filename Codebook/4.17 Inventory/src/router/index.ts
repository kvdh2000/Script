import { createRouter, createWebHistory } from 'vue-router'
import inventoryRoutes from '../domains/inventory/routes'

const router = createRouter({
    history: createWebHistory(),
    routes: [...inventoryRoutes],
})

export default router
