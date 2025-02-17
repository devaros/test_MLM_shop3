<template>
  <div>
    <NuxtLayout name="main" :header="category">
      <div class="text-h5 my-4">Категории</div>

      <v-row dense class="justify-center mb-4">
        <v-col v-for="r in categories" :key="r" class="pa-2" cols="12" lg="3" sm="6">
          <category_card :category="r" />
        </v-col>
      </v-row>

      <div class="text-h5 my-4">Продукция категоии: {{category}}</div>
      <v-row dense class="justify-center">
        <v-col v-for="r in products" :key="r.id" class="pa-2" cols="12" lg="6">

          <prod_card :product="r" />
        </v-col>
      </v-row>

    </NuxtLayout>
  </div>
</template>



<script setup lang="ts">
  const route = useRoute()
  const category = ref(route.params.category)

  const categories = ref([])  // категории продукции
  const products: any = ref([])  // список содержит продукцию по категории

  fetch('https://fakestoreapi.com/products/categories').then(async req => {
    if (req.ok) {
      const res: never[] = await req.json()
      categories.value.push(...res)
    }
  })

  if (category.value) fetch(`https://fakestoreapi.com/products/category/${category.value}`).then(async req => {
    if (req.ok) {
      const res = await req.json()
      products.value.push(...res.map((r: any) => {
        const { id, title, image, price } = r
        return { id, title, image, price }
      }))
    }
  })
</script>