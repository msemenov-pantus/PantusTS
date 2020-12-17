<template>
  <div class="header-dropdown" v-if="ToggleBody">
    <nuxt-link
      :key="data.id"
      v-for="data in array"
      :to="data.to"
      class="header-dropdown_link"
    >
      {{ data.text }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { ToggleBody } from "@/composition/toggle/toggle-body.ts";
export default {
  name: "header-dropdown",
  props: {
    target: {
      type: String,
      require: true,
    },
    array: {
      type: Array,
    },
  },
  setup(props: any) {
    return { ...ToggleBody(undefined, props.target) };
  },
};
</script>

<!--<style scoped></style>-->
