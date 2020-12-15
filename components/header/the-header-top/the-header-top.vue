<template>
  <div class="wrapper-header-top">
    <container>
      <div class="section-header-top">
        <nav class="header-top-nav">
          <span class="link-header-top">О компании</span>
          <header-top-dropdown />
          <header-top-link
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
import { defineComponent } from "@nuxtjs/composition-api";
import { linksTop } from "@/composition/header/array-link.ts";
import Container from "@/components/base/container.vue";
import HeaderTopLink from "@/components/header/the-header-top/header-top-link.vue";
import HeaderTopDropdown from "~/components/header/the-header-top/header-top-dropdown.vue";
export default defineComponent({
  name: "the-header-top",
  components: { HeaderTopDropdown, HeaderTopLink, Container },
  setup() {
    return { linksTop };
  },
});
</script>

<style lang="sass">
@import "assets/sass/header/header-top.sass"
</style>
