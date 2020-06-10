import axios from 'axios';

export const state = () => ({
  photos: []
});

export const mutations = {
  setState(state, { name,value }) {
    return (state[name] = value);
  }
};

export const getters = {
  getPhotos(state) {
    return state.photos;
  },
};

export const actions = {
  fetchPhotos(state) {
    return axios.get('https://www.instagram.com/raklechitsa/?__a=1').then(response => {
      const finallyData = getPosts(response.data)
      return state.commit('setState', {
        name: 'photos',
        value: finallyData,
      })
    })
  },
}

const getPosts = data => {
  return data.graphql.user.edge_owner_to_timeline_media.edges.map(post => {
    const { node: { display_url, accessibility_caption, shortcode } } = post
    return {
      display_url,
      accessibility_caption,
      url: `https://www.instagram.com/p/${shortcode}`
    }
  })
}
