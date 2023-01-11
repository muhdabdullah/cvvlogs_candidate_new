<template>
  <section>
    <v-card
      v-if="!$vuetify.breakpoint.xs"
      class="mx-auto tw-opacity-95 rounded__rect"
      elevation="20"
      height="380"
      color="white"
      max-width="1170"
    >
      <v-card-text class="pa-3 tw-h-full">
        <v-row no-gutters class="tw-h-full">
          <v-col align="start" cols="9" class="tw-h-full">
            <div
              class="
                d-flex
                align-start
                justify-space-between
                px-4
                py-2
                tw-h-full
              "
            >
              <div
                class="
                  pa-5
                  d-flex
                  flex-column
                  justify-space-between
                  tw-w-full tw-h-full
                "
              >
                <div class="profile__details text-capitalize">
                  <h1 class="tw-text-3xl tw-font-bold text--primary">
                    {{ this.$store.getters["auth/get_candidate_name"] }}
                  </h1>
                  <div
                    class="
                      profile__positions
                      tw-font-medium
                      black--text
                      no__margib__b
                      py-2
                    "
                  >
                    <p>{{ (userData && userData.proffession) || "-" }}</p>
                    <p v-if="userData && userData.curr_rec">
                      {{ userData.curr_rec || "-" }}
                    </p>
                    <p>
                      <span>{{ (userData && userData.city) || "-" }}</span> -
                      <span>{{ (userData && userData.country) || "-" }}</span>
                    </p>
                  </div>

                  <div
                    class="
                      mt-3
                      profile__positions
                      tw-font-medium
                      black--text
                      no__margib__b
                      py-2
                    "
                  >
                    <div class="d-flex align-center text-lowercase">
                      <v-icon small class="mr-2">mdi-email</v-icon>
                      <span>{{ (userData && userData.email) || "-" }}</span>
                    </div>

                    <div class="d-flex align-center">
                      <v-icon small class="mr-2">mdi-phone</v-icon>
                      <span>{{
                        (userData && userData.num) ||
                        (userData && userData.number) ||
                        "-"
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="profile__progress_bar">
                  <div
                    class="
                      d-flex
                      justify-space-between
                      align-center
                      tw-text-base
                      black--text
                      tw-font-semibold
                    "
                  >
                    <h2 class="text-left pa-2 pl-1">Profile Status</h2>

                    <div class="profile__viewed">
                      <v-chip small class="px-2 tw-cursor-pointer">
                        <span class="mx-2">{{
                          (dashboardData && dashboardData.views) || 0
                        }}</span
                        ><v-icon> mdi-eye </v-icon>
                      </v-chip>
                    </div>
                  </div>
                  <v-progress-linear
                    :value="
                      dashboardData &&
                      dashboardData.profile &&
                      dashboardData.profile.percentage
                    "
                    :color="
                      dashboardData &&
                      dashboardData.profile &&
                      dashboardData.profile.percentage == 100
                        ? 'success'
                        : 'primary'
                    "
                    rounded
                    height="12"
                  ></v-progress-linear>
                  <h4 class="text-right black--text tw-font-semibold">
                    {{
                      dashboardData &&
                      dashboardData.profile &&
                      dashboardData.profile.percentage
                    }}%
                    {{
                      dashboardData &&
                      dashboardData.profile &&
                      dashboardData.profile.percentage == 100
                        ? "Completed!"
                        : "Complete"
                    }}
                  </h4>
                </div>
              </div>

              <div
                class="
                  pa-1
                  d-flex
                  flex-column
                  justify-space-between
                  tw-w-full tw-h-full
                "
              >
                <div class="edit__profile__btn d-flex align-center justify-end">
                  <v-btn
                    v-if="!editProfileMode"
                    class="tw-text-lg text-capitalize tw-font-bold"
                    depressed
                    to="/profile"
                    text
                    color="grey"
                  >
                    View Profile <v-icon class="ml-1" small>mdi-eye</v-icon>
                  </v-btn>
                </div>

                <div
                  class="
                    complete__profile__btn
                    d-flex
                    align-center
                    justify-center
                  "
                >
                  <v-btn
                    class="tw-text-lg mx-1 text-capitalize tw-font-bold"
                    width="224"
                    height="60"
                    depressed
                    to="/profile"
                    :color="'secondary'"
                    v-if="
                      dashboardData &&
                      dashboardData.profile &&
                      dashboardData.profile.percentage < 100
                    "
                  >
                    Complete <br />
                    Your Profile
                  </v-btn>

                  <v-btn
                    class="tw-text-lg mx-1 text-capitalize tw-font-bold"
                    max-width="224"
                    height="60"
                    depressed
                    to="/profile/viewed"
                    :color="'secondary'"
                  >
                    Profile Viewed
                  </v-btn>

                  <v-btn
                    class="tw-text-lg text-capitalize tw-font-bold"
                    max-width="224"
                    height="60"
                    depressed
                    to="/cv-shortlisted"
                    :color="'secondary'"
                  >
                    Progress
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>

          <v-col align-self="center" class="pr-3" cols="3">
            <v-img
              height="320"
              width="300"
              class="tw-rounded-lg pa-5"
              position="center"
              cover
              :lazy-src="
                (userData && userData.profile_picture) ||
                (userData && userData.dp) ||
                '/img/homeProfileImg.png'
              "
              :src="
                (userData && userData.profile_picture) ||
                (userData && userData.dp) ||
                '/img/homeProfileImg.png'
              "
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
export default {
  props: {
    editProfileMode: {
      type: Boolean,
      defult: false,
    },
    userData: {
      type: Object,
    },
  },
  mounted() {},
  computed: {
    // userData() {
    //   return this.$store.getters["auth/get_userData"];
    // },
    dashboardData() {
      return this.$store.getters["getDashboardData"];
    },
  },
};
</script>

<style lang="scss">
.no__margib__b {
  p {
    margin-bottom: 1px;
  }
}
</style>