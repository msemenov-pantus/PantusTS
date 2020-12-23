<template>
  <div class="filter-appicabilities-wrapper-input">
    <div class="filter-appicabilities-input" @click="ToggleBodyFunctionClick">
      <template v-if="dataset.length > 0 && selected.length > 0">
        {{ SelectedNamePanel }}
      </template>
      <template v-else-if="dataset.length === 0">
        Нету применяемостей
      </template>
    </div>
    <ul
      class="filter-appicabilities-ul"
      v-if="ToggleBody && dataset.length !== 0"
    >
      <filter-filter-appicabilities-li
        @click="ApplicabilitiesTopUl(level)"
        v-for="li in dataset"
        :key="li.id"
        :element="li"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import FilterFilterAppicabilitiesLi from "@/components/filter/filter-applicabilities/filter-appicabilities-li.vue";
import { ToggleBodyFalse } from "@/composition/toggle/toggle-body-false.ts";
import { TypeApplicabilitiesFilterVuex } from "@/store/applicabilities/applicabilities-type.ts";
import { FilterApplicabiliriesInput } from "@/composition/search/filter-applicabilities-input";

export default {
  name: "filter-filter-appicabilities-input",
  components: { FilterFilterAppicabilitiesLi },
  props: {
    selected: {
      type: Array,
    },
    dataset: {
      type: Array as () => PropType<TypeApplicabilitiesFilterVuex>,
    },
    level: {
      type: Number,
    },
  },
  setup(props: any) {
    const toggleBody = ToggleBodyFalse(false);
    const filterApplicabiliriesInput = FilterApplicabiliriesInput(
      props.selected,
      props.dataset,
      toggleBody.ToggleBodyFunctionSelectClick
    );

    return {
      ...toggleBody,
      ...filterApplicabiliriesInput,
    };
  },
};
</script>

<!--<style scoped></style>-->
