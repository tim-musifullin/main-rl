<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <Overlay v-if="popupShown" @overlayClick="showPopUp" />
    <PopUp v-if="popupShown" @closeClick="showPopUp" :theme="'dark'">
      <Quiz v-if="openQuestions" />
    </PopUp>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Overlay from '@/components/ui/Overlay';
import PopUp from '@/components/PopUp';
import Quiz from '@/components/ui/Quiz';
export default {
  components: {
    Header,
    Footer,
    Overlay,
    PopUp,
    Quiz,
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown'];
    },
  },
  methods: {
    showPopUp() {
      this.$store.commit('popup/togglePopUp');
    },
    openQuestions() {
      this.$store.getters('popup/openQuestions');
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
