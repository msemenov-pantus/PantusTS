<template>
  <div class="filter-applicabilities-panel">
    <FilterAppicabilitiesInput
      :dataset="ApplicabilitiesVuex"
      :selected="panel.selectedMarka"
      :index-panel="index"
    />
    <FilterAppicabilitiesInput
      :dataset="panel.dataModel"
      :selected="panel.selectedModel"
      :index-panel="index"
    />
    <FilterAppicabilitiesInput
      :dataset="panel.dataGenerations"
      :selected="panel.selectedGenerations"
      :index-panel="index"
    />
    <button @click.prevent="DeletePanel(index)" v-if="PanelAll.length > 1">
      Удалить
    </button>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { TypeFilterApplicabilities } from "~/store/filter/applicabilities/filter-applicabilities-type.ts";
import FilterAppicabilitiesInput from "@/components/filter/filter-applicabilities/filter-appicabilities-input.vue";
import { FilterApplicabiliriesPanel } from "~/composition/search/filter-applicabilities/filter-applicabilities.ts";
export default {
  name: "filter-appicabilities-panel",
  components: { FilterAppicabilitiesInput },
  props: {
    panel: {
      type: Object as () => PropType<TypeFilterApplicabilities>,
    },
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
