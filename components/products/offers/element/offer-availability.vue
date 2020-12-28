<template>
  <component class="offer-availability-wrapper" :is="component">
    <span
      class="offer-availability-quantity"
      v-if="linkProduct.productOffer[indexOffers].quantity > 0"
    >
      {{ linkProduct.productOffer[indexOffers].quantity }}
      {{ linkProduct.productCard.params.measure }}
    </span>
    <span
      v-else-if="linkProduct.productCard.brand.deliveryDelay != 0"
      class="offer-availability-order"
    >
      Под заказ:
      {{ linkProduct.productCard.brand.deliveryDelay }} дней
    </span>
    <span v-else class="offer-availability-order"> Под запрос </span>
  </component>
</template>

<script lang="ts">
import { PropType } from "vue";
import { TypeProductVuex } from "@/store/products/products-type.ts";

export default {
  name: "offer-availability",
  props: {
    component: {
      default: "span",
      type: String,
    },
    linkProduct: {
      request: true,
      type: Object as () => PropType<TypeProductVuex>,
    },
    indexOffers: {
      type: Number,
    },
  },
};
</script>
