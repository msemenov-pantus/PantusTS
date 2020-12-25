<template>
  <div class="product-blog-wrapper-params">
    <div class="product-blog-params">
      <b class="product-blog-params-name">{{ name }}</b>
      <nuxt-link
        :title="value"
        to="/"
        class="text-nowrap-custom product-blog-params-value"
      >
        {{ value }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-blog-params",
  props: {
    name: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>
