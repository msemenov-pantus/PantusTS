<template>
  <div class="header-users">
    <div class="header-users-block">
      <img
        class="header-users-icons"
        :src="require('@/assets/img/icons/icon-avatar.png')"
        alt=""
      />
      <div class="header-user-info">
        <template v-if="!CheckUsers">
          <nuxt-link to="/authorization" class="header-user-link"
            >Вход</nuxt-link
          >
          <nuxt-link to="/" class="header-user-link">Регистрация</nuxt-link>
        </template>
        <template v-else>
          <div class="header-user-link">
            {{ CheckUsersData.nameLast }}
            {{ CheckUsersData.nameFirst }}
          </div>
        </template>
      </div>
    </div>
    <div class="header-users-block">
      <img
        class="header-users-icons"
        :src="require('@/assets/img/icons/icon-shopping-cart.png')"
        alt=""
      />
      <div class="header-user-info">
        <nuxt-link to="/" class="header-user-link-user">
          Корзина:
          <span class="header-users-count">2</span>
          <div class="header-users-count">13.2p</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { HeaderUsers } from "~/composition/header/header-users";
export default {
  name: "the-header-users",
  setup() {
    return { ...HeaderUsers() };
  },
};
</script>

<style lang="sass">
@import "assets/sass/header/header-users"
</style>
