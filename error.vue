<template>
  <div
    class="mt-7 max-w-sm mx-auto text-center card h-80 flex flex-col justify-center gap-6"
  >
    <p class="font-bold text-6xl">{{ error.statusCode }}</p>
    <p class="text-4xl">Opps...</p>
    <p>{{ error.message }}</p>
    <button class="btn my-7" @click="handleClearError">Go home...</button>
  </div>
</template>

<script setup lang="ts">
import { PageError } from "@/types/error.types";
defineProps<{
  error: PageError;
}>();

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped lang="scss"></style>
