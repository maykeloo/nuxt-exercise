<template>
  <ProductDetails :product="product" />
</template>

<script setup lang="ts">
import { Product } from "~/types/product.types";
definePageMeta({
  layout: "products",
});
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;
// FETCH THE PRODUCTS
const { data: product, error } = await useFetch<Product>(uri, { key: id as string });

//ERROR CREATE
if(!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found.', fatal: true });
}
</script>
