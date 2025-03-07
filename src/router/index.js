import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ShopView from '@/views/ShopView.vue'
import CartView from '@/views/CartView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DetailView from '@/views/DetailView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: HomeView,
                },
                {
                    path: '/shop',
                    name: 'shop',
                    component: ShopView,
                },
                {
                    path: '/shop/:slug',
                    name: 'shop-detail',
                    component: DetailView,
                },
                {
                    path: '/about',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import('../views/AboutView.vue'),
                },
                {
                    path: '/cart',
                    name: 'cart',
                    component: CartView,
                },
                {
                    path: '/login',
                    name: 'login',
                    component: LoginView,
                },
                {
                    path: '/register',
                    name: 'register',
                    component: RegisterView,
                },
                {
                    path: '/:pathMatch(.*)*',
                    name: 'NotFound',
                    component: NotFound,
                },
            ],
        },
    ],
})

export default router
