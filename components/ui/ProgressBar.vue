<template>
  <div class="progress-bar" :style="styleDef">
    <div class="progress-bar__fill" :style="styleMain"></div>
    <div class="progress-bar__fill" :style="styleAdd"></div>
  </div>
</template>

<script>
  export default {
    props: {
      styleDef: {type: String, default: '#fff'},
      styleMain: String,
      styleAdd: String,
    }
  }
</script>

<style scoped>
.progress-bar {
  max-width: 260px;
  height: 40px;
  position: relative;
  margin: 70px 20px 0px 20px;
}

.progress-bar__fill {
  background: #613a93;
}
</style>
