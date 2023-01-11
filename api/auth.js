import nuxtConfig from "@/nuxt.config";

export default ($axios, store, ctx, router) => ({
  async signUp(params) {
    const config = {
      headers: { secret_key: "a1f33e3555cae4dcb631d63ed534f1d1" },
    };

    return await $axios
      .$post(
        "https://api.cvvlogs.com/cv-tube/api.v.1/user/signup_new.php",
        params,
        config
      )
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
        $axios.setHeader("auth_id", response.data.auth_id);
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },

  // async logout() {
  //   $axios.setHeader("auth_id", `${localStorage.getItem("auth_id")}`);
  //   return await $axios
  //     .get(`/logout.php?auth_id=${localStorage.getItem("auth_id")}`)
  //     .then((response) => {
  //       // Removes default Authorization header from `common` scope (all requests)
  //       store.commit("auth/remove_auth_id");

  //       store.dispatch("resetJobsData");
  //       $axios.setHeader("auth_id", "");
  //       ctx.app.router.push("/");
  //       return response;
  //     })
  //     .catch((error) => {
  //       // Removes default Authorization header from `common` scope (all requests)
  //       store.commit("auth/remove_auth_id");
  //       $axios.setHeader("auth_id", "");
  //       ctx.app.router.push("/");
  //       console.error(error);
  //     });
  // },

  async logout(data) {
    const url =
      "https://api.cvvlogs.com/cv-tube/api.v.1/user/logout.php?auth_id=" +
      localStorage.getItem("auth_id");
    const options = {
      method: "GET",
      crossorigin: true,
      mode: "no-cors",
      headers: {},
    };
    fetch(url, options).then((data) => {
      // Removes default Authorization header from `common` scope (all requests)
      store.commit("auth/remove_auth_id");

      store.dispatch("resetJobsData");
      $axios.setHeader("auth_id", "");
      ctx.app.router.push("/");
    });
  },

  // getProfile
  async getProfile() {
    return ctx.$request
      .get("/profile.php")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },

  send_forget_password_mail(params) {
    return $axios.$post(
      `${nuxtConfig?.axios?.baseURL}/forget_password.php`,
      params
    );
  },
});
