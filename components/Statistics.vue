<template>
  <section class="statistics">
    <Container>
      <Title>Статистика по онкозаболеваниям</Title>
      <StaticsItem class="statistics__item" />
    </Container>
  </section>
</template>

<script>
import Title from '@/components/ui/Title';
import StaticsItem from '@/components/ui/StaticsItems';
import Container from '@/components/Container';
export default {
  components: {
    Title,
    StaticsItem,
    Container,
  },
};
</script>

<style scoped>
.statistics {
  margin: 100px 0;
}

.statistics__item {
  margin-top: 70px;
}
</style>
