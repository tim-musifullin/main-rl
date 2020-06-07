<template>
  <div class="statistics__items">
    <StaticCard
      v-for="card in statistics"
      :key="card.id"
      :text="card.description"
      :numbers="card.summary"
      :source="card.source"
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
  beforeMount() {
    this.$store.dispatch('statistics/fetchStatistics');
  },
};
</script>

<style scoped>
.statistics__items {
  display: flex;
  justify-content: space-between;
}
</style>
