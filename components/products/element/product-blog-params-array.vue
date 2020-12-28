<template>
  <div class="product-blog-wrapper-params">
    <div class="product-blog-params">
      <b class="product-blog-params-name">{{ name }}</b>
      <nuxt-link
        :title="value[0]"
        to="/"
        class="text-nowrap-custom product-blog-params-value"
      >
        {{ value[0] }}
      </nuxt-link>
    </div>
    <nuxt-link
      v-for="elem in value.slice(1, 5)"
      :key="elem.id"
      :title="elem"
      :to="'search?filter_substr=' + elem"
      class="text-nowrap-custom product-blog-params-value product-blog-params-array-value"
    >
      {{ elem }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "product-blog-params-array",
  props: {
    name: {
      type: String,
    },
    value: {
      type: Array,
    },
  },
};
</script>
