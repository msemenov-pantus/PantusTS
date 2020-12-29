<template>
  <div class="filter-product-prices-wrapper">
    <div class="filter-product-prices-text">Цена, Р</div>
    <div class="filter-product-prices-value">
      от {{ MinValue }} до {{ MaxValue }}
    </div>
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
