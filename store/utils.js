const state = () => ({
  languages: [],
  nationalities: [],
  maritalStatus: [],
});

const getters = {
  languages(state) {
    return state.languages;
  },
  nationalities(state) {
    return state.nationalities;
  },
  maritalStatus(state) {
    return state.maritalStatus;
  },
};

const mutations = {
  set_languages(state, payload) {
    state.languages = payload;
  },
  set_nationalities(state, payload) {
    state.nationalities = payload;
  },
  set_maritalStatus(state, payload) {
    state.maritalStatus = payload;
  },
};

const actions = {
  set_languages({ commit }, payload) {
    commit("set_languages", payload);
  },
  set_nationalities({ commit }, payload) {
    commit("set_nationalities", payload);
  },
  set_maritalStatus({ commit }, payload) {
    commit("set_maritalStatus", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
