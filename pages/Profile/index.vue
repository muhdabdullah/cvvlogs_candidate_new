<template>
  <div>
    <!-- Profile Card -->
    <ProfileCard
      class="mt-16 mb-5"
      :userData="userData && userData.profile"
      :editProfileMode="true"
    />

    <v-card
      v-if="
        userData && userData.profile && userData.profile.sharing_profile_url
      "
      class="mx-auto tw-opacity-95 my-5"
      rounded="lg"
      elevation="20"
      color="white"
      max-width="1170"
    >
      <v-card-text class="pa-1 d-flex align-center">
        <v-text-field
          class="tw-drop-shadow-none"
          v-model="userData.profile.sharing_profile_url"
          hide-details
          dense
          outlined
          readonly
          background-color="white"
        >
        </v-text-field>
        <v-btn
          class="text-capitalize ml-2"
          height="40"
          depressed
          color="secondary"
          @click="copy(userData.profile.sharing_profile_url)"
          >Copy Url <v-icon class="ml-2">mdi-content-copy</v-icon></v-btn
        >
      </v-card-text>
    </v-card>

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
          <h1 class="tw-text-xl tw-font-semibold text--primary">CV</h1>
          <div class="edit__profile__btn d-flex align-center justify-end">
            <v-btn
              class="tw-text-lg text-capitalize tw-font-bold"
              depressed
              text
              :color="uploadCvDialog ? 'error' : 'primary'"
              @click="uploadCvDialog = !uploadCvDialog"
            >
              {{
                uploadCvDialog
                  ? "Cancel"
                  : userData &&
                    userData.videos &&
                    userData.videos[0] &&
                    userData.videos[0].vid_url
                  ? "Edit Video"
                  : "Upload Video"
              }}
              <v-icon class="ml-1" small>{{
                uploadCvDialog ? "mdi-close" : "mdi-pencil"
              }}</v-icon>
            </v-btn>
          </div>
        </div>

        <div class="personal__details pa-5 pt-0">
          <v-divider class="mb-5"></v-divider>
          <v-row no-gutters>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
              <section id="video__cv__container" class="tw-h-full">
                <video
                  v-if="
                    userData &&
                    userData.videos &&
                    userData.videos[0] &&
                    userData.videos[0].vid_url
                  "
                  id="profile__video__cv"
                  class="tw-border-2 tw-rounded-lg tw-border-slate-600"
                  controls
                  width="640"
                  height="300"
                >
                  <source
                    :src="
                      uploadCvDialog
                        ? ''
                        : userData &&
                          userData.videos &&
                          userData.videos[0] &&
                          userData.videos[0].vid_url
                    "
                    type="video/mp4"
                  />
                </video>
                <div class="d-flex align-center tw-h-full" v-else>
                  <h4 class="mx-auto red--text ma-1">No Video CV uploaded.</h4>
                </div>
              </section>
            </v-col>

            <v-col
              align="center"
              align-self="center"
              cols="12"
              md="6"
              lg="6"
              xl="6"
            >
              <v-card
                :disabled="
                  !(
                    userData &&
                    userData.profile &&
                    userData.profile.uploaded_cv_file_url
                  )
                "
                width="200"
                class="mx-auto rounded-0 pa-1"
              >
                <v-btn
                  color="primary"
                  dark
                  width="190"
                  class="text-capitalize"
                  depressed
                  tile
                  @click="
                    downloadFile(
                      userData &&
                        userData.profile &&
                        userData.profile.uploaded_cv_file_url
                    ),
                      `${
                        personalDetails ? personalDetails.first_name : 'doc'
                      }_CV`
                  "
                >
                  Download CV <v-icon class="ml-2">mdi-cloud-download</v-icon>
                </v-btn>
              </v-card>
              <h4
                v-if="
                  !(
                    userData &&
                    userData.profile &&
                    userData.profile.uploaded_cv_file_url
                  )
                "
                class="mx-auto red--text ma-1"
              >
                No CV uploaded.
              </h4>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>

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

        <div v-if="personalEdits" class="personal__details__form pa-5">
          <v-form ref="form" v-if="personalDetails">
            <div class="d-flex align-center">
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

            <v-text-field
              v-model="personalDetails.email"
              placeholder="Email"
              outlined
              type="email"
            ></v-text-field>

            <v-select
              v-model="personalDetails.country"
              label="Country"
              :items="countries"
              :item-text="'country_name' || 'co_name'"
              :item-value="'country_id' || 'id'"
              outlined
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
                item-value="id"
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
                class="mr-2"
                outlined
              >
              </v-select>

              <v-select
                v-model="personalDetails.gender"
                :items="genders"
                item-text="name"
                ite-value="id"
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
            <v-col cols="12" md="6" lg="6" xl="6">
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

            <v-col cols="12" md="6" lg="6" xl="6">
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
          </v-row>
        </div>
      </v-card-text>
    </v-card>

    <v-card
      class="mx-auto tw-opacity-95 my-5"
      elevation="20"
      rounded="lg"
      color="white"
      max-width="1170"
    >
      <v-card-text class="pa-3 tw-h-full">
        <div
          class="d-flex align-center justify-space-between px-4 py-2 tw-h-full"
        >
          <h1 class="tw-text-xl tw-font-semibold black--text">
            Professional Details
          </h1>
          <div class="edit__profile__btn d-flex align-center justify-end">
            <v-btn
              class="tw-text-lg text-capitalize tw-font-bold"
              depressed
              text
              :color="professionalEdits ? 'error' : 'primary'"
              @click="professionalEdits = !professionalEdits"
            >
              {{ professionalEdits ? "Cancel" : "Edits" }}
              <v-icon class="ml-1" small>{{
                professionalEdits ? "mdi-close" : "mdi-pencil"
              }}</v-icon>
            </v-btn>
          </div>
        </div>

        <div v-if="professionalEdits" class="personal__details pa-5">
          <v-form
            v-if="proffessionalDetails && proffessionalDetails.stored_values"
          >
            <v-select
              dense
              placeholder="Total Work Experience"
              outlined
              item-text="exp_name"
              item-value="id"
              v-model="proffessionalDetails.stored_values.exp_level"
              :items="proffessionalDetails.experience_level"
            ></v-select>

            <v-select
              :items="proffessionalDetails.industry"
              v-model="proffessionalDetails.stored_values.industry"
              item-text="cat_name"
              item-value="cat_id"
              label="Current Industry"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="proffessionalDetails.stored_values.functional_area"
              label="Current Career"
              :items="proffessionalDetails.functional_area"
              item-text="func_name"
              item-value="id"
              outlined
              dense
            >
            </v-select>
            <!-- <v-select label="Current Job Level" outlined dense> 

            </v-select> -->
            <v-select
              v-model="proffessionalDetails.stored_values.wrk_lvl"
              :items="proffessionalDetails.work_level"
              item-text="work_level"
              item-value="id"
              label="Current Type"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="proffessionalDetails.stored_values.salary"
              :items="proffessionalDetails.salary_per_annum"
              item-text="sal_name"
              item-value="sal_name"
              label="Annual Salary"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="proffessionalDetails.stored_values.availability"
              :items="proffessionalDetails.availablity"
              item-text="ava_name"
              item-value="id"
              hide-details
              label="Notice Period"
              outlined
              dense
            >
            </v-select>

            <div class="black--text">
              <h3 class="py-5 tw-text-base tw-font-semibold">
                Current Designation or Title (For recruiters to find you)
              </h3>
              <v-text-field
                v-model="proffessionalDetails.stored_values.curr_title"
                dense
                placeholder="Project Manager"
                outlined
              ></v-text-field>
            </div>

            <div class="black--text">
              <h3 class="pt-5 tw-text-base tw-font-semibold">
                Current Working
              </h3>
              <div class="d-flex">
                <v-checkbox
                  v-model="proffessionalDetails.stored_values.employed_status"
                  class="mr-2"
                  value="1"
                  label="Yes"
                ></v-checkbox>
                <v-checkbox
                  v-model="proffessionalDetails.stored_values.employed_status"
                  class="ml-2"
                  value="0"
                  label="No"
                ></v-checkbox>
              </div>
            </div>
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
            :loading="professionalLoader"
            color="secondary"
            @click.prevent="saveProfessional"
          >
            Save Changes
          </v-btn>
        </div>

        <div v-else class="personal__details pa-5 pt-0">
          <v-divider class="mb-5"></v-divider>
          <v-row v-if="userData && userData.proffession" no-gutters>
            <v-col cols="12" md="6" lg="6" xl="6">
              <div class="pt-0">
                <h4>Total Work Experience</h4>
                <h6>{{ userData.proffession.exp_level }}</h6>
              </div>

              <div>
                <h4>Current Industry</h4>
                <h6>{{ userData.proffession.industry }}</h6>
              </div>

              <div>
                <h4>Current Career</h4>
                <h6>{{ userData.proffession.functional_area }}</h6>
              </div>

              <div>
                <h4>Current Job Level</h4>
                <h6>{{ 45 }}</h6>
              </div>
            </v-col>

            <v-col cols="12" md="6" lg="6" xl="6">
              <div class="pt-0">
                <h4>Current Type</h4>
                <h6>{{ userData.proffession.wrk_lvl }}</h6>
              </div>

              <div>
                <h4>Annual Salary</h4>
                <h6>{{ userData.proffession.salary }}</h6>
              </div>

              <div>
                <h4>Notice Period</h4>
                <h6>{{ userData.proffession.availability }}</h6>
              </div>

              <div>
                <h4>Current Designation</h4>
                <h6>{{ userData.proffession.curr_title || "-" }}</h6>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>

    <v-card
      class="mx-auto tw-opacity-95 my-5 mb-10"
      elevation="20"
      rounded="lg"
      color="white"
      max-width="1170"
    >
      <v-card-text class="pa-3 tw-h-full">
        <div
          class="d-flex align-center justify-space-between px-4 py-2 tw-h-full"
        >
          <h1 class="tw-text-xl tw-font-semibold black--text">
            Qualification Details
          </h1>
          <div class="edit__profile__btn d-flex align-center justify-end">
            <v-btn
              class="tw-text-lg text-capitalize tw-font-bold"
              depressed
              text
              :color="qualificationEdits ? 'error' : 'primary'"
              @click="qualificationEdits = !qualificationEdits"
            >
              {{ qualificationEdits ? "Cancel" : "Edits" }}
              <v-icon class="ml-1" small>{{
                qualificationEdits ? "mdi-close" : "mdi-pencil"
              }}</v-icon>
            </v-btn>
          </div>
        </div>

        <div v-if="qualificationEdits" class="personal__details pa-5">
          <v-form
            v-if="qualificationDetails && qualificationDetails.stored_values"
          >
            <v-select
              v-model="qualificationDetails.stored_values.qualification"
              :items="qualificationDetails.course_vise_education"
              item-text="qual_name"
              item-value="qual_id"
              return-object
              label="Qualification"
              outlined
              dense
            >
            </v-select>
            <v-select
              :items="[]"
              v-model="qualificationDetails.stored_values.course"
              label="Course Type"
              outlined
              dense
            >
            </v-select>
            <v-select
              :items="get_specifice_course('course')"
              item-text="name"
              item-value="id"
              return-object
              label="Course Specialization"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="qualificationDetails.stored_values.institute_location"
              :items="qualificationDetails.location"
              item-text="loc_name"
              item-value="id"
              return-object
              dense
              placeholder="Institute Location"
              outlined
            ></v-select>
            <v-text-field
              label="Institute Name"
              v-model="qualificationDetails.stored_values.institute_name"
              outlined
              dense
            >
            </v-text-field>
            <v-select
              v-model="qualificationDetails.stored_values.year"
              :items="qualificationDetails.years"
              item-text="year"
              item-value="id"
              return-object
              hide-details
              label="Course Completion Year"
              outlined
              dense
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
            color="secondary"
            @click="saveQualification"
            :loading="qualificationLoader"
          >
            Save Changes
          </v-btn>
        </div>

        <div v-else class="personal__details pa-5 pt-0">
          <v-divider class="mb-5"></v-divider>
          <v-row v-if="userData && userData.education" no-gutters>
            <v-col cols="12" md="6" lg="6" xl="6">
              <div class="pt-0">
                <h4>Qualification</h4>
                <h6>{{ userData.education.qualification }}</h6>
              </div>

              <div>
                <h4>Course Type</h4>
                <h6>{{ userData.education.course }}</h6>
              </div>

              <div>
                <h4>Course Specialization</h4>
                <h6>{{ userData.education.course_spec }}</h6>
              </div>
            </v-col>

            <v-col cols="12" md="6" lg="6" xl="6">
              <div class="pt-0">
                <h4>Institute Name</h4>
                <h6>{{ userData.education.institute_name }}</h6>
              </div>

              <div>
                <h4>Course Completion Year</h4>
                <h6>{{ userData.education.year }}</h6>
              </div>

              <div>
                <h4>Institute Location</h4>
                <h6>{{ userData.education.institute_location }}</h6>
              </div>

              <!-- <div>
                <h4>Notice Period</h4>
                <h6>{{ userData.proffession.availability }}</h6>
              </div>

              <div>
                <h4>Current Designation</h4>
                <h6>{{ userData.proffession.cur_title || "-" }}</h6>
              </div> -->
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>

    <v-card
      class="mx-auto tw-opacity-95 my-5 mb-10"
      elevation="20"
      rounded="lg"
      color="white"
      max-width="1170"
    >
      <v-card-text class="pa-3 tw-h-full">
        <div
          class="d-flex align-center justify-space-between px-4 py-2 tw-h-full"
        >
          <h1 class="tw-text-xl tw-font-semibold black--text">Skills</h1>
          <div class="edit__profile__btn d-flex align-center justify-end">
            <v-btn
              class="tw-text-lg text-capitalize tw-font-bold"
              depressed
              text
              :color="skillEdit ? 'error' : 'primary'"
              @click="skillEdit = !skillEdit"
            >
              {{ skillEdit ? "Cancel" : "Edits" }}
              <v-icon class="ml-1" small>{{
                skillEdit ? "mdi-close" : "mdi-pencil"
              }}</v-icon>
            </v-btn>
          </div>
        </div>

        <div v-if="skillEdit" class="personal__details pa-5">
          <v-autocomplete
            outlined
            clearable
            item-text="label"
            item-value="id"
            :items="skills"
            @input="addToSkills"
            label="Choose your skills"
            return-object
          >
          </v-autocomplete>

          <div class="personal__details pa-5 pt-0">
            <v-divider class="mb-5"></v-divider>

            <div class="d-flex align-center" v-if="skillLoader">
              <v-skeleton-loader
                v-for="n in 3"
                :key="n"
                class="mr-1"
                type="button"
              ></v-skeleton-loader>
            </div>

            <div v-else class="d-flex align-center">
              <v-chip
                v-for="(skill, index) in selectedSkills"
                :key="`skill-${index}`"
                class="mr-2"
                @click.prevent="selectedSkills.splice(index, 1)"
              >
                {{ skill.name }}
                <v-icon small class="ml-2">mdi-close</v-icon>
              </v-chip>
            </div>
          </div>

          <v-btn
            height="50"
            depressed
            width="200"
            :disabled="skillLoader"
            class="text-capitalize my-3"
            color="secondary"
            @click="saveSkills"
          >
            Save Changes
          </v-btn>
        </div>

        <div v-else class="personal__details py-5 px-0 pt-0">
          <v-divider class="mb-5"></v-divider>
          <div class="d-flex align-center">
            <v-chip
              v-for="(skill, index) in userData && userData.skills"
              :key="`skill-${index}`"
              class="mr-2"
            >
              {{ skill.sk_name }}
            </v-chip>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <UploadVideoCv
      :applyJob="true"
      :initDialog="uploadCvDialog"
      @closeDialog="uploadCvDialog = false"
      @reload="getProfileData"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async asyncData({ $api, store }) {
    const userData = await $api.authService.getProfile().then((response) => {
      if (response?.data) {
        return response.data;
      }
    });

    return { userData };
  },
  data() {
    return {
      uploadCvDialog: false,
      genders: [
        { id: 1, name: "Male" },
        { id: 2, name: "Female" },
      ],
      personalEdits: false,
      professionalEdits: false,
      qualificationEdits: false,
      skillEdit: false,
      skills: [],
      personalDetails: [],
      proffessionalDetails: [],
      qualificationDetails: [],
      selectedSkills: [],
      skillLoader: false,
      profileLoader: false,
      professionalLoader: false,
      qualificationLoader: false,
      dataLoader: false,
      userData: null,
      countries: [],
      stateList: [],
      citiesList: [],
    };
  },
  computed: {
    ...mapGetters("utils", ["languages", "maritalStatus", "nationalities"]),
  },
  watch: {
    skillEdit(val) {
      if (val) {
        this.getSkills();
      }
    },
    personalEdits(val) {
      if (val) {
        this.getPersonalDetails();
      }
    },
    professionalEdits(val) {
      if (val) {
        this.getProfessionalDetail();
      }
    },
    qualificationEdits(val) {
      if (val) {
        this.getQualificationDetails();
      }
    },
  },
  methods: {
    async copy(text) {
      await navigator.clipboard.writeText(text);
      this.$notifier.showMessage({
        content: "Copied!",
        color: "success",
      });
    },
    downloadFile(path, filename) {
      // Create a new link
      const anchor = document.createElement("a");
      anchor.href = path;
      anchor.download = filename;
      anchor.target = "_blank";
      // Append to the DOM
      document.body.appendChild(anchor);
      // Trigger `click` event
      anchor.click();
      // Remove element from DOM
      // document.body.removeChild(anchor);
    },
    get_specifice_course(type) {
      let qual_id;
      if (
        type == "course" &&
        this.qualificationDetails &&
        this.qualificationDetails.course_vise_education
      ) {
        qual_id = this.qualificationDetails.course_vise_education.find(
          (el) =>
            el.qual_id ==
            this.qualificationDetails.stored_values.qualification.qual_id
        );
        console.log("workingTP", qual_id);
        return qual_id?.qual_courses;
      } else if (type == "specs" && qual_id) {
      }

      return [];
    },
    async getProfileData() {
      this.dataLoader = true;
      await this.$api.authService
        .getProfile()
        .then((response) => {
          if (response?.data) {
            this.userData = response.data;

            if (
              this.userData &&
              this.userData.videos &&
              this.userData.videos[0] &&
              this.userData.videos[0].vid_url &&
              document.getElementById("profile__video__cv")
            ) {
              document.getElementById("profile__video__cv").src =
                this.userData.videos[0].vid_url;
            } else if (document.getElementById("profile__video__cv")) {
              document.getElementById("profile__video__cv").src = "";
            }
          }
        })
        .finally(() => {
          this.dataLoader = false;
        });
    },
    addToSkills(skill) {
      this.selectedSkills.push({
        id: skill.id,
        name: skill.name,
      });
    },
    async getState(country_id) {
      await this.$api.utilsService
        .getStateList(country_id)
        .then(async (response) => {
          if (response?.data) {
            this.stateList = response.data?.state_list;

            let findState = this.stateList.find(
              (el) => el.state_id == this.personalDetails?.state?.id
            );

            if (findState) {
              await this.getCity({
                country_id: this.personalDetails?.country?.id,
                state_id: this.personalDetails?.state?.id,
              });

              this.personalDetails = {
                ...this.personalDetails,
                state: findState,
              };
            }
          }
        });
    },
    async getCity(obj) {
      await this.$api.utilsService.getCityList(obj).then(async (response) => {
        if (response?.data) {
          this.citiesList = response.data?.city_list;

          let findCity = this.citiesList.find(
            (el) => el.city_id == this.personalDetails?.city?.id
          );

          if (findCity) {
            this.personalDetails = {
              ...this.personalDetails,
              city: findCity,
            };
          }
        }
      });
    },
    async getProfessionalDetail() {
      await this.$api.utilsService.getProfessionalDetail().then((response) => {
        if (response?.data) {
          this.proffessionalDetails = response.data;
        }
      });
    },
    async getPersonalDetails() {
      // Get Counties data
      if (!this.countries.length) {
        await this.$api.utilsService.getCountryList().then((response) => {
          this.countries = response?.data?.country;
        });
      }

      // this.skillLoader = true;
      await this.$api.utilsService.personal_details().then(async (response) => {
        if (response?.data) {
          this.personalDetails = {
            ...response.data?.stored_values,
          };

          let findCountry = this.countries.find(
            (el) => el.country_id == this.personalDetails?.country?.id
          );

          if (findCountry) {
            await this.getState({ country_id: findCountry?.country_id });
          }

          this.personalDetails = {
            ...this.personalDetails,
            country: findCountry,
            gender: this.genders.find(
              (el) => el.id == this.personalDetails.gender
            ),
          };

          this.$store.dispatch("utils/set_languages", response.data?.languages);
          this.$store.dispatch(
            "utils/set_nationalities",
            response?.data?.nationality
          );
          this.$store.dispatch(
            "utils/set_maritalStatus",
            response?.data?.marital_statuses
          );
        }
      });
      // .finally(() => (this.skillLoader = false));
    },
    async getQualificationDetails() {
      await this.$api.utilsService
        .add_qualification_get()
        .then(async (response) => {
          if (response?.data) {
            this.qualificationDetails = response.data;
          }
        });
    },
    async getSkills() {
      if (this.skills?.length) return this.skills;

      this.skillLoader = true;
      await this.$api.utilsService
        .getSkills()
        .then((response) => {
          if (response?.data) {
            this.skills = response.data?.skills;
            this.selectedSkills = response.data?.stored_values;
          }
        })
        .finally(() => (this.skillLoader = false));
    },
    async saveSkills() {
      let final_selected_skills = this.selectedSkills.map((el) => el.id);
      this.skillLoader = true;
      await this.$api.utilsService
        .addSkills({
          skills: final_selected_skills,
        })
        .then((response) => {
          if (response?.data) {
            this.skillEdit = false;
            this.getProfileData();
          }
        })
        .finally(() => (this.skillLoader = false));
    },
    async saveProfile() {
      this.profileLoader = true;

      delete this.personalDetails.email;
      delete this.personalDetails.num;
      delete this.personalDetails.num_code;

      //let formData = new FormData();
      // for (const key in this.personalDetails) {
      //   if (Object.hasOwnProperty.call(this.personalDetails, key)) {
      //     const element = this.personalDetails[key];
      //     formData.append(key, element);
      //   }
      // }

      await this.$api.utilsService
        .saveProfileDetail(this.personalDetails)
        .then((response) => {
          if (response?.data) {
            this.personalEdits = false;
            this.getProfileData();
          }
        })
        .finally(() => (this.profileLoader = false));
    },
    async saveQualification() {
      this.qualificationLoader = true;
      await this.$api.utilsService
        .save_qualification_post(this.qualificationDetails)
        .then((response) => {
          this.qualificationEdits = false;
        })
        .finally(() => {
          this.qualificationLoader = false;
        });
    },
    async saveProfessional() {
      if (this.proffessionalDetails?.stored_values) {
        this.professionalLoader = true;
        // ...
        this.proffessionalDetails.stored_values = {
          ...this.proffessionalDetails.stored_values,
          availability:
            this.proffessionalDetails.stored_values?.availability?.id ||
            this.proffessionalDetails.stored_values?.availability,
          employer_city:
            this.proffessionalDetails.stored_values?.employer_city?.id ||
            this.proffessionalDetails.stored_values?.employer_city,
          exp_level:
            this.proffessionalDetails.stored_values?.exp_level?.id ||
            this.proffessionalDetails.stored_values?.exp_level,
          functional_area:
            this.proffessionalDetails.stored_values?.functional_area?.id ||
            this.proffessionalDetails.stored_values?.functional_area,
          industry:
            this.proffessionalDetails.stored_values?.industry?.cat_id ||
            this.proffessionalDetails.stored_values?.industry,
          wrk_lvl:
            this.proffessionalDetails.stored_values?.wrk_lvl?.id ||
            this.proffessionalDetails.stored_values?.wrk_lvl,
          employer_city:
            this.proffessionalDetails.stored_values?.employer_city?.id ||
            this.proffessionalDetails.stored_values?.employer_city,
        };

        await this.$api.utilsService
          .saveProfessionalDetail(this.proffessionalDetails.stored_values)
          .then((response) => {
            if (response?.data) {
              this.professionalEdits = false;
              this.getProfileData();
            }
          })
          .finally(() => (this.professionalLoader = false));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#video__cv__container {
  video {
    height: 360px !important;
  }
}
</style>

<style lang="scss" >
.personal__details {
  div {
    // margin: 15px 0;
    text-transform: capitalize;
  }

  h4 {
    font-weight: 600;
    font-size: 1rem;
    color: black;
  }

  h6 {
    margin: 0px 0 15px 0;
  }
}
</style>