<script setup>
import useCart from '@/hooks/useCart'
import DeliteIcon from '@/assets/icons/DeliteIcon.vue'
const { cart, removeToCard } = useCart()
</script>

<template>
    <div class="container m-auto">
        <div
            v-if="cart.length > 0"
            class="grid grid-cols-[70%_auto] gap-5 my-10"
        >
            <div class="bg-white rounded-lg p-10">
                <p class="text-xl">Your Cart</p>
                <div class="mt-10">
                    <div
                        v-for="item in cart"
                        :key="item.id"
                        class="grid grid-cols-[145px_auto_100px] gap-7 mb-8 last:mb-0"
                    >
                        <div>
                            <img :src="item.image" :alt="item.title" />
                        </div>
                        <div class="flex flex-col justify-between">
                            <div>
                                <div class="text-xl">{{ item.title }}</div>
                                <div>sun lover flower</div>
                            </div>
                            <div>
                                <div>unic pric {{ item.price }}</div>
                                <div>- 1 +</div>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between items-end">
                            <DeliteIcon
                                class="cursor-pointer"
                                @click="(event) => removeToCard(event, item)"
                            />
                            <div>Total: {{ item.price }}$</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="bg-white rounded-lg p-10">
                    <p class="text-xl">
                        Total {{ cart.length }} Items:
                        <span class="font-bold">62$</span>
                    </p>
                    <button
                        class="bg-main-color cursor-pointer mt-5 w-full rounded-sm text-white text-lg py-1.5 px-3"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="my-10 bg-white rounded-lg p-10 h-80">Cart is empty</div>
        </div>
    </div>
</template>

<style scoped></style>
