<template>
  <div>
    <NuxtLayout name="main">
      <div class="text-center">
        <v-chip>
          Поздравляем с покупкой 👍👍👍
        </v-chip>

        <div>
          <v-btn class="my-4" variant="tonal" @click="basket_store.clear()">
            Очистить корзину
          </v-btn>
        </div>

        <div>
          <v-btn variant="tonal" to="/">
            На главную
          </v-btn>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  const basket_store = useBasketStore()
</script>