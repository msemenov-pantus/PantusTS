<template>
  <div class="custom-range-wrapper">
    <input
      @input="SetMinValue($event.target.value)"
      :value="MinValue"
      max="60000"
      type="range"
      class="custom-range"
      step="1"
    />
    <input
      step="1"
      @input="SetMaxValue($event.target.value)"
      :value="MaxValue"
      max="60000"
      type="range"
      class="custom-range"
    />
  </div>
</template>

<script lang="ts">
import { filterProductRange } from "@/composition/search/filter-product/filter-product-range";

export default {
  name: "filter-range-prices",
  setup() {
    return { ...filterProductRange() };
  },
};
</script>
<style lang="sass">
@import "/assets/sass/base/range"
</style>
