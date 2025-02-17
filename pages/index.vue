<template>
  <div>
    <NuxtLayout name="main" class="__pt-16">
      <template #header> Some header template content. </template>

      <div class="text-h5 my-4">Категории</div>

      <v-row dense class="justify-center mb-4">

        <v-col v-for="r in categories" :key="r" class="pa-2" cols="12" lg="3" sm="6">
          <category_card :category="r" />
        </v-col>
      </v-row>

      <div class="text-h5 my-4">Топ нашей продукции</div>

      <v-row dense class="justify-center">
        <v-col v-for="r in top_products" :key="r.id" class="pa-2" cols="12" lg="6">
          <ProdCard :product="r" />
        </v-col>
      </v-row>

    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const basket_store = useBasketStore()

  //definePageMeta({
    //layout: false,
  //})

  const categories = ref([])  // категории продукции
  const top_products: any = ref([])  // список содержит топ продуктов

  fetch('https://fakestoreapi.com/products/categories').then(async req => {
    if (req.ok) {
      const res: never[] = await req.json()
      categories.value.push(...res)
    }
  })

  fetch('https://fakestoreapi.com/products?limit=9').then(async req => {
    if (req.ok) {
      const res = await req.json()
      top_products.value.push(...res.map((r: any) => {
        const { id, title, image, price } = r
        return { id, title, image, price }
      }))
    }
  })

</script>