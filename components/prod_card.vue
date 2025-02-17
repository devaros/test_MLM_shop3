<template>
  <v-card class="prod_card" color="#196b87" :to="{name:'products-id',params:{id:product.id}}">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5 text-wrap">
          {{product.title}}
        </v-card-title>

        <v-card-subtitle class="text-h5 text-wrap" v-if="product.description">Описание
          {{product.description}}</v-card-subtitle>
        <v-card-title class="text-h5 text-price">Цена {{product.price}} руб</v-card-title>

        <v-card-actions>
          <v-btn v-if="in_basket" @click.prevent="basket_store.delete(product.id)"
            _disabled="basket_store.ids.includes(product.id)" __disabled="in_basket" class="ms-2 bg-warning"
            size="large" variant="tonal">
            <v-icon size="36px" icon="mdi-close-circle-outline" start></v-icon>
            В корзине
          </v-btn>
          <v-btn v-else @click.prevent=" toBasket(product)" _disabled="basket_store.ids.includes(product.id)"
            :disabled="in_basket" class="ms-2" size="large" variant="tonal">
            <v-icon size="36px" icon="mdi-basket-fill" start></v-icon>
            купить
          </v-btn>
        </v-card-actions>
      </div>

      <v-avatar class="ma-3" rounded="0" size="156">
        <v-img :src="product.image"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>


<script setup lang="ts">
  interface IProduct {
    id: number;
    title: string;
    description?: string;
    image?: string;
    price: number;
  }

  const props = defineProps({
    product: { type: Object as PropType<IProduct>, required: true },
  });

  const { product } = toRefs(props);
   const basket_store = useBasketStore()
  const in_basket = computed(() => { return basket_store.ids.includes(product.value.id) })

  function toBasket(pl: IBasketObject) {
    basket_store.update(pl)
  }
</script>