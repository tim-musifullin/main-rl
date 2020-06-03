<template>
  <Container>
    <Title class="stories__title">Истории неизлечимых привычек</Title>
    <div class="stories__search">
      <input type="text" class="stories__input" />
      <Button :theme="'purple'" class="stories__button">Искать</Button>
    </div>

    <div class="stories__section">
      <Card
        v-for="card in stories"
        :key="card.id"
        :name="card.name"
        :quote="card.quote"
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
export default {
  data() {
    return {
      storiesName: '',
      itemsPerPage: 8,
      startIndex: 0
    }
  },
  components: {
    Container,
    Title,
    Button,
    Card,
    Pagination,
  },
  computed: {
    stories() {
      return this.$store.getters['stories/getStoriesForPage'].filter((item, idx) => idx >= this.startIndex && idx <= (this.startIndex + this.itemsPerPage - 1));
    },
  },
  methods: {
    changeStartIndex (index) {
      this.startIndex = (index - 1) * this.itemsPerPage;
    }
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

.stories__input {
  height: 52px;
  width: 100%;
  border: 1px solid #e8e8e8;
  outline: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  padding-left: 10px;
}
.stories__input:focus {
  outline: 2px solid #613A93;
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
