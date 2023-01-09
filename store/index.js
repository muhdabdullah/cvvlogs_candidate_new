const state = () => ({
  jobs_by_industry: [],
  recentJobs: [],
  allJobs: [],
  profileViews: 0,
  dashboardData: null,
  search_jobs_data: {},
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
  search_jobs_data(state) {
    return state.search_jobs_data;
  },
};

const mutations = {
  set_search_jobs_data(state, payload) {
    state.search_jobs_data = payload;
  },
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
  resetJobsData(state) {
    state.jobs_by_industry = [];
    state.recentJobs = [];
    state.allJobs = [];
    state.dashboardData = null;
    state.profileViews = 0;
  },
  reset_search_jobs_data(state) {
    state.search_jobs_data = {};
  },
};

const actions = {
  set_search_jobs_data({ commit }, payload) {
    commit("set_search_jobs_data", payload);
  },
  reset_search_jobs_data({ commit }, payload) {
    commit("reset_search_jobs_data", payload);
  },
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
  resetJobsData({ commit }, payload) {
    commit("resetJobsData", payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
