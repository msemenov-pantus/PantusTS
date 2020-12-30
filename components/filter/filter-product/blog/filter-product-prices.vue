<template>
  <div class="filter-prices-wrapper">
    <div class="filter-title">Цена, Р</div>
    <div class="filter-prices-value">от {{ MinValue }} до {{ MaxValue }}</div>
    <filter-range-prices />
  </div>
</template>

<script lang="ts">
import FilterRangePrices from "@/components/filter/filter-product/element/filter-range-prices.vue";
import { filterProductRange } from "@/composition/search/filter-product/filter-product-range.ts";
export default {
  name: "filter-product-prices",
  components: { FilterRangePrices },
  setup() {
    return { ...filterProductRange() };
  },
};
</script>
