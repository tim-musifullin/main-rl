<template>
  <a :href="link" class="card" target="_blank">
    <div class="card__image" :style='photo'></div>
  </a>
</template>

<script>
export default {
  props: {
    link: String,
    photo: String,
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.card__image {
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.card__image::before {
  content: '';
  padding-top: 100%;
  float: right;
}
</style>
