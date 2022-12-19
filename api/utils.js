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
  async get_profile_viewers() {
    return ctx.$request.get("/profile_viewers.php");
  },

  async get_Profile_by_Id(id) {
    return ctx.$request
      .get(`/company_info_web.php?id=${id}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },
  async get_user_progress(id) {
    return ctx.$request
      .get(`/progress.php`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },

  // OTP
  async confirm_disable(data) {
    return ctx.$request.post("/confirm_disable.php", data);
  },

  async disable_otp() {
    return ctx.$request.get("/disable_otp.php");
  },
});
