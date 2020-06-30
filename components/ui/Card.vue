<template>
  <a :href="link" class="card" @click="$emit('cardClick')">
    <div class="card__image" :style='photo'></div>
    <h3 class="card__title">{{ name }}</h3>
    <p class="card__description">{{ quote }}</p>
  </a>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true},
    quote: { type: String, required: true},
    link: { type: String, required: true},
    photo: { type: String, required: true},
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
  float: left;
}
/*
.card__image {
  width: 300px;
  height: 300px;
  background-size: cover;
} */

.card__title {
  font-family: Inter, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 100%;
  color: #000000;
  padding: 20px 0 14px;
}

.card__description {
  font-family: Inter, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 129%;
  color: #666666;
  max-width: 250px;
}
</style>
