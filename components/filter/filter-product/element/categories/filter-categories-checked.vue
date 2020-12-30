<template>
  <div class="filter-checked-wrapper">
    <div class="filter-input-wrapper">
      <div class="filter-input">
        <font-awesome class="" unicode="&#xf096;" />
        <!--    <font-awesome unicode="&#xf14a;" v-if="Checked === true" />-->
        <!--    <font-awesome unicode="&#xf146;" />-->
        <span class="filter-input-name">{{ categories.name }}</span>
      </div>
      <font-awesome
        v-if="categories.children.length !== 0"
        @click="toggleClick"
        class="filter-icons-dropdown"
        unicode="&#xf078;"
      />
    </div>
    <div
      class="catalog-categories-children-wrapper"
      v-if="categories.children.length !== 0 && toggle === true"
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
import { ToggleClick } from "~/composition/_toggle/toggle-click";
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
  setup() {
    return { ...ToggleClick() };
  },
};
</script>
