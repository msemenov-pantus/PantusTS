<template>
  <div class="section">
    <h1>Авторизация</h1>
    <form class="authorization-form">
      <input-validate
        class-label="authorization-label"
        class="authorization-input"
        text-label="Логин"
        @valueInput="FormAuthorization.login.value = $event"
        :vuex-form="FormAuthorization"
        :vuex-input="'login'"
      />
      <input-validate
        type-input="password"
        class-label="authorization-label"
        class="authorization-input"
        text-label="Пароль"
        @valueInput="FormAuthorization.password.value = $event"
        :vuex-form="FormAuthorization"
        :vuex-input="'password'"
      />
      <button class="authorization-button" @click.prevent="AllCheck()">
        Отправить
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import InputValidate from "@/components/base/_input-validate.vue";
import { formAuthorization } from "@/composition/validate-form/form-authorization";
import { ValidateForm } from "@/composition/_validate/validate-form";

export default {
  name: "section-authorization",
  components: { InputValidate },
  setup() {
    const data = formAuthorization();
    return {
      FormAuthorization: data.FormAuthorization,
      ...ValidateForm(data.FormAuthorization),
    };
  },
};
</script>

<style lang="sass">
@import "assets/sass/base/section"
@import "assets/sass/authorization/form-authorization"
</style>
