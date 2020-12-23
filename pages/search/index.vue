<template>
  <section class="section">
    <container><filter-applicabilities /></container>
  </section>
</template>

<script>
import Container from "@/components/base/container.vue";
import FilterApplicabilities from "@/components/filter/filter-applicabilities/filter-applicabilities.vue";
import { ApplicabilitiesFilterView } from "@/composition/views/search.ts";
export default {
  name: "page-search",
  components: { FilterApplicabilities, Container },
  setup() {
    return { ...ApplicabilitiesFilterView() };
  },
};
</script>

<style lang="sass">
@import "assets/sass/base/section"
</style>
