export default function ({ $axios, redirect, $toast, store }) {
  // $axios.setToken(`x-access-token ${localStorage.getItem("token")}`);
  $axios.onRequest((config) => {
    // window.$nuxt.$loading.start();
    config.headers.common["auth_id"] = `${localStorage.getItem("auth_id")}`;
    return config;
  });
  // $axios.onError((error) => {
  //   window.$nuxt.$loading.finish();
  //   if (
  //     (error && error.response && error.response.status === 401) ||
  //     error.response.data.message == "Unauthorized"
  //   ) {
  //     // store.commit('authenticate', false);
  //     localStorage.removeItem("token");
  //     $axios.setToken(false);
  //     //   redirect("/signIn");
  //   }
  // });
  // $axios.onResponseError((error) => {
  //   window.$nuxt.$loading.finish();
  //   if (error && error.response && error.response.errors) {
  //     for (const [key, value] in error.response.errors) {
  //       // $toast.error(`${value.toString()}`)
  //     }
  //   }
  //   if (
  //     (error && error.response && error.response.status === 401) ||
  //     error.response.data.message == "Unauthorized"
  //   ) {
  //     // store.commit('authenticate', false);
  //     localStorage.removeItem("token");
  //     $axios.setToken(false);
  //     //   redirect("/signIn");
  //   }
  // });
  // $axios.onResponse((response) => {
  //   window.$nuxt.$loading.finish();
  //   if (response && response.data && response.data.errors) {
  //     //   console.log("value 13", Object.values(response.data.errors));
  //     //   Object.values(response.data.errors).map((error) => {
  //     //     $toast.error(`${error.toString()}`);
  //     //   });
  //   }
  // });
}
