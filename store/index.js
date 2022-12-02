const state = () => ({
  jobs_by_industry: [],
  recentJobs: [],
});

const getters = {
  get_jobs_by_industry(state) {
    return state.jobs_by_industry;
  },
};

const mutations = {
  set_jobs_by_industry(state, payload) {
    state.jobs_by_industry = payload;
  },
};

const actions = {
  set_jobs_by_industry({ commit }, payload) {
    commit("set_jobs_by_industry", payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
