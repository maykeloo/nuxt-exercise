<template>
  <div class="flex flex-col min-h-screen">
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/">Nuxt Dojo Merch</NuxtLink>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot></slot>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>
