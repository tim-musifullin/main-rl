<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  max-width: 280px;
  width: 100%;
  height: 52px;
  font-family: Inter, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  background-color: #613a93;
  color: #fff;
  border: none;
}
</style>
