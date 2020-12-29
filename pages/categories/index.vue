<template>
  <container>
    <section-categories :categories="CategoriesVuex" />
  </container>
</template>

<script lang="ts">
import Container from "@/components/base/container.vue";
import { CategoriesView } from "@/composition/views/categories.ts";
import SectionCategories from "~/components/views/section-categories.vue";
export default {
  name: "page-categories",
  components: { SectionCategories, Container },
  setup() {
    return { ...CategoriesView() };
  },
};
</script>

<!--<style lang="sass"></style>-->
