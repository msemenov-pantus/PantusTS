<template>
  <div class="filter-product-wrapper">
    <filter-product-prices />
    <filter-product-brand />
    <filter-product-categories />
  </div>
</template>

<script>
import FilterProductPrices from "@/components/filter/filter-product/blog/filter-product-prices";
import FilterProductBrand from "@/components/filter/filter-product/blog/filter-product-brand";
import FilterProductCategories from "@/components/filter/filter-product/blog/filter-product-categories";
export default {
  name: "filter-product",
  components: {
    FilterProductCategories,
    FilterProductBrand,
    FilterProductPrices,
  },
};
</script>
<style lang="sass">
@import "assets/sass/filter-product/filter-product"
</style>
