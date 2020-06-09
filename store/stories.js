import axios from 'axios';

export const state = () => ({
  stories: [
    {
      id: 1,
      name: 'Владимир Тен',
      quote:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
    },
    {
      id: 2,
      name: 'Владимир Познер',
      quote: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: 3,
      name: 'Александр Тарханов',
      quote: 'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: 1,
      name: 'Владимир Тен',
      quote:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
    },
    {
      id: 2,
      name: 'Владимир Познер',
      quote: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: 3,
      name: 'Александр Тарханов',
      quote: 'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: 1,
      name: 'Владимир Тен',
      quote:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
    },
    {
      id: 2,
      name: 'Владимир Познер',
      quote: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
  ],
  storiesPage: [],
});

export const mutations = {
  setState(state, { name,value }) {
    return (state[name] = value);
  }
};

export const getters = {
  getStories(state) {
    return state.stories;
  },
  getStoriesForPage(state) {
    return state.storiesPage;
  }
};

export const actions = {
  fetchStories(state) {
    return axios.get('https://strapi.kruzhok.io/stories').then(response => {
      return state.commit('setState', {
        name: 'storiesPage',
        value: response.data,
      })
    })
  }
}
