<template>
  <div class="filter-product-wrapper">
    <filter-product-prices />
    <filter-product-brand />
  </div>
</template>

<script>
import FilterProductPrices from "@/components/filter/filter-product/blog/filter-product-prices";
import FilterProductBrand from "@/components/filter/filter-product/blog/filter-product-brand";
// import ProductViewBlog from "@/components/products/view/product-view-blog";
export default {
  name: "filter-product",
  components: { FilterProductBrand, FilterProductPrices },
};
</script>
<style lang="sass">
@import "assets/sass/filter-product/filter-product"
</style>
