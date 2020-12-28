<template>
  <form
    class="filter-applicabilities-form"
    :class="{ 'filter-applicabilities-form-get': toggle }"
  >
    <h3 @click="toggleClick" class="filter-applicabilities-title">
      Укажите применяемости
    </h3>
    <div class="filter-applicabilities-wrapper-panel" v-show="toggle">
      <FilterAppicabilitiesPanel
        v-for="(data, index) in Panel"
        :key="data.id"
        :panel="data"
        :index="index"
      />
      <button @click.prevent="AddPanel">Добавить применяемость</button>
      <button @click.prevent="ResetPanel">Сбросить</button>
    </div>
  </form>
</template>

<script lang="ts">
import { ApplicabilitiesFilterForm } from "@/composition/views/search.ts";
import { FilterApplicabiliries } from "~/composition/search/filter-applicabilities/filter-applicabilities";
import { FilterApplicabiliriesButtonReset } from "~/composition/search/filter-applicabilities/filter-applicabilities-button-reset";
import { ToggleClick } from "@/composition/_toggle/toggle-click.ts";
import FilterAppicabilitiesPanel from "@/components/filter/filter-applicabilities/filter-appicabilities-panel.vue";
export default {
  name: "filter-applicabilities",
  components: { FilterAppicabilitiesPanel },
  setup() {
    return {
      ...ToggleClick(),
      ...ApplicabilitiesFilterForm(),
      ...FilterApplicabiliries(),
      ...FilterApplicabiliriesButtonReset(),
    };
  },
};
</script>

<style lang="sass">
@import "assets/sass/filter-applicabilities/filter-applicabilities"
</style>
