<template>
  <div class="container"><slot /></div>
</template>

<script>
export default {
  name: "container",
};
</script>

<style lang="sass">
.container
  max-width: $container-width
  margin-left: auto
  margin-right: auto
  padding-left: $container-offset
  padding-right: $container-offset
</style>
