<template>
  <section-popular :product="PopularVuex" />
</template>

<script lang="ts">
import { PopularView } from "~/composition/views/popular";
import SectionPopular from "~/components/views/section-popular.vue";

export default {
  name: "page-popular",
  components: { SectionPopular },
  setup() {
    return { ...PopularView() };
  },
};
</script>

<!--<style scoped></style>-->
