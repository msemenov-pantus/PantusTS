<template>
  <form class="filter-applicabilities-form">
    <h3 @click="toggleClick" class="filter-applicabilities-title">
      Укажите применяемости
    </h3>
    <div v-if="toggle">123</div>
  </form>
</template>

<script lang="ts">
import { ToggleClick } from "~/composition/toggle/toggle-click.ts";
export default {
  name: "filter-applicabilities",
  setup() {
    return { ...ToggleClick() };
  },
};
</script>

<style lang="sass">
@import "assets/sass/filter-applicabilities/filter-applicabilities"
</style>
