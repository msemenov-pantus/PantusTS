<template>
  <div>
    <div class="product-blog">
      <h3>
        <nuxt-link to="/" class="product-blog-title">
          {{ product.ProductCard.name }}
        </nuxt-link>
      </h3>
      <div class="product-blog-img">
        <img :src="product.ProductCard.ProductCardImage.url" alt="" />
      </div>
      <product-blog-params
        :name="'Бренд'"
        :value="product.ProductCard.brand.name"
      />
      <product-blog-params
        :name="'Артикуль'"
        :value="product.ProductCard.sku.original"
      />
      <product-blog-params-array name="oem" :value="product.ProductCard.oem" />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { typeCartProduct } from "@/store/products/products-type.ts";
import ProductBlogParams from "~/components/products/element/product-blog-params.vue";
import ProductBlogParamsArray from "~/components/products/element/product-blog-params-array.vue";

export default {
  name: "product-blog",
  components: { ProductBlogParamsArray, ProductBlogParams },
  props: {
    product: {
      type: Object as () => PropType<typeCartProduct>,
    },
  },
};
</script>

<!--<style scoped>-->

<!--</style>-->
