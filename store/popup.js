export const state = () => ({
  popupShown: false,
});

export const mutations = {
  togglePopUp(state) {
    return (state.popupShown = !state.popupShown);
  },
};

export const getters = {
  getPopupShown(state) {
    return state.popupShown;
  },
};
