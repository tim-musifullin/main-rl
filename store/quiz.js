export const state = () => ({
  currentQuestion: 1,
  answers: {},
  questions: questions,
});

export const mutations = {
  saveAnswer(state, { answer, currentQuestion }) {
    state.answers[state.questions[currentQuestion].key] = answer;
  },
  setCurrentQuestion(state, { currentQuestion }) {
    state.currentQuestion = currentQuestion;
  },
  setQuestion(state, questions) {
    state.questions = questions;
  },
  resetAnswers(state) {
    state.answers = {};
  },
};

export const actions = {
  async next_question({ commit, state }, { answer }) {
    const { currentQuestion } = state;
    await commit('saveAnswer', { answer, currentQuestion });
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion + 1,
    });
  },
  async prev_question({ commit, state }) {
    const { currentQuestion } = state;
    if (currentQuestion === 1) {
      return;
    }
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion - 1,
    });
  },

  async send_question({ commit, state }) {
    await commit('setCurrentQuestion', { currentQuestion: 1 });
    console.log(state.answers);
    await commit('resetAnswers');
  },
};

export const questions = {
  1: {
    title: 'Шаг 1 из 13',
    question: 'Как вас зовут?',
    key: 'name',
  },
  2: {
    title: 'Шаг 2 из 13',
    question: 'Было ли у вас онкологическое заболевание?',
    subQuestion:
      'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
    key: 'cancerStory',
  },
  3: {
    title: 'Шаг 3 из 13',
    question: 'Какие занятия приносят Вам наибольшее удовольствие?',
    subQuestion:
      'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
    key: 'pleasureActivities',
  },
  4: {
    title: 'Шаг 4 из 13',
    question: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
    key: 'commonActivities',
  },
  5: {
    title: 'Шаг 5 из 13',
    question: 'Какие сильные увлечения у Вас есть?',
    subQuestion:
      'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
    key: 'hobbies',
  },
  6: {
    title: 'Шаг 6 из 13',
    question:
      'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
    key: 'habits',
  },
  7: {
    title: 'Шаг 7 из 13',
    question:
      'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
    subQuestion: 'Кроме необходимых, таких, как чистка зубов.',
    key: 'regularActivities',
  },
  8: {
    title: 'Шаг 8 из 13',
    question:
      'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
    key: 'aloneActivities',
  },
  9: {
    title: 'Шаг 9 из 13',
    question: 'Что Вас успокаивает/умиротворяет лучше всего?',
    key: 'calmDownActivities',
  },
  10: {
    title: 'Шаг 10 из 13',
    question:
      'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
    key: 'events',
  },
  11: {
    title: 'Шаг 11 из 13',
    question: 'Как вы обычно проводите выходные?',
    key: 'weekends',
  },
  12: {
    title: 'Шаг 12 из 13',
    question: 'Телефон для связи.',
    subQuestion:
      'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
    key: 'phone',
  },
  13: {
    title: 'Шаг 13 из 13',
    question: 'Почта.',
    subQuestion:
      'После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
    key: 'email',
  },
};
