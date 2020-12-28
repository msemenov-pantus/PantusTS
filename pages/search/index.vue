<template>
  <section class="section">
    <container>
      <filter-applicabilities />
      <div class="search-wrapper">
        <filter-product />
      </div>
    </container>
  </section>
</template>

<script>
import Container from "@/components/base/container.vue";
import FilterApplicabilities from "@/components/filter/filter-applicabilities/filter-applicabilities.vue";
import { ApplicabilitiesFilterView } from "@/composition/views/search.ts";
import FilterProduct from "@/components/filter/filter-product/blog/filter-product";
export default {
  name: "page-search",
  components: { FilterProduct, FilterApplicabilities, Container },
  setup() {
    return { ...ApplicabilitiesFilterView() };
  },
};
</script>

<style lang="sass">
@import "assets/sass/base/section"
@import "assets/sass/search/search"
</style>
