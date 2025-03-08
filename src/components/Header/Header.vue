<script setup>
import { RouterLink } from 'vue-router'
import Login from '@/components/Header/icons/LoginIcon.vue'
import Cart from '@/components/Header/icons/CartIcon.vue'
import Icon from '@/components/Header/Icon.vue'

const menuList = [
    {
        name: 'Home',
        to: '/',
    },
    {
        name: 'Shop',
        to: '/shop',
    },
    {
        name: 'About',
        to: '/about',
    },
]
</script>

<template>
    <header class="py-8 bg-white">
        <div class="container m-auto">
            <div class="grid grid-cols-[200px_1fr_200px] items-center">
                <RouterLink to="/" class="text-3xl">
                    <span class="text-main-color">Flower</span> Shop
                </RouterLink>
                <nav class="flex gap-5 justify-center items-center">
                    <RouterLink
                        v-for="menu in menuList"
                        :key="menu.name"
                        :to="menu.to"
                        class="text-xl hover:text-main-color"
                        exact-active-class="text-main-color"
                        >{{ menu.name }}
                    </RouterLink>
                </nav>
                <div class="flex items-center justify-end">
                    <Icon #icon>
                        <Login />
                    </Icon>
                    <Icon #icon>
                        <Cart />
                    </Icon>
                </div>
            </div>
        </div>
    </header>
</template>
