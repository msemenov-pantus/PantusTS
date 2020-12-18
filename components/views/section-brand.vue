<template>
  <section class="section">
    <h1 class="name-catalog-title">Все бренды автозапчастей</h1>
    <div class="catalog-brand-row">
      <div class="catalog-brand" v-for="dataset in brand" :key="dataset.id">
        <h3 class="catalog-brand-title">{{ dataset.name }}</h3>
        <nuxt-link to="" class="catalog-link"> Перейти к товарам</nuxt-link>
        <nuxt-link to="" class="catalog-link"> О брэнде</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { PropType } from "vue";
import { TypeBrandVuex } from "@/store/brands/type";
export default {
  name: "section-brand",
  props: {
    brand: {
      type: Array as () => PropType<TypeBrandVuex>,
      request: true,
    },
  },
};
</script>

<style lang="sass">
@import "assets/sass/brands/view-brands"
@import "assets/sass/base/section"
</style>
