<template>
  <div class="filter-applicabilities-panel">
    <FilterAppicabilitiesInput />
    <FilterAppicabilitiesInput />
    <FilterAppicabilitiesInput />
  </div>
</template>

<script>
import FilterAppicabilitiesInput from "@/components/filter/filter-applicabilities/filter-appicabilities-input";
export default {
  name: "filter-appicabilities-panel",
  components: { FilterAppicabilitiesInput },
};
</script>

<!--<style scoped></style>-->
