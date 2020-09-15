<template>
  <section class="cover" ref="cover">
    <Container>
      <div class="cover__inner">
        <span></span>
        <Hashtag class="cover__title">#РАКЛЕЧИТСЯ</Hashtag>
        <button
          class="cover__button"
          type="button"
          @click="nextBlock"
          title="Далее"
        ></button>
      </div>
    </Container>
  </section>
</template>

<script>
import Hashtag from '@/components/ui/Hashtag';
import Container from '@/components/Container';
export default {
  components: {
    Hashtag,
    Container,
  },
  methods: {
    nextBlock() {
      const nextElem = this.$refs.cover.nextElementSibling;
      nextElem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    },
  },
};
</script>

<style scoped>
.cover {
  background-color: #613a93;
}

.cover__inner {
  height: calc(100vh - 76px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.cover__title {
  font-size: 92px;
  line-height: 111px;
  color: #ffffff;
  font-weight: 800;
  text-align: center;
  max-width: 718px;
  z-index: 1;
}

.cover__button {
  background-color: transparent;
  background-image: url('../assets/images/cover-button.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 36px;
  height: 12px;
  bottom: 40px;
  border: none;
  cursor: pointer;
  z-index: 1;
  margin-bottom: 40px;
  border: none;
  outline: none;
}

@media screen and (max-width: 1280px) {
  .cover__title {
    font-size: 78px;
    line-height: 94px;
  }
}

@media screen and (max-width: 768px) {
  .cover__title {
    font-size: 64px;
    line-height: 77px;
  }
}
</style>
