<template>
  <p class="personal-policy">
    Нажимая на кнопку «отправить», вы даете согласие на&nbsp;<nuxt-link
      target="_blank"
      to="/policy"
      class="personal-policy__link"
    >
      <span class="personal-policy__text" @click="close"
        >обработку персональных данных</span
      ></nuxt-link
    >
  </p>
</template>

<script>
export default {
  methods: {
    close(e) {
      this.$store.commit('popup/togglePopUp');
    },
  },
};
</script>

<style scoped>
.personal-policy {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666;
  text-decoration-color: #666;
  margin: 0;
  width: 50%;
}
.personal-policy__link {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666;
  text-decoration-color: #666;
  margin: 0;
  width: 50%;
}
@media screen and (max-width: 768px) {
  .personal-policy {
    width: 100%;
    font-size: 11px;
    line-height: 13px;
    margin-top: 10px;
  }
  .personal-policy__link {
    width: 100%;
    font-size: 11px;
    line-height: 13px;
    margin-top: 10px;
  }
}
</style>
