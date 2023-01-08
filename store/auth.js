const state = () => ({
  auth_id: null,
  userData: {},
  ip_info: {},
});

const getters = {
  get_authId(state) {
    return state.auth_id;
  },
  get_candidate_name(state) {
    if (state.userData?.first_name || state.userData?.last_name) {
      let Full_name = `${state.userData.first_name} ${state.userData.last_name}`;
      return Full_name;
    }
  },
  get_first_name(state) {
    if (state.userData?.first_name) {
      return `${state.userData.first_name}`;
    }
  },
  get_userData(state) {
    return state.userData;
  },
  get_ip_info(state) {
    return state.ip_info;
  },
};

const mutations = {
  // set_userData(state, payload) {
  //   state.userData = payload;
  // },
  set_authId(state, payload) {
    state.auth_id = payload.auth_id;
    state.userData = payload;
  },
  remove_auth_id(state) {
    state.auth_id = null;
    state.userData = {};

    localStorage.removeItem("auth_id");
    localStorage.removeItem("userData");
    localStorage.removeItem("ip_info");
  },
  set_ip_info(state, payload) {
    state.ip_info = payload;
    localStorage.setItem("ip_info", JSON.stringify(payload));
  },
};

const actions = {
  set_ip_info({ commit }, payload) {
    commit("set_ip_info", payload);
  },
  set_authId({ commit }, payload) {
    if (payload.onlyID) {
      // Storing in Local Storage.
      localStorage.setItem("auth_id", payload.auth_id);
    } else {
      // Storing in Local Storage.
      localStorage.setItem("auth_id", payload.auth_id);
      localStorage.setItem("userData", JSON.stringify(payload));
    }

    commit("set_authId", payload);
  },
  remove_auth_id({ commit }, payload) {
    commit("remove_auth_id", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
