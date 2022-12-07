const state = () => ({
  jobs_by_industry: [],
  recentJobs: [],
  allJobs: [],
  profileViews: 0,
  dashboardData: null,
});

const getters = {
  get_jobs_by_industry(state) {
    return state.jobs_by_industry;
  },
  getRecentJobs(state) {
    return state.recentJobs;
  },
  getProfileViews(state) {
    return state.profileViews;
  },
  getDashboardData(state) {
    return state.dashboardData;
  },
  getAllJobs(state) {
    return state.allJobs;
  },
};

const mutations = {
  setAllJobs(state, payload) {
    state.allJobs = payload;
  },
  set_jobs_by_industry(state, payload) {
    state.jobs_by_industry = payload;
  },
  setRecentJobs(state, payload) {
    state.recentJobs = payload;
  },
  setDashboardData(state, payload) {
    state.dashboardData = payload;
  },
};

const actions = {
  setAllJobs({ commit }, payload) {
    commit("setAllJobs", payload);
  },
  setDashboardData({ commit }, payload) {
    commit("setDashboardData", payload);
  },
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
