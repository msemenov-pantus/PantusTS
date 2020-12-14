<template>
  <div class="wrapper-header-top">
    <container>
      <div class="section-header-top">
        <nav class="header-top-nav">
          <nuxt-link :to="'/'" class="link-header-top">О компании</nuxt-link>
          <header-top-link v-for="data in links" :link="data" :key="data.id" />
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
import { links } from "@/composition/header/array-link.ts";
import Container from "@/components/base/container.vue";
import HeaderTopLink from "@/components/header/the-header-top/header-top-link.vue";
export default defineComponent({
  name: "the-header-top",
  components: { HeaderTopLink, Container },
  setup() {
    return { links };
  },
});
</script>

<!--<style scoped>-->

<!--</style>-->
