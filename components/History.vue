<template>
  <section class="history">
    <Container>
      <Title>
        {{getBlock.title}}
      </Title>

      <div class="history__container">

        <Description class="history__description_left">
          <div class="history_paragraph" v-html="getBlock.text"></div>

          <div class="history__switch">
            <button
                v-for="item in getBlock.extraTexts"
                currentTab="item"
                v-bind:key="item.id"
                v-bind:class="[
                  'history__click',
                  { 'history__click_active': currentTab.id === item.id },
                ]"
                v-on:click="currentTab = item"
              >
                {{ item.title }}
              </button>
          </div>
        </Description>

        <Description class="history__description_right">
        <div class="history__info" v-html="currentTab.text"></div>
        <VioletButton class="history__button">
          {{ currentTab.id == 1 ? 'Заполнить форму' : 'Отправить' }}
        </VioletButton>
        </Description>
      </div>
    </Container>
  </section>
</template>

<script>
import Title from '@/components/ui/Title';
import Description from '@/components/ui/Description';
import VioletButton from '@/components/ui/VioletButton';
import Container from '@/components/Container';
export default {
  components: {
    Title,
    Description,
    VioletButton,
    Container,
  },
  data() {
    return {
      currentTab: this.$store.state.blocks.blocks.find(
        el => el.block === 'story'
      ).extraTexts[0],
    };
  },
  computed: {
    getBlock() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'story');
    },
  },
};
</script>

<style scoped>
.history {
  background-color: #f7f7f7;
  padding: 100px 0;
}

.history__inner {
  max-width: 1320px;
  margin: 0 auto;
  padding: 100px 0;
}

.history__container {
  display: flex;
  padding-top: 32px;
}

.history_paragraph {
  max-width: 340px;
}

.history__description_left {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.history__description_right {
  max-width: 640px;
  width: 100%;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
}

.history__switch {
  display: flex;
  flex-direction: column;
}

.history__click {
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
  background: #f7f7f7;
  color: #A2A2A2;
}

.history__click:first-child {
  padding-bottom: 10px;
}

.history__click:hover {
  font-weight: 500;
  color: #000;
}

.history__click_active {
  color: #000;
  font-weight: 500;
}

.history__info {
  height: 5.5rem;
}
.history__button {
  margin-top: 95px;
}
</style>
