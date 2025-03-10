<script setup>
import { RouterLink } from 'vue-router'
import CatalogData from '@/data/Catalog.js'
import CartIcon from '@/components/Header/icons/CartIcon.vue'
import DeliteIcon from '@/assets/icons/DeliteIcon.vue'
import useCart from '@/hooks/useCart'

const { addToCard, removeToCard, isInCart } = useCart()
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
                    <div
                        class="flex justify-between items-center mt-5 relative"
                    >
                        <p class="text-sm text-gray-500">
                            {{ element.price }}$
                        </p>
                        <button
                            v-if="isInCart(element)"
                            @click="(event) => removeToCard(event, element)"
                        >
                            <DeliteIcon />
                        </button>
                        <button
                            class="absolute right-0 z-10 text-main-color flex items-center gap-2 text-sm cursor-pointer disabled:opacity-50 disabled:cursor-default disabled:right-8"
                            @click="(event) => addToCard(event, element)"
                            :disabled="isInCart(element)"
                        >
                            <CartIcon class="w-5 h-5" />
                            {{
                                isInCart(element) ? 'В корзине' : 'Add to Cart'
                            }}
                        </button>
                    </div>
                </RouterLink>
            </template>
        </div>
    </div>
</template>

<style scoped></style>
