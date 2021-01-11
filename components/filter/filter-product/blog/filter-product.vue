<template>
  <div class="filter-product-wrapper">
    <filter-product-prices />
    <filter-product-brand />
    <filter-product-categories />
    <button @click="FilterSubmit()">
      Отправить
    </button>
  </div>
</template>

<script lang="ts">
import FilterProductPrices from "@/components/filter/filter-product/blog/filter-product-prices.vue";
import FilterProductBrand from "@/components/filter/filter-product/blog/filter-product-brand.vue";
import FilterProductCategories from "@/components/filter/filter-product/blog/filter-product-categories.vue";
import { FilterSubmit } from "~/composition/search/filter-submit/filter-submit";

export default {
  name: "filter-product",
  components: {
    FilterProductCategories,
    FilterProductBrand,
    FilterProductPrices,
  },
  setup() {
    return { ...FilterSubmit() };
  },
};
</script>
<style lang="sass">
@import "assets/sass/filter-product/filter-product"
@import "assets/sass/filter-product/filter-product-element.sass"
@import "assets/sass/filter-product/filter-product-children.sass"
</style>
