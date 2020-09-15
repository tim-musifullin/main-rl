<template>
  <div class="statistics-card">
    <p class="statistics-card__text">
      {{ text }}
    </p>
    <div class="statistics-card__inner">
      <ProgressBar
        v-if="serial < 3"
        :styleDef="'background: #f4f4f4;'"
        :styleMain="style"
        :styleAdd="style"
      />
      <ProgressBar
        v-if="serial === 3"
        :styleMain="'width: 61%; height: 50%; background: #f4f4f4;'"
        :styleAdd="'width: 80%; height: 50%;'"
      />
      <ProgressBar
        v-if="serial === 4"
        :styleMain="'width: 73%; height: 50%; background: #f4f4f4;'"
        :styleAdd="'width: 54%; height: 50%;'"
      />
      <p class="statistics-card__numbers">{{ numbers }}</p>
      <p class="statistics-card__source">{{ source }}</p>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ui/ProgressBar';
export default {
  components: {
    ProgressBar,
  },
  props: {
    text: String,
    numbers: String,
    source: String,
    value: Number,
    maxValue: Number,
    serial: Number,
  },
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%; height: 50%; `;
    },
  },
};
</script>

<style scoped>
.statistics-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
  border: 1px solid #efefef;
}

.statistics-card__text {
  max-width: 260px;
  font-family: Inter, Arial, sans-serif;
  line-height: 16px;
  font-size: 12px;
  margin: 20px 20px 0px 20px;
  justify-content: flex-start;
}

.statistics-card__numbers {
  max-width: 260px;
  font-family: Inter, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  text-align: right;
  margin: 20px 20px 0px 20px;
}

.statistics-card__source {
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
