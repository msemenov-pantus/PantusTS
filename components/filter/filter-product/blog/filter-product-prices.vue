<template>
  <div class="filter-product-prices-wrapper">
    <div class="filter-product-prices-text">Цена, Р</div>
    <div class="filter-product-prices-value">от 0 до 60000</div>
    <filter-range-prices />
  </div>
</template>

<script lang="ts">
import FilterRangePrices from "~/components/filter/filter-product/element/filter-range-prices.vue";
export default {
  name: "filter-product-prices",
  components: { FilterRangePrices },
};
</script>
