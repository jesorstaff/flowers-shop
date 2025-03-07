<script setup>
import { RouterLink } from 'vue-router'
import CatalogData from '@/data/Catalog.js'
</script>

<template>
    <div class="container m-auto">
        <h1>Shop</h1>
        <div v-for="(element, index) in CatalogData" :key="index">
            <RouterLink :to="`/shop/${element.slug}`">{{
                element.title
            }}</RouterLink>
        </div>
    </div>
</template>

<style scoped></style>
