<template>
  <nuxt-link :to="link.to">{{ link.text }}</nuxt-link>
</template>

<script lang="ts">
import { PropType } from "vue";
import { InterfaceLink } from "~/composition/header/array-link.ts";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "header-link",
  props: {
    link: {
      type: Object as () => PropType<InterfaceLink>,
      request: true,
    },
  },
});
</script>
