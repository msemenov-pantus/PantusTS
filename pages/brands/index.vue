<template>
  <container>
    <section-brand :brand="BrandsVuex" />
  </container>
</template>

<script lang="ts">
import Container from "@/components/base/container.vue";
import { BrandsView } from "@/composition/views/brands.ts";
import SectionBrand from "~/components/views/section-brand.vue";
export default {
  name: "page-brands",
  components: { SectionBrand, Container },
  setup() {
    return { ...BrandsView() };
  },
};
</script>

<!--<style lang="sass"></style>-->
