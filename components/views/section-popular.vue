<template>
  <section class="section">
    <container>
      <product-view-blog :product="product" />
    </container>
  </section>
</template>

<script lang="ts">
import Container from "~/components/base/container.vue";
import ProductViewBlog from "~/components/products/view/product-view-blog.vue";
import { PropType } from "vue";
import { TypeCartProduct } from "~/store/products/products-type";
export default {
  name: "section-popular",
  components: { ProductViewBlog, Container },
  props: {
    product: {
      type: Array as () => PropType<TypeCartProduct>,
    },
  },
};
</script>

<style lang="sass">
@import "assets/sass/base/section"
</style>
