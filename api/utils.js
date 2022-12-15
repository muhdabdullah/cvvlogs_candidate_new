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
      .post(`/fetch_city_list.php`, params)
      .then((response) => {
        return response;
      });
  },

  async saveProfileDetail(params) {
    return ctx.$request.post("/add_profile.php", params);
  },

  async getProfessionalDetail() {
    return ctx.$request.get("/edit_professional_detail.php");
  },

  async saveProfessionalDetail(params) {
    return ctx.$request.post("/add_proffessional_detail.php", params);
  },

  async save_qualification_post(data) {
    return ctx.$request.post("/add_qualification_post.php", data);
  },

  async add_qualification_get() {
    return ctx.$request.get("/add_qualification_get.php");
  },
});
