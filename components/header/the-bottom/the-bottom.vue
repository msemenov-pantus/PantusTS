<template>
  <div class="wrapper-header-bottom">
    <container>
      <div class="section-header-bottom">
        <div class="link-header-bottom dropdown-click">Все запчасти</div>
        <header-dropdown
          class="header-dropdown-bottom"
          :array="linksBottomDropdownIndex"
          target="link-header-bottom dropdown-click"
        />
        <header-link
          class="link-header-bottom"
          v-for="data in linksBottom"
          :key="data.id"
          :link="data"
        />
      </div>
    </container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import HeaderLink from "@/components/header/header-link.vue";
import { linksBottom } from "@/composition/header/array-link.ts";
import Container from "@/components/base/container.vue";
// import FontAwesome from "~/components/base/font-awesome.vue";
import HeaderDropdown from "~/components/header/header-dropdown.vue";
import { linksBottomDropdownIndex } from "@/composition/header/array-link.ts";
export default defineComponent({
  name: "the-bottom",
  components: { HeaderDropdown, Container, HeaderLink },
  setup() {
    return { linksBottom, linksBottomDropdownIndex };
  },
});
</script>
