<template>
  <div class="statistics__items">
    <StaticCard
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
import StaticCard from '@/components/ui/StaticCard';
export default {
  components: {
    StaticCard,
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
