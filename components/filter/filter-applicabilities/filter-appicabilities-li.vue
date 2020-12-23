<template>
  <li class="filter-appicabilities-li" v-on="$listeners">{{ element.name }}</li>
</template>

<script>
export default {
  name: "filter-filter-appicabilities-li",
  props: {
    element: {},
  },
};
</script>

<!--<style scoped></style>-->
