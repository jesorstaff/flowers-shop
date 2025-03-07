<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Catalog from '@/data/Catalog.js'

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
    <div v-if="product">
        Detail View {{ $route.params.slug }}
        <h1>{{ product.title }}</h1>
        <img :src="product.image" :alt="product.title" />
    </div>
</template>

<style scoped></style>
