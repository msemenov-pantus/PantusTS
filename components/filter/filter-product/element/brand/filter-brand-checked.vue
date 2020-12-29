<template>
  <div class="filter-product-checked-wrapper" @click="ClickBrandChecked">
    <font-awesome unicode="&#xf096;" v-if="Checked === false" />
    <font-awesome unicode="&#xf14a;" v-if="Checked === true" />
    <!--    <font-awesome unicode="&#xf146;" />-->
    <span class="filter-product-checked">{{ brand.name }}</span>
  </div>
</template>

<script lang="ts">
import FontAwesome from "~/components/base/font-awesome.vue";
import { PropType } from "vue";
import { TypeBrandVuex } from "~/store/brands/brands-type.ts";
import { FilterBrandChecked } from "~/composition/search/filter-product/filter-brand-checked.ts";
export default {
  name: "filter-brand-checked",
  components: { FontAwesome },
  props: {
    brand: {
      type: Object as () => PropType<TypeBrandVuex>,
    },
  },
  setup(props:any) {
    return { ...FilterBrandChecked(props.brand.id) };
  },
};
</script>
