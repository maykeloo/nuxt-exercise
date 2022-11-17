<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 items-center flex justify-between">
      <NuxtLink to="/">Nuxt Dojo</NuxtLink>
      <ul class="flex gap-4">
        <li class="flex items-center"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="flex items-center"><NuxtLink to="/about">About</NuxtLink></li>
        <li class="btn btn-p items-center"><NuxtLink to="/products" >Merch</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
