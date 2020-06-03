<template>
  <Container>
    <section class="stories">
      <Title class="stories__title">
        Истории неизлечимых привычек
      </Title>

      <div class="stories__section">
        <Card
          v-for="card in Cards"
          :key="card.id"
          :name="card.name"
          :quote="card.quote"
        />
      </div>

      <button class="stories__button">Больше статей</button>
    </section>
  </Container>
</template>

<script>
import Title from '@/components/ui/Title';
import Card from '@/components/ui/Card';
import Container from '@/components/Container';
export default {
  components: {
    Card,
    Title,
    Container,
  },
  computed: {
    Cards() {
      return this.$store.getters['stories/getStories'];
    },
  },
};
</script>

<style scoped>
.stories {
  padding: 100px 0;
}

.stories__title {
  padding-bottom: 70px;
}

.stories__section {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 300px));
  grid-template-rows: minmax(0, auto);
  column-gap: 40px;
  row-gap: 70px;
  margin-bottom: 70px;
}

.stories__button {
  background-color: #fbfbfb;
  border: none;
  width: 100%;
  padding: 31px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  justify-content: center;
}
</style>
