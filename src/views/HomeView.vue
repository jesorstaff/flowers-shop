<script setup>
import { RouterLink } from 'vue-router'
import FlowersImages from '@/data/FlowersImages.js'
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
    <div class="container m-auto">
        <div class="text-center">Best sellers</div>
        <div></div>
    </div>
</template>
