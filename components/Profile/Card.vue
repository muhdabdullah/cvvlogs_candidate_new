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
                    <p>{{ userData.proffession }}</p>
                    <p>Digitonics Labs Pvt Ltd.</p>
                    <p>
                      <span>{{ userData.city }}</span> -
                      <span>{{ userData.country }}</span>
                    </p>
                  </div>
                </div>
                <div class="profile__progress_bar">
                  <h2
                    class="
                      text-left
                      pa-2
                      tw-text-base
                      pl-1
                      black--text
                      tw-font-semibold
                    "
                  >
                    Profile Status
                  </h2>
                  <v-progress-linear
                    :value="userData.profile_percentage"
                    color="success "
                    rounded
                    height="12"
                  ></v-progress-linear>
                  <h4 class="text-right black--text tw-font-semibold">
                    {{ userData.profile_percentage }}%
                    {{
                      userData.profile_percentage == 100
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
                    class="tw-text-lg text-capitalize tw-font-bold"
                    depressed
                    text
                    color="grey"
                  >
                    Edit Profile <v-icon class="ml-1" small>mdi-pencil</v-icon>
                  </v-btn>
                </div>

                <div
                  v-if="userData.profile_percentage != 100"
                  class="complete__profile__btn"
                >
                  <v-btn
                    class="tw-text-lg text-capitalize tw-font-bold"
                    max-width="224"
                    block
                    height="64"
                    depressed
                    :color="'secondary'"
                  >
                    Complete Your Profile
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
              :lazy-src="userData.profile_picture || '/img/homeProfileImg.png'"
              :src="userData.profile_picture || '/img/homeProfileImg.png'"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.getters["auth/get_userData"];
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