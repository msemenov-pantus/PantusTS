<template>
  <li
    v-if="!element.selectCheck"
    class="filter-appicabilities-li"
    v-on="$listeners"
    @click="toggleLi(indexPanel)"
  >
    <template v-if="element.level !== 1">
      <font-awesome unicode="&#xf14a;" v-if="selectedLi" />
      <font-awesome unicode="&#xf096;" v-if="!selectedLi" />
    </template>
    {{ element.name }}
  </li>
</template>

<script lang="ts">
import { PropType } from "vue";
import { FilterApplicabiliriesLi } from "@/composition/search/filter-applicabilities/filter-applicabilities-li.ts";
import { TypeApplicabilitiesFilterVuex } from "~/store/applicabilities/applicabilities-type";
import FontAwesome from "~/components/base/font-awesome.vue";
export default {
  name: "filter-filter-appicabilities-li",
  components: { FontAwesome },
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
