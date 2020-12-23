<template>
  <div class="filter-appicabilities-wrapper-input">
    <div class="filter-appicabilities-input" @click="ToggleBodyFunctionClick">
      Выбранные
    </div>
    <ul class="filter-appicabilities-ul" v-if="ToggleBody">
      <filter-filter-appicabilities-li />
      <filter-filter-appicabilities-li />
      <filter-filter-appicabilities-li />
      <filter-filter-appicabilities-li />
      <filter-filter-appicabilities-li />
    </ul>
  </div>
</template>

<script>
import FilterFilterAppicabilitiesLi from "@/components/filter/filter-applicabilities/filter-appicabilities-li";
import { ToggleBodyFalse } from "@/composition/toggle/toggle-body-false.ts";

export default {
  name: "filter-filter-appicabilities-input",
  components: { FilterFilterAppicabilitiesLi },
  setup() {
    return { ...ToggleBodyFalse(false) };
  },
};
</script>

<!--<style scoped></style>-->
