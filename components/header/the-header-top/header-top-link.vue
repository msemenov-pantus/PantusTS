<template>
  <nuxt-link :to="link.to" class="link-header-top">{{ link.text }}</nuxt-link>
</template>

<script lang="ts">
import { PropType } from "vue";
import { interfaceLink } from "@/composition/header/array-link.ts";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "header-top-link",
  props: {
    link: {
      type: Object as () => PropType<interfaceLink>,
      request: true,
    },
  },
});
</script>
