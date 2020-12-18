<template>
  <div>
    <label :class="classLabel">{{ TextLabel }}</label>
    <input
      @input="$emit('value_input', $event.target.value)"
      :value="vuexForm.value"
      :type="typeInput"
      :placeholder="placeholder"
    />
    <div class="block-error_full">
      <template v-for="data in vuexForm.error">
        <div :key="data.id" v-if="data.active === true">
          {{ data.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { FormDataInput } from "@/composition/_validate/validate-type";
export default {
  name: "input-validate",
  props: {
    placeholder: {
      type: String,
    },
    typeInput: {
      type: String,
      default: "text",
    },
    vuexForm: {
      type: Object as () => PropType<FormDataInput>,
    },
    classLabel: {
      type: String,
    },
    TextLabel: {
      type: String,
    },
  },
};
</script>

<!--<style scoped></style>-->
