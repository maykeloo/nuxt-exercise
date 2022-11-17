<template>
  <div class="grid grid-cols-4 gap-5">
    <template v-for="product in products">
      <ProductCard :product="product" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { Product } from "~/types/product.types";

definePageMeta({
  layout: "products",
});

//fetch the products
const { data: products } = await useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);
</script>
