import axios from 'axios';

export const state = () => ({
  storiesPage: [],
  currentStories: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const getters = {
  getStoriesForPage(state) {
    return state.storiesPage;
  },
  getCurrentStories(state) {
    return state.currentStories;
  },
};

export const actions = {
  fetchStories(state) {
    return axios.get(`${process.env.BASE_URL}/stories`).then(response => {
      return state.commit('setState', {
        name: 'storiesPage',
        value: response.data,
      });
    });
  },

  fetchStoriesWithId(state, payload) {
    return axios
      .get(`${process.env.BASE_URL}/stories/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'currentStories',
          value: response.data,
        });
      });
  },
};
