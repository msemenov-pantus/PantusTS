<template>
  <div class="filter-applicabilities-panel">
    <FilterAppicabilitiesInput />
    <FilterAppicabilitiesInput />
    <FilterAppicabilitiesInput />
    <button @click.prevent="DeletePanel(index)" v-if="PanelAll.length > 1">Удалить</button>
  </div>
</template>

<script>
import FilterAppicabilitiesInput from "@/components/filter/filter-applicabilities/filter-appicabilities-input";
import { FilterApplicabiliriesPanel } from "@/composition/search/filter-applicabilities";
export default {
  name: "filter-appicabilities-panel",
  components: { FilterAppicabilitiesInput },
  props: {
    panel: {},
    index: {
      type: Number,
    },
  },
  setup() {
    return { ...FilterApplicabiliriesPanel() };
  },
};
</script>

<!--<style scoped></style>-->
