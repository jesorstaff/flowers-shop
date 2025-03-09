<script setup>
import { RouterLink } from 'vue-router'
import FlowersImages from '@/data/FlowersImages.js'
import CatalogData from '@/data/Catalog.js'
import Title from '@/components/Title.vue'
</script>

<template>
    <div class="container m-auto">
        <div class="grid grid-cols-[50%_50%] pt-18 pb-12">
            <div class="flex flex-col justify-around">
                <h1 class="text-6xl">
                    Flowers, 🌻<br />
                    what the world<br />needs
                </h1>
                <p class="text-main-gray text-lg">
                    Browse between hounders of flowers
                </p>
                <RouterLink
                    to="/shop"
                    class="w-fit bg-main-color text-white text-lg py-1.5 px-3 rounded-sm cursor-pointer"
                >
                    Browse
                </RouterLink>
            </div>
            <div>
                <div class="flex flex-wrap gap-5">
                    <img
                        v-for="(image, index) in FlowersImages"
                        :key="index"
                        :src="image"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
    <section class="mt-25">
        <div class="container m-auto">
            <Title>Best selers</Title>
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
    </section>
</template>
