<template>
  <v-container class="custom_wd_container">
    <v-row>
      <v-col>
        <section>
          <div v-if="!Job">
            <v-skeleton-loader
              height="300"
              type="card"
              class="py-2 my-2 pa-4"
            ></v-skeleton-loader>
          </div>

          <v-card
            v-else
            outlined
            rounded="lg"
            class="
              d-flex
              align-center
              flex-wrap
              justify-space-between
              py-2
              my-2
              pa-4
              tw-cursor-pointer
            "
          >
            <div class="d-flex flex-wrap align-center pa-1 text-capitalize">
              <div class="d-flex flex-column align-start mx-5">
                <h3
                  class="
                    tw-text-lg
                    text-capitalize
                    tw-max-w-xs tw-truncate tw-font-bold
                  "
                >
                  {{ Job.job_title }}
                </h3>
                <h4
                  class="
                    tw-text-sm
                    text-capitalize
                    primary--text
                    tw-font-medium
                  "
                >
                  {{ Job.company_name }}
                </h4>
                <div
                  class="d-flex align-center tw-text-sm tw-font-semibold my-1"
                >
                  <span>{{ Job.salary_min }} - {{ Job.salary_max }}</span>
                  <span class="mx-2">|</span>
                  <span v-if="Job.city"> {{ Job.city }}, </span>
                  <span v-if="Job.state"> &nbsp;{{ Job.state }}, </span>
                  <span v-if="Job.country"> &nbsp;{{ Job.country }} </span>
                </div>
              </div>
            </div>

            <div class="d-flex flex-column pa-1">
              <div class="text-right">
                <v-icon
                  style="border: 1px solid #ede3e3; border-radius: 4px"
                  class="ma-2 pa-2"
                  color="primary"
                >
                  mdi-heart
                </v-icon>
              </div>
              <div class="d-flex align-center justify-center pa-1">
                <span class="grey--text tw-text-sm">
                  <v-icon size="small">mdi-calendar-month</v-icon>
                  {{ Job.posted_on }}
                </span>

                <!-- <span class="text-capitalize grey--text tw-text-sm ml-2">
                  <v-icon size="small">mdi-calculator</v-icon>
                  {{ job.status }}
                </span> -->
              </div>
            </div>
          </v-card>

          <div v-if="Job" class="job__description pa-5">
            <h1 class="tw-text-4xl tw-font-bold my-5">Job Description</h1>

            <div v-html="Job.job_desc"></div>
          </div>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  created() {
    if (!this.$store.getters["auth/get_authId"]) {
      this.$router.push("/");
      return false;
    }
  },
  async asyncData({ params, $api, store, app }) {
    if (store.getters["auth/get_authId"]) {
      const id = params.id;

      const Job = await $api.jobService.get_Job_by_Id(id).then((response) => {
        return response.data.result;
      });

      return { Job };
    }
  },
};
</script>