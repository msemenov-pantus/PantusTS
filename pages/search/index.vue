<template>
  <section class="section">
    <container><filter-applicabilities /></container>
  </section>
</template>

<script>
import Container from "@/components/base/container";
import FilterApplicabilities from "@/components/filter/filter-applicabilities/filter-applicabilities";
export default {
  name: "page-search",
  components: { FilterApplicabilities, Container },
};
</script>

<style lang="sass">
@import "assets/sass/base/section"
</style>
