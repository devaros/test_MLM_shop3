<template>
  <div>
    <NuxtLayout name="main" header="Карточка товара">
      <ProdCard v-if="product" :product="product" />
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
  const route = useRoute()
  const id = ref(route.params.id) 
  const product = ref(null)

  fetch(`https://fakestoreapi.com/products/${id.value}`).then(async req => {
      if (req.ok) {
        const res = await req.json()
        product.value = res
      }
  })
</script>