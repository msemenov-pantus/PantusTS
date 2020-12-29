<template>
  <div class="filter-product-catalog-wrapper">
    <div class="filter-product-title">Категории</div>
    <filter-categories-search />
    <div class="filter-product-overflow">
      <filter-categories-checked
        v-for="categories in CategoriesFilterVuex"
        :categories="categories"
        :key="categories.id"
      />
    </div>
  </div>
</template>

<script>
import FilterCategoriesSearch from "@/components/filter/filter-product/element/categories/filter-categories-search";
import FilterCategoriesChecked from "@/components/filter/filter-product/element/categories/filter-categories-checked";
import { ApplicabilitiesFilterForm } from "@/composition/views/search";
export default {
  name: "filter-product-categories",
  components: { FilterCategoriesSearch, FilterCategoriesChecked },
  setup() {
    return { ...ApplicabilitiesFilterForm() };
  },
};
</script>

<!--<style scoped>-->

<!--</style>-->
