<template>
  <Container class="story">
    <div class="story__header">
      <div class="story__image" :style="`background-image:url('https://strapi.kruzhok.io${stories.ImageUrl[0].url}')`"></div>
      <div class="story__headline">
        <h2 class="story__title">
          <span class="story__title_bold">{{stories.author}}:</span>
          {{stories.title}}
        </h2>
        <div class="story__footer">
          <a href="" class="story_link">Поделитесь ↗</a>
          <p class="story_date">20 апреля 2018</p>
        </div>
      </div>
    </div>
    <div class="story__description" v-html="stories.text">

    </div>

    <a href="" class="story_link story__share">
      Поделитесь этой статьей в своих социальных сетях ↗
    </a>

    <div class="story__section">
      <Card
        v-for="card in storiesAddition"
        :key="card.id"
        :name="card.author"
        :quote="card.title"
        :link="`/stories/${card.id}`"
        :photo="`background-image:url('https://strapi.kruzhok.io${card.ImageUrl[0].url}')`"
      />
    </div>
    <nuxt-link to="/stories" class="story__button">
        Больше статей
      </nuxt-link>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import Card from "@/components/ui/Card";
export default {
  components: {
    Container,
    Card
  },
  async fetch({ store, route }) {
    await store.dispatch('stories/fetchStoriesWithId', { id: route.params.id });
  },
  computed: {
    stories() {
      return this.$store.getters['stories/getCurrentStories'];
    },
    storiesAddition() {
      return this.$store.getters['stories/getStoriesForPage'].filter((item, idx) => idx >= this.startIndex && idx <= (this.startIndex + this.itemsPerPage - 1));
    },
  },
  data() {
    return {
      storiesName: '',
      itemsPerPage: 4,
      startIndex: Number(this.$route.params.id),
    }
  },
  beforeMount() {
    this.$store.dispatch('stories/fetchStories');
    console.log(this.$route.params.id)
  },
};
</script>

<style scoped>
.story {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.story__header {
  display: flex;
  margin: 100px 0;
}

.story__headline {
  max-width: 680px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

.story__title {
  max-width: 680px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  padding-top: 30px;
}

.story__title_bold {
  font-weight: bold;
}

.story__image {
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 60px;
}
.story__image::before {
  content: '';
  padding-top: 100%;
  float: left;
}

.story__footer {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
}
.story_link {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  text-decoration: none;
}
.story__date {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}

.story__description {
  margin: 0 auto 45px;
  max-width: 780px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  color: #000000;
}

.story__description >>> p {
  padding-bottom: 30px;
}

.story__description >>> blockquote {
  font-weight: bold;
}

.story__share {
  max-width: 780px;
  width: 100%;
  text-align: center;
  margin: 0 auto 190px;
  padding: 30px 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

.story__section {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 300px));
  grid-template-rows: minmax(0, auto);
  column-gap: 40px;
  row-gap: 70px;
  margin-bottom: 70px;
}

.story__button {
  background-color: #fbfbfb;
  color: #000;
  border: none;
  width: 100%;
  padding: 31px 0;
  margin-bottom: 100px;
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
