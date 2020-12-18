<template>
  <div class="section">
    <h1>Авторизация</h1>
    <form class="authorization-form">
      <div class="authorization-wrapper-input">
        {{ FormAuthorization }}
        <input-validate
          text-label="Логин"
          @value_input="FormAuthorization.login.value = $event"
          :vuex-form="FormAuthorization.login"
          @input="InputTrigger(FormAuthorization, 'login').OnSwitch()"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import InputValidate from "@/components/base/_input-validate";
import { FormAuthorization } from "@/composition/validate-form/form-authorization";
import {
  InputTrigger,
  ValidateForm,
} from "@/composition/_validate/validate-form";

export default {
  name: "section-authorization",
  components: { InputValidate },
  setup() {
    return { FormAuthorization, ValidateForm, InputTrigger };
  },
};
</script>

<style lang="sass">
@import "assets/sass/base/section"
</style>
