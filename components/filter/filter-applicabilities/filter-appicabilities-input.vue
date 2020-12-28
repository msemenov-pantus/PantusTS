<template>
  <div class="filter-appicabilities-wrapper-input">
    <div class="filter-appicabilities-input" @click="ToggleBodyFunctionClick">
      <template v-if="dataset.length > 0 && selected.length > 0">
        <span v-for="item in SelectedNamePanel" :key="item.id">
          {{ item }}
        </span>
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
        @click="ApplicabilitiesTopUl(li.level)"
        :index-panel="indexPanel"
        v-for="li in dataset"
        :key="li.id"
        :element="li"
        :selected="selected"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import FilterFilterAppicabilitiesLi from "@/components/filter/filter-applicabilities/filter-appicabilities-li.vue";
import { ToggleBodyFalse } from "@/composition/_toggle/toggle-body-false.ts";
import { TypeApplicabilitiesFilterVuex } from "@/store/applicabilities/applicabilities-type.ts";
import { FilterApplicabiliriesInput } from "~/composition/search/filter-applicabilities/filter-applicabilities-input";

export default {
  name: "filter-appicabilities-input",
  components: { FilterFilterAppicabilitiesLi },
  props: {
    selected: {
      type: Array,
    },
    dataset: {
      type: Array as () => PropType<TypeApplicabilitiesFilterVuex>,
    },
    indexPanel: {
      type: Number,
    },
  },
  setup(props: any) {
    const toggleBody = ToggleBodyFalse(false);

    return {
      ...toggleBody,
      ...FilterApplicabiliriesInput(
        props,
        toggleBody.ToggleBodyFunctionSelectClick
      ),
    };
  },
};
</script>

<!--<style scoped></style>-->
