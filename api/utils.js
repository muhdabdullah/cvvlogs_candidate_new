import nuxtConfig from "@/nuxt.config";

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

  async get_country_code() {
    return ctx.$request.get(`/country_codes.php`);
  },

  async saveProfileDetail(formData) {
    return fetch(`${nuxtConfig?.axios?.baseURL}/add_profile.php`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        auth_id: localStorage.getItem("auth_id"),
      },
    }).then((res) => res?.json());
    // return ctx.$request.post("/add_profile.php", params);
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

  async send_delete_account_otp() {
    return ctx.$request.get("/send_delete_account_otp.php");
  },

  async confirm_delete_account(code) {
    return ctx.$request.post("/confirm_delete_account.php", code);
  },

  // async confirm_disable(data) {
  //   return ctx.$request.post("/confirm_disable.php", data);
  // },
  async confirm_disable(data, auth_id) {
    const url =
      "https://api.cvvlogs.com/cv-tube/api.v.1/user/confirm_disable.php";
    const options = {
      method: "POST",
      headers: {},
      body: JSON.stringify({
        auth_id: auth_id,
        code: data.code,
      }),
    };
    return fetch(url, options).then((response) => {
      return response.json();
    });
  },

  async send_otp_activate(data) {
    return ctx.$request.post("/otp_suc.php", data);
  },

  async resend_otp(data) {
    return ctx.$request.get("/resend.php", data);
  },

  async send_disable_otp() {
    return ctx.$request.get("/disable_otp.php");
  },

  async send_feedback(data) {
    return ctx.$request.post("/send_feedback.php", data);
  },

  init_favourite(param) {
    return $axios.$post(
      "https://staging.cvvlogs.com/api/mark-unmark-job-fav",
      param
    );
  },
});
