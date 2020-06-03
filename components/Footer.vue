<template>
  <section class="footer">
    <Container>
      <div class="footer__main">
        <Title class="footer__menu">
          Спасибо всем, кто помог состояться этому проекту
        </Title>
        <Links />
        <ul class="footer__out-links">
          <li class="footer__nav-item footer__nav-item_turn">
            <p>
              Мы в
              <a
                href="https://www.instagram.com/raklechitsa/"
                class="footer__local-link"
                target="_blank"
                >Инстаграме</a
              >
              и
              <a
                href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
                class="footer__local-link"
                target="_blank"
                >Youtube</a
              >
            </p>
          </li>
          <li class="footer__nav-item footer__nav-item_turn">
            <a href="#" class="footer__local-link footer__local-link_color"
              >Поделитесь &#8599;</a
            >
          </li>
        </ul>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">
          Рак Лечится {{ new Date().getFullYear() }}
        </p>
        <p class="footer__copyright">
          Сделано студентами
          <a href="https://praktikum.yandex.ru/" class="footer__copyright-link"
            >Яндекс Практикум</a
          >
        </p>
      </div>
    </Container>
  </section>
</template>

<script>
import Title from '@/components/ui/Title';
import Links from '@/components/ui/Links';
import Container from '@/components/Container';
export default {
  components: {
    Title,
    Links,
    Container,
  },
};
</script>

<style scoped>
.footer {
  background-color: #fbfbfb;
}

.footer__main {
  padding: 65px 0 90px;
  display: flex;
  position: relative;
  justify-content: space-between;
}

.footer__bottom {
  padding-bottom: 60px;
  display: flex;
  position: relative;
  justify-content: space-between;
}

.footer__in-links {
  padding-left: 0;
  margin: 0 auto 0 -70px;
}

.footer__copyright {
  font-family: Inter, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1;
  color: #898989;
}

.footer__copyright-link {
  font-family: Inter, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.33;
  color: #898989;
  text-decoration: none;
}

.footer__copyright-link:hover {
  border-bottom: 2px solid #898989;
}

.footer__local-link {
  font-family: Inter, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.33;
  color: #000;
  text-decoration: none;
}

.footer__local-link:hover {
  border-bottom: 2px solid #000;
}

.footer__local-link_color {
  color: #121;
}

.footer__nav-item {
  list-style: none;
  padding-right: 30px;
  margin-right: 0;
}

.footer__nav-item_line {
  display: inline; /* Отображать как строчный элемент */
}

.footer__nav-item:last-of-type {
  padding-right: 0;
}

.footer__nav-item_turn {
  display: block;
  margin-bottom: 44px;
}

.footer__nav-item_turn:last-of-type {
  margin-bottom: 0;
}

.footer__nav {
  padding-right: auto;
  text-align: left;
}

.footer__out-links {
  padding: 0;
  margin: 0 0 auto auto;
  width: 300px;
}

.footer__menu {
  max-width: 340px;
  margin: 0 113px auto 0;
}
</style>
