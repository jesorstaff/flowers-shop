<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import useCart from '@/hooks/useCart'
import Catalog from '@/data/Catalog.js'
import StarIcon from '@/assets/icons/StarIcon.vue'
import HeartIcon from '@/assets/icons/HeartIcon.vue'

const { addToCard, isInCart } = useCart()

const route = useRoute()
const router = useRouter()
const catalog = ref(Catalog)

const product = computed(() => {
    return catalog.value.find((item) => item.slug === route.params.slug)
})

onMounted(() => {
    if (!product.value) {
        router.push({ name: 'NotFound' })
    }
})
</script>
<template>
    <!-- {{ $route.params.slug }} -->
    <div v-if="product" class="container m-auto">
        <div class="bg-white rounded-lg my-10 p-10">
            <div class="grid grid-cols-[356px_auto] gap-10">
                <div>
                    <img
                        class="object-cover w-full h-full"
                        :src="product.image"
                        :alt="product.title"
                    />
                </div>
                <div class="flex flex-col justify-between">
                    <h1 class="text-2xl">{{ product.title }}</h1>
                    <p class="text-lg text-gray-500">
                        {{ product.description }}
                    </p>
                    <div>
                        <div class="flex items-center text-xl">
                            <StarIcon class="mr-2" /> {{ product.rating }}/5
                        </div>
                        <p class="text-gray-500">
                            ({{ product.ratingPeopleCount }} people opinion)
                        </p>
                    </div>
                    <div class="flex items-end justify-between">
                        <div class="text-lg">{{ product.price }}$ / each</div>
                        <div class="flex items-center">
                            <button
                                class="flex items-center bg-white border border-main-color text-main-color cursor-pointer rounded-sm text-lg py-1.5 px-3 mr-3 active:bg-main-color active:border-transparent active:text-white"
                            >
                                <HeartIcon class="mr-2" />
                                Add to favorite
                            </button>
                            <button
                                v-if="!isInCart(product)"
                                class="bg-main-color cursor-pointer rounded-sm text-white text-lg py-1.5 px-3 border border-transparent active:bg-white active:text-main-color active:border-main-color"
                                @click="(event) => addToCard(event, product)"
                            >
                                Add to cart
                            </button>
                            <RouterLink
                                v-if="isInCart(product)"
                                class="bg-main-color cursor-pointer rounded-sm text-white text-lg py-2.5 px-3"
                                to="/cart"
                            >
                                Go to cart
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
