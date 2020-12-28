<template>
  <div class="filter-product-wrapper">
    <filter-product-prices />
  </div>
</template>

<script>
import FilterProductPrices from "@/components/filter/filter-product/blog/filter-product-prices";
// import ProductViewBlog from "@/components/products/view/product-view-blog";
export default {
  name: "filter-product",
  components: { FilterProductPrices },
};
</script>
<style lang="sass">
@import "assets/sass/filter-product/filter-product"
</style>
