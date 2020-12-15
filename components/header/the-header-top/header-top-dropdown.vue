<template>
  <div class="header-top-dropdown" v-if="ToggleBody">
    <nuxt-link
      :key="data.id"
      v-for="data in linksTopDropdown"
      :to="data.to"
      class="header-top-dropdown_link"
    >
      {{ data.text }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { linksTopDropdown } from "@/composition/header/array-link.ts";
import { ToggleBody } from "@/composition/toggle/toggle-body.ts";

export default {
  name: "header-top-dropdown",
  setup() {
    return { linksTopDropdown, ...ToggleBody(undefined, "link-header-top") };
  },
};
</script>

<!--<style scoped></style>-->
