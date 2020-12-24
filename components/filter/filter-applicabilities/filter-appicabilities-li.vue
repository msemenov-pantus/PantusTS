<template>
  <li
    :class="{ 'filter-appicabilities-li-active': selectedLi }"
    class="filter-appicabilities-li"
    v-on="$listeners"
    @click="toggleLi(indexPanel)"
  >
    {{ element.name }}
  </li>
</template>

<script lang="ts">
import { PropType } from "vue";
import { FilterApplicabiliriesLi } from "@/composition/search/filter-applicabilities/filter-applicabilities-li.ts";
import { TypeApplicabilitiesFilterVuex } from "~/store/applicabilities/applicabilities-type";
export default {
  name: "filter-filter-appicabilities-li",
  props: {
    element: {
      type: Object as () => PropType<TypeApplicabilitiesFilterVuex>,
    },
    selected: {
      type: Array,
    },
    indexPanel: {
      type: Number,
    },
  },
  setup(props: any) {
    const filterApplicabiliriesLi = FilterApplicabiliriesLi(
      props.element,
      props.selected
    );
    return { ...filterApplicabiliriesLi };
  },
};
</script>

<!--<style scoped></style>-->
