const state = () => ({
  jobs_by_industry: [],
  recentJobs: [],
});

const getters = {
  get_jobs_by_industry(state) {
    return state.jobs_by_industry;
  },
  getRecentJobs(state) {
    return state.recentJobs;
  },
};

const mutations = {
  set_jobs_by_industry(state, payload) {
    state.jobs_by_industry = payload;
  },
  setRecentJobs(state, payload) {
    state.recentJobs = payload;
  },
};

const actions = {
  set_jobs_by_industry({ commit }, payload) {
    commit("set_jobs_by_industry", payload);
  },
  setRecentJobs({ commit }, payload) {
    commit("setRecentJobs", payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
