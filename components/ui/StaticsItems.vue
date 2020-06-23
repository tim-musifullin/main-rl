<template>
  <div class="statistics__items">
    <StatisticsCard
      v-for="card in statistics"
      :key="card.id"
      :text="card.description"
      :numbers="card.summary"
      :source="card.source"
      :value="card.currentValue"
      :maxValue="card.maxValue"
      :serial="card.id"
    />
  </div>
</template>

<script>
import StatisticsCard from '@/components/ui/StatisticsCard';
export default {
  components: {
    StatisticsCard,
  },
  computed : {
    statistics() {
      return this.$store.getters['statistics/getStatistics'];
    }
  },
};
</script>

<style scoped>
.statistics__items {
  display: flex;
  justify-content: space-between;
}
</style>
