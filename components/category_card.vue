<template>
  <v-card class="category_card"  color="#f0f9f9" :to="{name:'products-category-category',params:{category}}">
    <div class="d-flex flex-no-wrap justify-space-between">

      <v-avatar v-if="img_path" class="ma-3" rounded="0" size="96">
        <v-img :src="img_path"></v-img>
      </v-avatar>

      <div class="text-end">
        <v-card-title class="text-h5 text-wrap">
          {{category}}
        </v-card-title>

      </div>
    </div>
  </v-card>
</template>


<script setup lang="ts">

  const categories_img: { [index: string]: any } = {
    "electronics": "electronics.png", "jewelery": "jewelery.png", "men's clothing": "men_s_clothing.png", "women's clothing": "women_s_clothing.png"
  }

  const props = defineProps({
    category: { type: String, required: true },
  });

  const { category } = toRefs(props)
  const img_path = ref('')

  function get_img_path(val: string | undefined) {
    if (!val) return ''
    img_path.value = categories_img[val] ? '/img/' + categories_img[val] : '/img/' + 'photo_no.svg'
  }

  get_img_path(category.value)
</script>