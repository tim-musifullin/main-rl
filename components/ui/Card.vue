<template>
  <div class="card">
    <img
      src="~/assets/images/card__photo-default.jpg"
      alt="Photo"
      class="card__image"
    />
    <h3 class="card__title">{{ name }}</h3>
    <p class="card__description">{{ quote }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    quote: String,
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}

.card__image {
  width: 100%;
}

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
