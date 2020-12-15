<template>
  <div class="header-users">
    <div class="header-users-block">
      <img
        class="header-users-icons"
        :src="require('@/assets/img/icons/icon-avatar.png')"
        alt=""
      />
      <div class="header-user-info">
        <nuxt-link to="/" class="header-user-link">Вход</nuxt-link>
        <nuxt-link to="/" class="header-user-link">Регистрация</nuxt-link>
      </div>
    </div>
    <div class="header-users-block">
      <img
        class="header-users-icons"
        :src="require('@/assets/img/icons/icon-shopping-cart.png')"
        alt=""
      />
      <div class="header-user-info">
        <nuxt-link to="/" class="header-user-link">
          Корзина:
          <span class="header-users-count">2</span>
        </nuxt-link>
        <span class="header-users-count">13.2p</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-header-users",
};
</script>

<style lang="sass">
@import "assets/sass/header/header-users"
</style>
