export default ($axios, store, ctx, router) => ({
  async getSkills() {
    return ctx.$request.get(`/add_skills_get.php`).then((response) => {
      return response;
    });
  },

  async addSkills(data) {
    return ctx.$request.post(`/add_skills.php`, data).then((response) => {
      return response;
    });
  },

  async personal_details() {
    return ctx.$request.get(`/add_personal_get.php`).then((response) => {
      return response;
    });
  },

  async getCountryList() {
    return ctx.$request.get(`/get_country_list.php`).then((response) => {
      return response;
    });
  },

  async getStateList(country_id) {
    return ctx.$request
      .post(`/fetch_state_list.php`, country_id)
      .then((response) => {
        return response;
      });
  },

  async getCityList(params) {
    return ctx.$request
      .post(`/fetch_state_list.php`, params)
      .then((response) => {
        return response;
      });
  },
});
