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
};

const mutations = {
  set_authId(state, payload) {
    state.auth_id = payload.auth_id;
    state.userData = payload;
  },
  remove_auth_id(state) {
    state.auth_id = null;
    state.userData = {};

    localStorage.removeItem("auth_id");
    localStorage.removeItem("userData");
  },
};

const actions = {
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
