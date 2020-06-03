<template>
  <div class="statistics__item">
    <p class="statistics__text">
      Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000
      человек.
    </p>
    <div class="progress-bar">
      <div class="progress-bar__fill"></div>
    </div>
    <p class="statistics__numbers">1 из 3</p>
    <p class="statistics__source">Левада-Центр 2018</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.statistics__item {
  display: flex;
  flex-direction: column;
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
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #613a93;
  width: 30%;
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
