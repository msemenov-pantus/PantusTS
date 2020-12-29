<template>
  <div class="filter-product-checked-wrapper">
    <div class="filter-product-checked-name">
      <div>
        <font-awesome unicode="&#xf096;" />
        <!--    <font-awesome unicode="&#xf14a;" v-if="Checked === true" />-->
        <!--    <font-awesome unicode="&#xf146;" />-->
        <span class="filter-product-checked">{{ categories.name }}</span>
      </div>
      <font-awesome unicode="&#xf078;" />
    </div>
    <div
      class="catalog-categories-children-wrapper"
      v-if="categories.children.length !== 0"
    >
      <filter-categories-checked
        :key="categoriesElem.id"
        v-for="categoriesElem in categories.children"
        :categories="categoriesElem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import FontAwesome from "~/components/base/font-awesome.vue";
import { PropType } from "vue";
import { TypeCategoriesFilterVuex } from "~/store/categories/categories-type.ts";

export default {
  name: "filter-categories-checked",
  components: { FontAwesome },
  props: {
    categories: {
      type: Object as () => PropType<TypeCategoriesFilterVuex>,
    },
  },
};
</script>
