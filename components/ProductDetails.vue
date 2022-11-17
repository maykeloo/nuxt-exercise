<template>
  <div class="flex gap-10">
    <div class="bg-white p-4">
      <img :src="product.image" class="max-w-lg" alt="" />
    </div>
    <div class="flex flex-col">
      <h1 class="font-bold text-7xl">{{ product.title }}</h1>
      <p class="mt-6">{{ product.description }}</p>
      <p class="font-bold mt-4 text-4xl">${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from "~~/types/product.types";

defineProps<{
  product: Product;
}>();
</script>
