<template>
  <div class="statistics__items">
    <StaticCard />
    <StaticCard />
    <StaticCard />
    <StaticCard />
  </div>
</template>

<script>
import StaticCard from '@/components/ui/StaticCard';
export default {
  components: {
    StaticCard,
  },
};
</script>

<style scoped>
.statistics__items {
  display: flex;
  justify-content: space-between;
}
</style>
