<template>
  <div>
    <NuxtLayout name="main" header="Корзина">

      <v-list>
        <v-list-subheader class="text-h5 bg-secondary">Ваша корзина покупок</v-list-subheader>

        <v-list-item color="primary" v-if="!basket_store.basket.length">
           корзина покупок пуста
        </v-list-item>

        <v-list-item v-for="(r, i) in basket_store.basket" :key="r.id" :value="r.title" color="primary"
          _variant="plain">
          <template v-slot:prepend>
            <div class="px-4">#{{i}}</div>
          </template>
          <v-list-item-title class="text-wrap"> {{r.title}}
          </v-list-item-title>
          <template v-slot:append>
            {{r.price}}
            <v-btn color="grey-lighten-1" icon="mdi-close-circle-outline" variant="text" title="Удалить"
              @click="basket_store.delete(r.id)"></v-btn>
          </template>
        </v-list-item>

        <v-list-item class="bg-secondary" _value="r.title" color="primary" _variant="plain">
          <v-list-item-title class="text-wrap text-center"> Итого товаров на сумму
          </v-list-item-title>
          <template v-slot:append>
            {{total}}
          </template>

        </v-list-item>


        <v-list-item>

          <template v-slot:append>
            <v-list-item-action>
              <v-btn color="primary" variant="tonal" to='/congratulation'
                _click="basket_store.delete(r.id)">Оформить</v-btn>
            </v-list-item-action>
          </template>

        </v-list-item>

      </v-list>

    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
  const basket_store = useBasketStore()

  const total = computed(() => {
    let acc = 0
    acc = basket_store.basket.reduce((acc, r) => acc += r.price, 0)
    return Math.round(acc * 1000) / 1000
  })
</script>


<style scoped lang="scss">
  .v-list {
    max-width: 800px;
  }
</style>