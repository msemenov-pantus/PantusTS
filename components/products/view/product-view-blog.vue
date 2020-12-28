<template>
  <div class="product-view-blog">
    <product-blog
      :key="elem.id"
      v-for="elem in product"
      class="product-blog-index"
      :product="elem"
    />
  </div>
</template>

<script lang="ts">
import ProductBlog from "@/components/products/blog/product-blog.vue";
import { PropType } from "vue";
import { TypeCartProduct } from "~/store/products/products-type.ts";
export default {
  name: "product-view-blog",
  components: { ProductBlog },
  props: {
    product: {
      type: Array as () => PropType<TypeCartProduct>,
    },
  },
};
</script>

<style lang="sass">
@import "../../../assets/sass/products/blog/product-blog"
@import "../../../assets/sass/products/blog/product-blog-elem"
@import "../../../assets/sass/products/blog/product-blog-offers"
</style>
