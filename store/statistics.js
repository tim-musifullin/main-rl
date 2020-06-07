import axios from 'axios';

export const state = () => ({
  statistics: [],
});

export const mutations = {
  setState(state, { name, value}) {
    return (state[name] = value);
  }
};

export const getters = {
  getStatistics(state) {
    return state.statistics;
  },
};

export const actions = {
  fetchStatistics(state) {
    return axios.get('https://strapi.kruzhok.io/statistics').then(response => {
      return state.commit('setState', {
        name: 'statistics',
        value: response.data,
      });
    })
  }
};
