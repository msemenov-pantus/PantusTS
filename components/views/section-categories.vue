<template>
  <section class="section">
    <h1 class="name-catalog-title">Все категории</h1>
    <div class="catalog-row-categories">
      <div
        class="catalog-categories"
        v-for="dataset in categories"
        :key="dataset.id"
      >
        <nuxt-link :to="'/'" class="catalog-categories-link">
          {{ dataset.name }}
        </nuxt-link>
        <div
          class="catalog-categories-children-wrapper"
          v-if="dataset.children.length !== 0"
        >
          <nuxt-link
            class="catalog-categories-link-children"
            to=""
            :key="data.id"
            v-for="data in dataset.children"
          >
            {{ data.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { PropType } from "vue";
import { TypeCategoriesVuex } from "~/store/categories/categories-type";
export default {
  name: "section-categories",
  props: {
    categories: {
      type: Array as () => PropType<TypeCategoriesVuex>,
      request: true,
    },
  },
};
</script>

<style lang="sass">
@import "assets/sass/categories/view-categories"
@import "assets/sass/catalog/catalog-view"
@import "assets/sass/base/section"
</style>
