<template>
  <div class="statistics__item">
    <p class="statistics__text">
      {{ text }}
    </p>
    <div class="statistics__inner">
      <div class="progress-bar">
        <div class="progress-bar__fill" style="width:30%"></div>
        <div class="progress-bar__fill"></div>
      </div>
      <p class="statistics__numbers">{{ numbers }}</p>
      <p class="statistics__source">{{ source }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    numbers: String,
    source: String,
  },
};
</script>

<style scoped>
.statistics__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
  border: 1px solid #efefef;
}

.statistics__text {
  max-width: 260px;
  font-family: Inter, Arial, sans-serif;
  line-height: 16px;
  font-size: 12px;
  margin: 20px 20px 0px 20px;
  justify-content: flex-start;
}

.progress-bar {
  max-width: 260px;
  height: 40px;
  width: 260px;
  background: #f4f4f4;
  position: relative;
  margin: 70px 20px 0px 20px;
}

.progress-bar__fill {
  width: 3%;
  height: 50%;
  background: #613a93;
}

.statistics__numbers {
  max-width: 260px;
  font-family: Inter, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  text-align: right;
  margin: 20px 20px 0px 20px;
}

.statistics__source {
  max-width: 260px;
  margin: 20px 20px;
  font-family: Inter, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: right;
  color: #666666;
}
</style>
