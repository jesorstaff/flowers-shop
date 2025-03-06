<script setup>
import { RouterLink } from 'vue-router'
import CatalogData from '@/data/Catalog.js'
</script>

<template>
    <h1>Shop</h1>
    <div v-for="(element, index) in CatalogData" :key="index">
        <router-link
            :to="{ name: 'shop-detail', params: { slug: element.slug } }"
            >{{ element.title }}</router-link
        >
    </div>
</template>

<style scoped></style>
