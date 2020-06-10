<template>
  <Container>
    <Title class="stories__title">Истории неизлечимых привычек</Title>
    <form class="stories__search">
      <Input
        :type="'text'"
        :name="'search'"
        :className="'stories__input'" />
      <Button
        :theme="'purple'"
        class="stories__button">
        Искать
      </Button>
    </form>

    <div class="stories__section">
      <Card
        v-for="card in stories"
        :key="card.id"
        :name="card.author"
        :quote="card.title"
        :link="`/stories/${card.id}`"
        :photo="`background-image:url('https://strapi.kruzhok.io${card.ImageUrl[0].url}')`"
        @cardClick="goToFull(card.id)"
      />
    </div>
    <Pagination
      class="stories__pagination"
      :totalItems='this.$store.state.stories.storiesPage.length'
      :itemsPerPage='itemsPerPage'
      @onPageChanged='changeStartIndex '
    />
  </Container>
</template>

<script>
import Title from '@/components/ui/Title';
import Container from '@/components/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Pagination from '@/components/ui/Pagination';
import Input from '@/components/ui/Input';
export default {
  data() {
    return {
      storiesName: '',
      itemsPerPage: 16,
      startIndex: 0
    }
  },
  components: {
    Container,
    Title,
    Button,
    Card,
    Pagination,
    Input
  },
  computed: {
    stories() {
      return this.$store.getters['stories/getStoriesForPage'].filter((item, idx) => idx >= this.startIndex && idx <= (this.startIndex + this.itemsPerPage - 1));
    },
  },
  methods: {
    changeStartIndex (index) {
      this.startIndex = (index - 1) * this.itemsPerPage;
    },
    goToFull(id) {
      this.$router.push(`/stories/${id}`);
    }
  },
  async fetch({ store }) {
    await store.dispatch('stories/fetchStories');
  }

};
</script>

<style scoped>
.stories__title {
  margin: 100px 0 60px;
}

.stories__search {
  display: flex;
  margin-bottom: 70px;
}


.stories__button {
  margin-left: 20px;
}

.stories__section {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 300px));
  grid-template-rows: minmax(0, auto);
  column-gap: 40px;
  row-gap: 70px;
  margin-bottom: 70px;
}

.stories__pagination {
  margin: 140px 0 100px;
}
</style>
