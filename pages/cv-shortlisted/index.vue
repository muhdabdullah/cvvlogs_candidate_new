<template>
  <v-container fluid>
    <v-row class="ma-15">
      <v-col cols="12">
        <h1 class="tw-text-5xl tw-font-bold" style="color: #865ddd">
          Progress
        </h1>
        <v-card
          v-if="!$vuetify.breakpoint.xs"
          class="mx-auto tw-opacity-95 roundedBox mt-12"
          elevation="10"
          color="white"
          v-for="progressData in userProgress?.jobs"
          :key="progressData?.id"
        >
          <v-card-text
            class="mt-9 mb-9 tw-h-full d-flex flex-column justify-center"
          >
            <div class="d-flex flex-column justify-center align-center">
              <div class="imgBox d-flex justify-center align-center _cursor" @click="viewProfile(progressData.company_id)">
                <v-img
                  height="65"
                  max-width="115"
                  position="center"
                  cover
                  :lazy-src="progressData?.img"
                  :src="progressData?.img"
                />
              </div>
              <h1 class="fontColor tw-font-medium mt-4">
                {{ progressData?.rec }}
              </h1>
            </div>
            <div class="d-flex justify-lg-space-around mt-9">
              <div
                class="d-flex flex-column align-center"
              >
                <h1 class="tw-font-normal tw-text-base headingColor">
                  {{ progressData?.job_title }}
                </h1>
                <v-progress-circular
                  class="mt-8"
                  v-if="progressData?.percentage !== 0"
                  :value="
                    progressData?.percentage !== 0
                      ? progressData?.percentage
                      : 100
                  "
                  :color="progressData?.percentage !== 0 ? '#ffb44a' : '#707070'"
                  :size="progressData?.percentage !== 0 ? 70 : 20"
                ></v-progress-circular>
              </div>
              <div
                class="d-flex flex-column align-center"
              >
                <h1 class="tw-font-normal tw-text-base headingColor">Viewed</h1>
                <p class="tw-text-xs textColor mt-4">
                  Your application is viewed by recruiter
                </p>
                <v-progress-circular
                  v-if="progressData?.status === '0'"
                  class="mt-4"
                  :value="100"
                  :color="'#707070'"
                  :size="20"
                ></v-progress-circular>
                <v-icon
                  class="mt-2"
                  v-if="progressData?.status !== '0'"
                  large
                  color="#ffb44a"
                >
                  mdi-check
                </v-icon>
              </div>
              <div
                class="d-flex flex-column align-center"
              >
                <h1 class="tw-font-normal tw-text-base headingColor">Shortlisted</h1>
                <p class="tw-text-xs textColor mt-4">
                  In the process of shortlisting
                </p>
                <v-progress-circular
                  v-if="progressData?.progress_status === 'applied'"
                  class="mt-4"
                  :value="100"
                  :color="'#707070'"
                  :size="20"
                ></v-progress-circular>
                <v-icon
                  class="mt-2"
                  v-if="progressData?.progress_status === 'shortlisted'"
                  large
                  color="#ffb44a"
                >
                  mdi-check
                </v-icon>
              </div>
              <div class="d-flex flex-column align-center">
                <h1 class="tw-font-normal tw-text-base headingColor">
                  Interviewed
                </h1>
                <p class="tw-text-xs textColor mt-4">
                  You have received an invitation for interview
                </p>
                <v-progress-circular
                  class="mt-4"
                  :value="100"
                  :color="'#707070'"
                  :size="20"
                ></v-progress-circular>
              </div>
              <div class="d-flex flex-column align-center">
                <h1 class="tw-font-normal tw-text-base headingColor">Hired</h1>
                <p class="tw-text-xs textColor mt-4">You are hired!</p>
                <v-progress-circular
                  class="mt-4"
                  :value="100"
                  :color="'#707070'"
                  :size="20"
                ></v-progress-circular>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $api, store }) {
    const userProgress = await $api.utilsService
      .get_user_progress()
      .then((response) => {
        return response?.data;
      });

    return { userProgress };
  },
  data() {
    return {
      userProgress: null,
    };
  },
  methods: {
    viewProfile(id) {
      this.$router.push({
        name: "company-profile-id",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.roundedBox {
  border-radius: 15px !important;
}
.imgBox {
  width: 134px;
  height: 82px;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
}
.fontColor {
  color: #707070 !important;
  font-size: 25px !important;
}
.headingColor {
  color: #707070 !important;
}
.textColor {
  color: #c8c8c8 !important;
}
._cursor {
  cursor: pointer;
}
</style>
