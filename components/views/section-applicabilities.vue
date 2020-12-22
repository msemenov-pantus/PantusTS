<template>
  <section class="section">
    <h1 class="name-catalog-title">Применяемости</h1>
    <div class="catalog-row">
      <div
        class="catalog-applicabilities"
        v-for="dataset in applicabilities"
        :key="dataset.id"
      >
        <h3>
          <nuxt-link class="catalog-applicabilities-link" to="/">
            {{ dataset.name }}
          </nuxt-link>
        </h3>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { PropType } from "vue";
import { TypeApplicabilitiesVuex } from "@/store/applicabilities/applicabilities-type.ts";
export default {
  name: "section-applicabilities",
  props: {
    applicabilities: {
      type: Array as () => PropType<TypeApplicabilitiesVuex>,
      request: true,
    },
  },
};
</script>

<style lang="sass">
@import "assets/sass/catalog/catalog-view"
@import "assets/sass/applicabilities/view-applicabilities"
@import "assets/sass/base/section"
</style>
