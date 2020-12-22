<template>
  <container>
    <section-applicabilities :applicabilities="ApplicabilitiesVuex" />
  </container>
</template>

<script lang="ts">
import Container from "@/components/base/container.vue";
import { ApplicabilitiesView } from "@/composition/views/applicabilities.ts";
import SectionApplicabilities from "~/components/views/section-applicabilities.vue";
export default {
  name: "page-applicabilities",
  components: { SectionApplicabilities, Container },
  setup() {
    return { ...ApplicabilitiesView() };
  },
};
</script>

<!--<style lang="sass"></style>-->
