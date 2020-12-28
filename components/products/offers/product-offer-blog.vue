<template>
  <div class="offer-blog-wrapper">
    <div class="offer-blog-row">
      <b class="offer-blog-price-text">Цена</b>
      <offer-availability :index-offers="0" :link-product="product" />
    </div>
    <div class="offer-blog-row">
      <b class="offer-blog-price-value">
        {{ product.productOffer[indexOffer].prices }} р
      </b>
      <product-button-buy />
    </div>
  </div>
</template>

<script lang="ts">
import { TypeProductVuex } from "@/store/products/products-type";
import { PropType } from "vue";
import ProductButtonBuy from "~/components/products/element/product-button-buy.vue";
import OfferAvailability from "~/components/products/offers/element/offer-availability.vue";

export default {
  name: "product-offer-blog",
  components: { OfferAvailability, ProductButtonBuy },
  props: {
    product: {
      type: Object as () => PropType<TypeProductVuex>,
    },
    indexOffer: {
      type: Number,
    },
  },
};
</script>
