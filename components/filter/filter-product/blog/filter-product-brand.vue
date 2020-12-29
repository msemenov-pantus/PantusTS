<template>
  <div class="filter-product-brand-wrapper">
    <div class="filter-product-title">Бренд</div>
    <filter-brand-search />
    <div class="filter-product-overflow">
      <filter-brand-checked />
    </div>
  </div>
</template>

<script>
import FilterBrandSearch from "@/components/filter/filter-product/element/filter-brand-search";
import FilterBrandChecked from "@/components/filter/filter-product/element/filter-brand-checked";
export default {
  name: "filter-product-brand",
  components: {FilterBrandChecked, FilterBrandSearch },
};
</script>

<!--<style scoped>-->

<!--</style>-->
