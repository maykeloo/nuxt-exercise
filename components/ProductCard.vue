<template>
  <NuxtLink
    :to="`/products/${product.id}`"
    :key="product.id"
    class="p-4 bg-white flex flex-col"
  >
    <img :src="product.image" alt="" class="h-full object-contain max-h-48" />
    <span class="mt-4">{{ product.title }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Product } from "~~/types/product.types";

defineProps<{
  product: Product;
}>();
</script>
