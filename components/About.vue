<template>
  <section class="about">
    <Container>
      <h2 class="about__header">
        <Hashtag class="about__hashtag">{{getBlock.hashtag}}</Hashtag>
      </h2>
      <Title class="about__title">
        {{getBlock.title}}
      </Title>
      <div class="about__container">
        <Description class="about__description_left">
          <div class="about__paragraph" v-html="getBlock.text">
          </div>
          <div class="about__switch">
            <button
              v-for="item in getBlock.extraTexts"
              currentTab="item"
              v-bind:key="item.id"
              v-bind:class="[
                'about__click',
                { 'about__click_active': currentTab.id === item.id },]"
              v-on:click="currentTab = item">
              {{ item.title }}
            </button>
            </div>
        </Description>
        <Description class="about__description_right">
          <div class="about__info" v-html="currentTab.text"></div>
        </Description>
      </div>
    </Container>
  </section>
</template>

<script>
import Hashtag from '@/components/ui/Hashtag';
import Title from '@/components/ui/Title';
import Description from '@/components/ui/Description';
import Container from '@/components/Container';
import Button from '@/components/ui/Button';
export default {
  components: {
    Hashtag,
    Title,
    Description,
    Container,
    Button
  },
  data() {
    return {
      currentTab: this.$store.state.blocks.blocks.find(
        el => el.block === 'about'
      ).extraTexts[0],
    };
  },
  computed: {
    getBlock() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'about');
    },
  },
};
</script>

<style scoped>
.about {
  background-color: #613a93;
  color: #fff;
  padding: 100px 0;
}

.about__header {
  text-align: center;
  padding-bottom: 70px;
  font-size: 64px;
  line-height: 77px;
}

.about__title {
  color: #fff;
}

.about__paragraph {
  max-width: 340px;
}

.about__container {
  display: flex;
  padding-top: 32px;
}

.about__description_left {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #dedede;
}

.about__description_right {
  max-width: 640px;
  width: 100%;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  color: #dedede;
}

.about__info {
  height: 242px;
}

.about__switch {
  display: flex;
  flex-direction: column;
}

.about__click {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: left;
  background: #613a93;
  color: #C9C9C9;
}

.about__click:first-child {
  padding-bottom: 10px;
}

.about__click:hover {
  font-weight: 500;
  color: #fff;
}

.about__click_active {
  color: #fff;
  font-weight: 500;
}
</style>
