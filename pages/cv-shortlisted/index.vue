<template>
  <v-container>
    <v-row>
      <v-col v-if="userProgress && userProgress.jobs" cols="12">
        <v-row class="my-5" align="center" no-gutters>
          <v-col>
            <div class="d-flex align-center">
              <h3 class="tw-text-5xl md:tw-text-2xl black--text tw-font-bold">
                Jobs by Category
              </h3>
            </div>
          </v-col>

          <v-col align="right">
            <!-- <v-btn
              to="/jobs"
              width="160"
              height="50"
              depressed
              color="secondary"
            >
              <span
                class="
                  tw-text-base
                  max-sm:tw-text-sm
                  font-weight-light
                  text-capitalize
                "
              >
                View All
              </span>
            </v-btn> -->
          </v-col>
        </v-row>

        <v-hover
          v-for="(details, index) in userProgress.jobs"
          :key="`detail__progress__${index}`"
          class="mb-5"
          v-slot="{ hover }"
        >
          <v-card
            :elevation="hover ? 6 : 0"
            @click="
              viewProfile(
                details.company_id,
                details.recruiter_id,
                details.chat_id
              )
            "
            :class="{ 'on-hover': hover }"
            outlined
            rounded="lg"
            class="tw-cursor-pointer"
          >
            <v-card-text
              class="d-flex align-center flex-wrap justify-space-between"
            >
              <div class="d-flex flex-wrap align-center pa-1 text-capitalize">
                <div class="tw-cursor-pointer">
                  <v-img
                    height="90"
                    max-width="100"
                    position="center"
                    class="
                      tw-border-solid
                      tw-rounded-lg
                      tw-border-2
                      tw-border-gray-200
                    "
                    contain
                    :lazy-src="details.img"
                    :src="details.img"
                    v-if="details.img"
                  />
                  <v-icon
                    class="
                      tw-border-solid
                      tw-rounded-lg
                      tw-border-2
                      tw-border-gray-200
                    "
                    v-else
                    size="90"
                  >
                    mdi-domain
                  </v-icon>
                </div>

                <div class="d-flex flex-column align-start mx-5">
                  <h3
                    class="
                      tw-text-lg
                      text-capitalize
                      black--text
                      tw-max-w-xs tw-truncate tw-font-bold
                    "
                  >
                    {{ details.rec }}
                  </h3>
                  <h4
                    class="
                      tw-text-sm
                      text-capitalize
                      primary--text
                      tw-font-medium
                    "
                  >
                    {{ details.job_title }}
                  </h4>
                  <div
                    class="d-flex align-center tw-text-sm tw-font-semibold my-1"
                  >
                    <div
                      class="
                        d-flex
                        align-center
                        justify-center
                        tw-cursor-pointer tw-text-sm
                        black--text
                        tw-font-medium
                      "
                    >
                      <h4 class="mr-1">
                        {{ details.exp }}
                      </h4>
                      <h4 class="">| {{ details.progress_status }}</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex pa-1">
                <div class="d-flex flex-column">
                  <span class="grey--text tw-text-sm">
                    <v-icon size="small">mdi-calendar-month</v-icon>
                    <span class="mx-1">{{ details.ago }}</span>
                  </span>

                  <v-progress-circular
                    class="mt-4 tw-h-5 mx-auto tw-text-xs"
                    :value="details.percentage"
                    color="success"
                    :size="50"
                    ><span class="black--text"
                      >{{ details.percentage }}%</span
                    ></v-progress-circular
                  >
                </div>
              </div>
            </v-card-text>

            <v-card-text>
              <div class="d-flex flex-wrap justify-space-around">
                <div
                  v-for="(status, status_index) in job_application_status"
                  :key="`status__${status_index}`"
                  class="
                    d-flex
                    flex-column
                    justify-start
                    tw-h-32 tw-w-44
                    align-center
                  "
                >
                  <h1
                    class="
                      tw-font-bold tw-h-5
                      black--text
                      d-flex
                      align-center
                      tw-text-lg
                    "
                  >
                    {{ status.heading }}
                  </h1>
                  <p
                    class="
                      tw-text-sm
                      my-2
                      tw-h-8
                      d-flex
                      align-center
                      text-center
                    "
                  >
                    {{ status.description }}
                  </p>
                  <v-progress-circular
                    v-if="details.status == '0'"
                    class="mt-4 tw-h-5 secondary rounded-xl pa-1"
                    :value="100"
                    color="dark-grey"
                    :size="20"
                  ></v-progress-circular>
                  <v-icon class="mt-2" v-else large color="#ffb44a">
                    mdi-check
                  </v-icon>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
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
      userProgress: [],
      job_application_status: [
        {
          heading: "Viewed",
          description: "Your application is viewed by recruiter.",
          progress_status: null,
          status: 0,
        },
        {
          heading: "Shortlisted",
          description: "In the process of shortlisting.",
          progress_status: null,
          status: 0,
        },
        {
          heading: "Interviewed",
          description: "You have received an invitation for interview.",
          progress_status: null,
          status: 0,
        },
        {
          heading: "Hired",
          description: "You are hired!",
          progress_status: null,
          status: 0,
        },
      ],
    };
  },
  methods: {
    viewProfile(id, recruiter_id, chat_id) {
      if (!id) {
        this.$notifier.showMessage({
          content: "Company information not available.",
          color: "info",
        });
      }

      if (id) {
        this.$router.push({
          name: "company-profile-id",
          params: {
            id: id,
            recruiter_id: recruiter_id,
            chat_id: chat_id,
          },
        });
      }
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
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
}
</style>
