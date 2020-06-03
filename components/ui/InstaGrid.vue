<template>
  <div class="insta-grid">
    <div class="insta-grid__item"></div>
    <div class="insta-grid__item"></div>
    <div class="insta-grid__item"></div>
    <div class="insta-grid__item"></div>
    <div class="insta-grid__item"></div>
    <div class="insta-grid__item"></div>
    <div class="insta-grid__item"></div>
    <div class="insta-grid__item"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.insta-grid {
  margin: 0;
  display: grid;
  grid-gap: 30px;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  justify-content: center;
}

.insta-grid__item {
  width: 195px;
  height: 195px;
  object-fit: cover;
  background-color: #ededed;
}
</style>
