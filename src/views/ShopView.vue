<script setup>
import { RouterLink } from 'vue-router'
import CatalogData from '@/data/Catalog.js'
import CartIcon from '@/components/Header/icons/CartIcon.vue'
</script>

<template>
    <div class="container m-auto">
        <div class="grid grid-cols-4 gap-4 my-10">
            <template v-for="(element, index) in CatalogData" :key="index">
                <RouterLink
                    :to="`/shop/${element.slug}`"
                    class="block bg-white p-4 rounded-lg"
                >
                    <img
                        :src="element.image"
                        :alt="element.title"
                        class="w-full object-cover"
                    />
                    <p class="mt-3">{{ element.title }}</p>
                    <div class="flex justify-between items-center mt-5">
                        <p class="text-sm text-gray-500">
                            {{ element.price }}$
                        </p>
                        <button
                            class="text-main-color flex items-center gap-2 text-sm cursor-pointer"
                        >
                            <CartIcon class="w-5 h-5" />
                            Add to Cart
                        </button>
                    </div>
                </RouterLink>
            </template>
        </div>
    </div>
</template>

<style scoped></style>
