<template>
  <div class="filter-catalog-wrapper">
    <div class="filter-title">Бренд</div>
    <filter-brand-search />
    <div class="filter-overflow">
      <filter-brand-checked
        :brand="brand"
        v-for="brand in BrandVuex"
        :key="brand.id"
      />
    </div>
  </div>
</template>

<script>
import FilterBrandSearch from "@/components/filter/filter-product/element/brand/filter-brand-search";
import FilterBrandChecked from "@/components/filter/filter-product/element/brand/filter-brand-checked";
import { ApplicabilitiesFilterForm } from "@/composition/views/search";
export default {
  name: "filter-product-brand",
  components: { FilterBrandChecked, FilterBrandSearch },
  setup() {
    return { ...ApplicabilitiesFilterForm() };
  },
};
</script>

<!--<style scoped>-->

<!--</style>-->
