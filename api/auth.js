export default ($axios, store, ctx, router) => ({
  async setToken() {
    $axios.setToken(`${localStorage.getItem("token")}`);
  },

  async signUp(params) {
    return await $axios
      .$post("/api/auth/register", params)
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
        if (response && response.data && response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken);
          // authenticate
          //   store.commit("authenticate", true);
          ctx.app.router.push("/");
        }
        // Updating Token
        this.setToken();
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },

  async logout() {
    localStorage.removeItem("token");
    store.commit("authenticate", false);
    // Removes default Authorization header from `common` scope (all requests)
    $axios.setToken(false);
    ctx.app.router.push("/signIn");
  },
});
