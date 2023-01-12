<template>
  <v-card
    class="mx-auto tw-opacity-95 my-5"
    rounded="lg"
    elevation="20"
    color="white"
    max-width="1170"
  >
    <v-card-text class="pa-3 tw-h-full">
      <div
        class="d-flex align-center justify-space-between px-4 py-2 tw-h-full"
      >
        <h1 class="tw-text-xl tw-font-semibold text--primary">
          Personal Details
        </h1>
        <div class="edit__profile__btn d-flex align-center justify-end">
          <v-btn
            class="tw-text-lg text-capitalize tw-font-bold"
            depressed
            text
            :color="personalEdits ? 'error' : 'primary'"
            @click="personalEdits = !personalEdits"
          >
            {{ personalEdits ? "Cancel" : "Edits" }}
            <v-icon class="ml-1" small>{{
              personalEdits ? "mdi-close" : "mdi-pencil"
            }}</v-icon>
          </v-btn>
        </div>
      </div>

      <div
        v-if="personalDetailsLoader"
        class="d-flex my-5 align-center justify-center"
      >
        <v-progress-circular
          indeterminate
          :size="70"
          color="secondary"
        ></v-progress-circular>
      </div>

      <div v-else-if="personalEdits" class="personal__details__form pa-5">
        <v-form ref="form" v-if="personalDetails">
          <div class="d-flex align-start">
            <v-text-field
              label="First Name"
              class="mr-2"
              v-model="personalDetails.first_name"
              outlined
            ></v-text-field>

            <v-text-field
              v-model="personalDetails.last_name"
              label="Last Name"
              class="ml-2"
              outlined
            ></v-text-field>
          </div>

          <div class="d-flex align-start">
            <v-text-field
              v-model="personalDetails.email"
              disabled
              placeholder="Email"
              outlined
              type="email"
            ></v-text-field>

            <v-row class="ml-5" no-gutters dense>
              <v-col cols="3">
                <!-- <select
                  v-model="countryCode"
                  name="num_code"
                  id="num_code"
                  class="v-input__control"
                >
                  <option :value="countryCode.country_code" disabled selected>
                    {{ countryCode.country_code }}
                  </option>
                  <option
                    v-for="option in countryCodeList"
                    :key="option.country_code"
                    :value="option.country_code"
                  >
                    {{ option.country_code }}
                  </option>
                </select> -->

                <v-autocomplete
                  style="width: 220px"
                  v-model="countryCode"
                  :items="countryCodeList"
                  item-value="country_code"
                  item-text="country_code"
                  placeholder="Country Code"
                  hide-details
                  single-line
                  class="phoneSelector"
                  outlined
                >
                  <template v-slot:append>
                    <v-icon>mdi-chevron-down</v-icon>
                  </template>
                </v-autocomplete>
              </v-col>

              <v-col cols="9">
                <v-text-field
                  class="ml-2"
                  outlined
                  disabled
                  v-model.trim="personalDetails.num"
                  hide-details
                  placeholder="Phone number"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>

          <v-select
            v-model="personalDetails.country"
            label="Country"
            :items="countries"
            :item-text="'country_name' || 'co_name'"
            :item-value="'country_id' || 'id'"
            outlined
            @input="getState({ country_id: personalDetails.country })"
          >
          </v-select>

          <div class="d-flex align-center">
            <v-select
              v-model="personalDetails.state"
              :items="stateList"
              label="State / Province"
              class="mr-2"
              outlined
              item-text="state_name"
              item-value="state_id"
              @input="getCity({ state_id: personalDetails.state }, true)"
            >
            </v-select>
            <v-select
              class="ml-2"
              v-model="personalDetails.city"
              :items="citiesList"
              label="City"
              :item-text="'city_name'"
              :item-value="'city_id'"
              outlined
            >
            </v-select>
          </div>

          <div class="d-flex align-center">
            <v-select
              v-model="personalDetails.nationality"
              :items="nationalities"
              label="Nationality"
              item-text="nat_name"
              item-value="id"
              class="mr-2"
              outlined
            >
            </v-select>

            <v-select
              v-model="personalDetails.gender"
              :items="genders"
              item-text="name"
              item-value="id"
              label="Gender"
              outlined
              class="ml-2"
            >
            </v-select>

            <v-select
              v-model="personalDetails.marital_status"
              label="Maritial Status"
              item-text="m_name"
              item-value="id"
              :items="maritalStatus"
              outlined
              class="ml-2"
            >
            </v-select>
          </div>

          <v-select
            hide-details
            v-model="personalDetails.languages"
            :items="languages"
            label="Language (max 3 language)"
            outlined
            item-text="l_name"
            item-value="id"
            multiple
            clearable
            chips
          >
          </v-select>
        </v-form>

        <div v-else class="d-flex my-5 align-center justify-center">
          <v-progress-circular
            indeterminate
            :size="70"
            color="secondary"
          ></v-progress-circular>
        </div>

        <v-btn
          height="50"
          depressed
          width="200"
          class="text-capitalize my-3"
          :loading="profileLoader"
          color="secondary"
          @click="saveProfile"
        >
          Save Changes
        </v-btn>
      </div>

      <div v-else class="personal__details pa-5 pt-0">
        <v-divider class="mb-5"></v-divider>
        <v-row v-if="userData && userData.profile" no-gutters>
          <v-col cols="12" md="4" lg="4" xl="4">
            <div class="pt-0">
              <h4>Full Name</h4>
              <h6>{{ userData.profile.name }}</h6>
            </div>

            <div>
              <h4>Gender</h4>
              <h6>{{ userData.profile.gender }}</h6>
            </div>

            <div>
              <h4>Marital Status</h4>
              <h6>{{ userData.profile.marital_status }}</h6>
            </div>

            <div>
              <h4>Nationality</h4>
              <h6>{{ userData.profile.nationality }}</h6>
            </div>
          </v-col>

          <v-col cols="12" md="4" lg="4" xl="4">
            <div class="pt-0">
              <h4>Country</h4>
              <h6>{{ userData.profile.country }}</h6>
            </div>

            <div>
              <h4>City</h4>
              <h6>{{ userData.profile.city }}</h6>
            </div>

            <div>
              <h4>State / Province</h4>
              <h6>{{ userData.profile.state }}</h6>
            </div>

            <div>
              <h4>Language</h4>
              <h6>{{ userData.profile.languages }}</h6>
            </div>
          </v-col>

          <v-col cols="12" md="4" lg="4" xl="4">
            <div class="pt-0">
              <h4>Phone number</h4>
              <h6>{{ (userData.profile && userData.profile.num) || "-" }}</h6>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["userData"],
  data() {
    return {
      personalEdits: false,
      profileLoader: false,
      personalDetailsLoader: false,
      personalDetails: [],
      countryCodeList: [],
      genders: [],
      citiesList: [],
      stateList: [],
      countries: [],

      countryCode: null,
      genders: [
        { id: 0, name: "Female" },
        { id: 1, name: "Male" },
        { id: 2, name: "Rather Not Say" },
      ],
    };
  },
  computed: {
    ...mapGetters("utils", ["languages", "maritalStatus", "nationalities"]),
  },
  watch: {
    async personalEdits(val) {
      if (val) {
        this.getCountries();
        await this.get_country_code();
        await this.getPersonalDetails();
      }
    },
  },
  methods: {
    get_country_code() {
      this.$api.utilsService.get_country_code().then(async (response) => {
        this.countryCodeList = response?.data?.country_codes;
      });
    },
    getCountries() {
      this.$api.utilsService.getCountryList().then((response) => {
        this.countries = response?.data?.country;
      });
    },
    getState(country_id) {
      this.$api.utilsService.getStateList(country_id).then(async (response) => {
        if (response?.data) {
          this.stateList = response?.data?.state_list;
        }
      });
    },
    getCity(obj, fetch_manual) {
      let city_id = null;
      let state_id = null;

      if (fetch_manual) {
        console.log(
          "🚀 ~ file: PersonalDetails.vue:319 ~ getCity ~ fetch_manual",
          obj,
          this.personalDetails
        );

        obj.country_id = this.personalDetails?.country;
        obj.state_id = this.personalDetails?.state;
      }

      this.$api.utilsService.getCityList(obj).then(async (response) => {
        if (response?.data) {
          this.citiesList = response.data?.city_list;
        }
      });
    },
    async getPersonalDetails() {
      this.personalDetailsLoader = true;

      if (!this.countries.length) {
        this.getCountries();
      }

      await this.$api.utilsService
        .personal_details()
        .then(async (response) => {
          if (response?.data) {
            this.personalDetails = {
              ...response.data?.stored_values,
            };

            // update countyID if present
            let userData = JSON.parse(localStorage.getItem("userData"));

            if (this.personalDetails?.country?.id && userData)
              localStorage.setItem(
                "userData",
                JSON.stringify({
                  ...userData,
                  countryId: this.personalDetails.country.id,
                })
              );

            if (this.personalDetails.num_code) {
              this.countryCode = this.countryCodeList.find(
                (el) => el.country_code == "+92"
              );
            }

            console.log("this.personalDetails", this.personalDetails);

            let findCountry = this.countries.find(
              (el) => el.country_id == this.personalDetails?.country?.id
            );

            if (findCountry) {
              this.personalDetails = {
                ...this.personalDetails,
                country: findCountry,
              };
            }

            let findCity = this.citiesList.find(
              (el) => el.city_id == this.personalDetails?.city?.id
            );

            if (findCity) {
              this.personalDetails = {
                ...this.personalDetails,
                city: findCity,
              };
            }

            let findState = this.stateList.find(
              (el) => el.state_id == this.personalDetails?.state?.id
            );
            if (findState) {
              this.personalDetails = {
                ...this.personalDetails,
                state: findState,
              };
            }

            // this.personalDetails = {
            //   ...this.personalDetails,
            //   country: findCountry,
            //   gender: this.genders.find(
            //     (el) => el.id == this.personalDetails.gender
            //   ),
            // };

            this.$store.dispatch(
              "utils/set_languages",
              response.data?.languages
            );
            this.$store.dispatch(
              "utils/set_nationalities",
              response?.data?.nationality
            );
            this.$store.dispatch(
              "utils/set_maritalStatus",
              response?.data?.marital_statuses
            );
          }
        })
        .finally(() => (this.personalDetailsLoader = false));
    },
    async saveProfile() {
      this.profileLoader = true;

      if (this.countryCode?.country_code)
        this.personalDetails.num_code = this.countryCode.country_code;
      // if (this.countryCode) this.personalDetails.num_code = this.countryCode;

      if (this.personalDetails.city?.id)
        this.personalDetails.city = this.personalDetails.city.id;

      if (this.personalDetails?.country?.country_id)
        this.personalDetails.country = this.personalDetails.country.country_id;

      if (this.personalDetails?.gender?.id)
        this.personalDetails.gender = this.personalDetails.gender.id;

      if (this.personalDetails?.marital_status?.id)
        this.personalDetails.marital_status =
          this.personalDetails.marital_status.id;

      if (this.personalDetails?.nationality?.id)
        this.personalDetails.nationality = this.personalDetails.nationality.id;

      if (this.personalDetails?.state?.id)
        this.personalDetails.state = this.personalDetails.state.id;

      let formData = new FormData();
      formData.append("first_name", this.personalDetails.first_name);
      formData.append("last_name", this.personalDetails.last_name);
      formData.append("email", this.personalDetails.email);
      formData.append("num", this.personalDetails.num);
      formData.append("num_code", this.personalDetails.num_code);
      formData.append("dob", "1999-09-21");
      formData.append("gender", this.personalDetails.gender);
      formData.append("marital_stat", this.personalDetails.marital_status);
      formData.append("country", this.personalDetails.country);
      formData.append("state", this.personalDetails.state);
      formData.append("city", this.personalDetails.city);
      formData.append("nationality", this.personalDetails.nationality);
      // formData.append("file", this.personalDetails.dp);

      // formData.append("lang[]", [1, 2]);

      console.log("Final_data", this.personalDetails);

      await this.$api.utilsService
        .saveProfileDetail(formData)
        .then((response) => {

          this.getPersonalDetails()

          console.log("🚀 ~ file: index.vue:1288 ~ .then ~ response", response);
          if (response?.status == 200) {
            this.personalEdits = false;
            this.$emit("reload");
          }
        })
        .finally(() => (this.profileLoader = false));
    },
  },
};
</script>

<style>
</style>