export default ($axios, store, ctx, router) => ({
  async get_offline_dashboard() {
    return ctx.$request
      .get("/web_home.php")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },

  async get_Job_by_Id(id) {
    return ctx.$request
      .get(`/job_base.php?id=${id}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },

  async get_baseJobs() {
    return ctx.$request
      .get("/home_job_base.php")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },

  async get_job_exclude() {
    return ctx.$request
      .get("/get_job_exclude_ind.php")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },

  async search_data_get(params) {
    return ctx.$request
      .get("/search_data_get.php", params)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },
  async searchJob(data) {
    return ctx.$request
      .post("/search.php", data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },
  async apply_job(params) {
    return ctx.$request.post("/apply_job.php", params);
  },

  async get_job_list(params) {
    let userData = JSON.parse(localStorage.getItem("userData"));

    if (localStorage.getItem("auth_id")) {
      params["country_id[]"] = userData.countryId;
      params.user_id = userData.id;
    } else {
      let ip_info = JSON.parse(localStorage.getItem("ip_info"));
      params["country_id[]"] = ip_info?.country_id;
    }

    return await $axios
      .$get(`https://staging.cvvlogs.com/api/get-job-list`, {
        params: params,
      })
      .then((response) => {
        return response;
      });
  },
});
