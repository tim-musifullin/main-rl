<template>
  <Container>
    <header class="header">
      <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo-link">
        <h1 class="header__logo">
          Проект Благотворительного Фонда Константина Хабенского
        </h1>
      </nuxt-link>
      <h1 class="header__logo" v-else>
        Проект Благотворительного Фонда Константина Хабенского
      </h1>
      <div class="header__navigation">
        <Links />
        <button class="header__button" type="button" @click="showPopUp">
          Рассказать историю
        </button>
      </div>
    </header>
  </Container>
</template>

<script>
import Links from '@/components/ui/Links';
import Container from '@/components/Container';
import Overlay from '@/components/ui/Overlay';
import PopUp from '@/components/PopUp';
import Quiz from '@/components/ui/Quiz';
export default {
  components: {
    Links,
    Container,
    Overlay,
    PopUp,
    Quiz,
  },
  methods: {
    showPopUp() {
      this.$store.commit('popup/togglePopUp');
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Inter, Arial, Helvetica, sans-serif;
}

.header__logo {
  max-width: 340px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #121212;
  padding: 18px 0;
}
.header__logo-link {
  text-decoration: none;
}

.header__menu-links {
  position: relative;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 26px 60px;
}

.header__navigation {
  display: flex;
  justify-content: space-between;
}

.header__menu {
  display: none;
}

.header__button {
  border: none;
  background: none;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}

@media screen and (max-width: 768px) {
  .header__menu {
    display: block;
  }

  .header__menu-links {
    display: none;
  }
}
</style>
