<template>
  <section class="banner">
    <Container>
      <h2 class="banner__text">
        <slot>Текст по умолчанию</slot
        ><hashtag class="banner__text_bold"> #этонелечится</hashtag>
      </h2>
    </Container>
  </section>
</template>

<script>
import Hashtag from '@/components/ui/Hashtag';
import Container from '@/components/Container';
export default {
  components: {
    hashtag: Hashtag,
    Container,
  },
};
</script>

<style scoped>
.banner {
  min-height: 86px;
  background-color: #613a93;
  text-align: center;
}

.banner__text {
  display: inline-block;
  max-width: 750px;
  margin: 20px auto;
  font-family: Inter;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
}

.banner__text_bold {
  font-weight: 800;
  font-size: 40px;
}
</style>
