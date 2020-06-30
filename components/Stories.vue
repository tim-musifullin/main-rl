<template>
  <Container>
    <section class="stories">
      <Title class="stories__title">
        Истории неизлечимых привычек
      </Title>

      <div class="stories__section">
        <Card
          v-for="card in stories"
          :key="card.id"
          :name="card.author"
          :quote="card.title"
          :link="`/stories/${card.id}`"
          :photo="`background-image:url('https://strapi.kruzhok.io${card.ImageUrl[0].url}')`"
        />
      </div>

      <nuxt-link to="/stories" class="stories__button">
        Больше статей
      </nuxt-link>
    </section>
  </Container>
</template>

<script>
import Title from '@/components/ui/Title';
import Card from '@/components/ui/Card';
import Container from '@/components/Container';
export default {
  data() {
    return {
      storiesName: '',
      itemsPerPage: 8,
      startIndex: 0
    }
  },
  components: {
    Card,
    Title,
    Container,
  },
  computed: {
    stories() {
      return this.$store.getters['stories/getStoriesForPage'].filter((item, idx) => idx >= this.startIndex && idx <= (this.startIndex + this.itemsPerPage - 1));
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
  color: #000;
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
  text-decoration: none;
}
</style>
