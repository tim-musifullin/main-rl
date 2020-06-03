<template>
  <nav class="menu">
    <nuxt-link to="/" class="menu__link" active-class="menu__link_active" exact>
      <span>Главная</span>
    </nuxt-link>
    <nuxt-link
      to="/stories"
      class="menu__link"
      active-class="menu__link_active"
    >
      <span>Истории</span>
    </nuxt-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu__link {
  text-decoration: none;
  font-size: 18px;
  line-height: 24px;
  margin-right: 40px;
  color: #121212;
}

.menu__link_active {
  border-bottom: #121212 2px solid;
}
</style>
