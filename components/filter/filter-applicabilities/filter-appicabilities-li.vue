<template>
  <li
    :class="{ 'filter-appicabilities-li-active': selectedLi }"
    class="filter-appicabilities-li"
    v-on="$listeners"
  >
    {{ element.name }}
  </li>
</template>

<script lang="ts">
import { FilterApplicabiliriesLi } from "@/composition/search/filter-applicabilities/filter-applicabilities-li";
import { ValidateInput } from "~/composition/_validate/validate-input";
export default {
  name: "filter-filter-appicabilities-li",
  props: {
    element: {
      type: Object,
    },
    selected: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    const filterApplicabiliriesLi = FilterApplicabiliriesLi(
      props.element,
      props.selected
    );
    // const emitApplicabiliriesLi = (event): void => {
    //   emit("emitApplicabiliriesLi", event);
    // };
    return { ...filterApplicabiliriesLi };
  },
};
</script>

<!--<style scoped></style>-->
