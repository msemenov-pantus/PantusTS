<template>
  <div class="">
    <div class="product-blog-wrapper">
      <div class="product-blog-cart">
        <h3>
          <nuxt-link to="/" class="product-blog-title">
            {{ product.productCard.name }}
          </nuxt-link>
        </h3>
        <div class="product-blog-img">
          <img :src="product.productCard.productCardImage.url" alt="" />
        </div>
        <product-blog-params
          :name="'Бренд'"
          :value="product.productCard.brand.name"
        />
        <product-blog-params
          :name="'Артикуль'"
          :value="product.productCard.sku.original"
        />
        <product-blog-params-array
          name="OEM"
          :value="product.productCard.oem"
        />
      </div>
      <product-offer-blog :product="product" :index-offer="0" />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { TypeProductVuex } from "@/store/products/products-type.ts";
import ProductBlogParams from "~/components/products/element/product-blog-params.vue";
import ProductBlogParamsArray from "~/components/products/element/product-blog-params-array.vue";
import ProductOfferBlog from "~/components/products/offers/product-offer-blog.vue";

export default {
  name: "product-blog",
  components: { ProductOfferBlog, ProductBlogParamsArray, ProductBlogParams },
  props: {
    product: {
      type: Object as () => PropType<TypeProductVuex>,
    },
  },
};
</script>

<!--<style scoped>-->

<!--</style>-->
