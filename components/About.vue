<template>
  <section class="about">
    <Container>
      <h2 class="about__header">
        <Hashtag class="about__hashtag">#РАКЛЕЧИТСЯ</Hashtag>
      </h2>
      <Title class="about__title">О проекте</Title>
      <div class="about__container">
        <Description class="about__description_left">
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </Description>
        <div class="about__switch">
          <span class="about__click about__click_active">Рак Лечится</span>
          <span class="about__click">Фонд Хабенского</span>
        </div>
        <Description class="about__description_right">
          <span class="about__descriptino_first">
            Есть вещи, которые не лечатся. Особенности характера, страстные
            увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
            приобрели в детстве. Список можно продолжать до бесконечности, но
            одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
            и лучшее доказательство — люди с их неизлечимыми особенностями,
            которые сумели победить рак.
          </span>
          Рак лечится — проект Благотворительного Фонда Константина Хабенского и
          Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей
          к раку и заставить каждого поверить: онкологическое заболевание — это
          не приговор.
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
export default {
  components: {
    Hashtag,
    Title,
    Description,
    Container,
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

.about__container {
  display: flex;
  padding-top: 32px;
}

.about__description_left {
  max-width: 340px;
  color: #dedede;
}

.about__description_right {
  max-width: 640px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  color: #dedede;
}

.about__descriptino_first {
  padding-bottom: 5%;
}

.about__switch {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 140px;
}

.about__click {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 122%;
  padding-bottom: 10px;
  color: #c9c9c9;
  text-align: right;
}

.about__click_active {
  color: #ffffff;
  font-weight: 500;
}
</style>
