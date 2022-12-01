export default ($axios, store, ctx, router) => ({
  async signUp(params) {
    return await $axios
      .$post("/signup.php", params)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },

  async login(params) {
    return await $axios
      .$post("/login.php", params)
      .then((response) => {
        // setting token in axios request.
        $axios.setToken(`auth_id ${response.auth_id}`);
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },

  async logout() {
    return ctx.$request
      .get(`/logout.php?auth_id=${store.getters["auth/get_authId"]}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        store.commit("auth/remove_auth_id");
        // Removes default Authorization header from `common` scope (all requests)
        $axios.setToken(false);
        ctx.app.router.push("/");
      });
  },

  async get_baseJobs() {
    return ctx.$request
      .get("/profile.php")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },
});
