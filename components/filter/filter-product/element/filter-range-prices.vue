<template>
  <div class="custom-range-wrapper">
    <input value="0" type="range" class="custom-range" />
    <input value="60000" type="range" class="custom-range" />
  </div>
</template>

<script>
export default {
  name: "filter-range-prices",
};
</script>
<style lang="sass">
@import "/assets/sass/base/range"
</style>
