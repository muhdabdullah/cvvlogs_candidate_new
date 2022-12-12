<template>
  <div>
    <!-- Profile Card -->
    <ProfileCard
      class="mt-16 mb-5"
      :userData="userData.profile"
      :editProfileMode="true"
    />

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
          <v-form>
            <v-text-field
              dense
              placeholder="First Name"
              v-model="userData.profile.name"
              outlined
            ></v-text-field>

            <v-text-field dense placeholder="Last Name" outlined></v-text-field>

            <v-text-field
              dense
              v-model="userData.profile.email"
              placeholder="Email"
              outlined
              type="email"
            ></v-text-field>

            <v-select
              v-model="userData.profile.country"
              label="Country"
              outlined
              dense
            >
            </v-select>

            <v-select
              v-model="userData.profile.state"
              label="State / Province"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="userData.profile.city"
              label="City"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="userData.profile.gender"
              :items="genders"
              label="Gender"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="userData.profile.nationality"
              label="Nationality"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="userData.profile.marital_status"
              label="Maritial Status"
              outlined
              dense
            >
            </v-select>
            <v-select
              hide-details
              v-model="userData.profile.languages"
              label="Language (max 3 language)"
              outlined
              dense
            >
            </v-select>
          </v-form>
          <v-btn
            height="50"
            depressed
            width="200"
            class="text-capitalize my-3"
            color="secondary"
          >
            Save Changes
          </v-btn>
        </div>

        <div v-else class="personal__details pa-5 pt-0">
          <v-divider class="mb-5"></v-divider>
          <v-row no-gutters>
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
          <v-form>
            <v-text-field
              dense
              v-model="userData.proffession.exp_level"
              placeholder="Total Work Experience"
              outlined
            ></v-text-field>

            <v-select
              v-model="userData.proffession.industry"
              label="Current Industry"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="userData.proffession.functional_area"
              label="Current Career"
              outlined
              dense
            >
            </v-select>
            <v-select label="Current Job Level" outlined dense> </v-select>
            <v-select
              v-model="userData.proffession.wrk_lvl"
              label="Current Type"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="userData.proffession.salary"
              label="Annual Salary"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="userData.proffession.availability"
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
                v-model="userData.proffession.cur_title"
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
                  v-model="userData.proffession.employed_status"
                  class="mr-2"
                  value="1"
                  label="Yes"
                ></v-checkbox>
                <v-checkbox
                  v-model="userData.proffession.employed_status"
                  class="ml-2"
                  value="0"
                  label="No"
                ></v-checkbox>
              </div>
            </div>
          </v-form>
          <v-btn
            height="50"
            depressed
            width="200"
            class="text-capitalize my-3"
            color="secondary"
          >
            Save Changes
          </v-btn>
        </div>

        <div v-else class="personal__details pa-5 pt-0">
          <v-divider class="mb-5"></v-divider>
          <v-row no-gutters>
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
                <h6>{{ userData.proffession.cur_title || "-" }}</h6>
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
              :color="qualificationDetails ? 'error' : 'primary'"
              @click="qualificationDetails = !qualificationDetails"
            >
              {{ qualificationDetails ? "Cancel" : "Edits" }}
              <v-icon class="ml-1" small>{{
                qualificationDetails ? "mdi-close" : "mdi-pencil"
              }}</v-icon>
            </v-btn>
          </div>
        </div>

        <div v-if="qualificationDetails" class="personal__details pa-5">
          <v-form>
            <v-select
              v-model="userData.education.qualification"
              label="Qualification"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="userData.education.course"
              label="Course Type"
              outlined
              dense
            >
            </v-select>
            <v-select
              v-model="userData.education.spec"
              label="Course Specialization"
              outlined
              dense
            >
            </v-select>
            <v-text-field
              v-model="userData.education.institute_location"
              dense
              placeholder="Institute Location"
              outlined
            ></v-text-field>
            <v-select
              label="Institute Name"
              v-model="userData.education.institute_name"
              outlined
              dense
            >
            </v-select>
            <v-select
              hide-details
              v-model="userData.education.year"
              label="Course Completion Year"
              outlined
              dense
            >
            </v-select>
          </v-form>
          <v-btn
            height="50"
            depressed
            width="200"
            class="text-capitalize my-3"
            color="secondary"
          >
            Save Changes
          </v-btn>
        </div>

        <div v-else class="personal__details pa-5 pt-0">
          <v-divider class="mb-5"></v-divider>
          <v-row no-gutters>
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

              <div>
                <h4>Institute Location</h4>
                <h6>{{ userData.education.institute_location }}</h6>
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
  </div>
</template>

<script>
export default {
  async asyncData({ $api, store }) {
    const userData = await $api.authService.getProfile().then((response) => {
      if (response.data) {
        return response.data;
      }
    });

    return { userData };
  },
  data() {
    return {
      genders: ["Male", "Female"],
      personalEdits: false,
      professionalEdits: false,
      qualificationDetails: false,
    };
  },
};
</script>

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