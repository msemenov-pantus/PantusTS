<template>
  <div class="wrapper-header-top">
    <container>
      <div class="section-header-top">
        <nav class="header-top-nav">
          <span class="link-header-top">О компании</span>
          <header-dropdown :array="linksTopDropdown" target="link-header-top" />
          <header-top-link
            class="link-header-top"
            v-for="data in linksTop"
            :link="data"
            :key="data.id"
          />
        </nav>
        <div class="header-top-blog_tlf">
          <a href="tel:88005558721" class="header-top-number_tlf">
            8 (800) 555 87 21
          </a>
          <span class="header-top-text_tlf">Звонок по РФ - бесплатный</span>
        </div>
      </div>
    </container>
  </div>
</template>

<script lang="ts">
import { linksTopDropdown } from "@/composition/header/array-link.ts";
import { defineComponent } from "@nuxtjs/composition-api";
import { linksTop } from "@/composition/header/array-link.ts";
import Container from "@/components/base/container.vue";
import HeaderTopLink from "~/components/header/header-link.vue";
import HeaderDropdown from "~/components/header/header-dropdown.vue";
export default defineComponent({
  name: "the-header-top",
  components: { HeaderDropdown, HeaderTopLink, Container },
  setup() {
    return { linksTop, linksTopDropdown };
  },
});
</script>

<style lang="sass">
@import "assets/sass/header/header-top.sass"
</style>
