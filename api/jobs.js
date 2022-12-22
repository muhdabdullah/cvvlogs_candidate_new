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

  async search_data_get() {
    return ctx.$request
      .get("/search_data_get.php")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },
});
