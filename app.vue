<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>


<script setup lang="ts">

const basket_store =  useBasketStore()

onMounted(async () => {
  basket_store.load()

})
</script>

