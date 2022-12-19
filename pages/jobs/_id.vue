<template>
  <v-container class="custom_wd_container tw-h-full min__height">
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

          <div v-else>
            <v-card
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
                      tw-max-w-4xl tw-truncate tw-font-bold
                    "
                  >
                    {{ Job && Job.job_title }}
                    <v-btn
                      v-if="
                        Job.company_name == 'Recruitwell' &&
                        Job &&
                        Job.externalId
                      "
                      target="_blank"
                      :href="`https://www.recruitwell.com/providers/jobs/${6244}`"
                      icon
                      fab
                      small
                    >
                      <v-icon>mdi-open-in-new</v-icon>
                    </v-btn>
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
                    <span v-if="Job.company_name != 'Recruitwell'"
                      >{{ Job.salary_min }} - {{ Job.salary_max }}</span
                    >
                    <span v-if="Job.company_name != 'Recruitwell'" class="mx-2"
                      >|</span
                    >
                    <span v-if="Job.city"> {{ Job.city }}, </span>
                    <span v-if="Job.state"> &nbsp;{{ Job.state }}, </span>
                    <span v-if="Job.country"> &nbsp;{{ Job.country }} </span>
                  </div>
                </div>
              </div>

              <div class="d-flex flex-column pa-1">
                <div class="text-right">
                  <v-btn
                    @click="uploadCvDialog = true"
                    height="42"
                    depressed
                    color="secondary"
                    width="120"
                  >
                    Apply
                  </v-btn>

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
            <v-card height="50" class="my-5" rounded="lg" color="primary" flat>
              <v-card-text
                class="
                  pa-2
                  tw-h-full
                  white--text
                  d-flex
                  align-center
                  justify-space-around
                  flex-wrap
                "
              >
                <v-tooltip v-if="Job.exp" bottom color="gray">
                  <template v-slot:activator="{ on, attrs }">
                    <div
                      v-bind="attrs"
                      v-on="on"
                      class="
                        d-flex
                        align-center
                        justify-center
                        tw-cursor-pointer
                      "
                    >
                      <v-icon color="white" class="mx-2" dark
                        >mdi-bag-checked</v-icon
                      >
                      <h4 class="tw-text-lg tw-font-medium">{{ Job.exp }}</h4>
                    </div>
                  </template>
                  <span>Experience</span>
                </v-tooltip>

                <v-tooltip v-if="Job.functional_area" bottom color="gray">
                  <template v-slot:activator="{ on, attrs }">
                    <div
                      v-bind="attrs"
                      v-on="on"
                      class="
                        d-flex
                        align-center
                        justify-center
                        tw-cursor-pointer
                      "
                    >
                      <v-icon color="white" class="mx-2" dark
                        >mdi-bag-checked</v-icon
                      >
                      <h4 class="tw-text-lg tw-font-medium">
                        {{ Job.functional_area }}
                      </h4>
                    </div>
                  </template>
                  <span>Career level</span>
                </v-tooltip>

                <v-tooltip v-if="Job.job_type" bottom color="gray">
                  <template v-slot:activator="{ on, attrs }">
                    <div
                      v-bind="attrs"
                      v-on="on"
                      class="
                        d-flex
                        align-center
                        justify-center
                        tw-cursor-pointer
                      "
                    >
                      <v-icon color="white" class="mx-2" dark
                        >mdi-bag-checked</v-icon
                      >
                      <h4 class="tw-text-lg tw-font-medium">
                        {{ Job.job_type }}
                      </h4>
                    </div>
                  </template>
                  <span>Job Type</span>
                </v-tooltip>

                <v-tooltip v-if="Job.industry" bottom color="gray">
                  <template v-slot:activator="{ on, attrs }">
                    <div
                      v-bind="attrs"
                      v-on="on"
                      class="
                        d-flex
                        align-center
                        justify-center
                        tw-cursor-pointer
                      "
                    >
                      <v-icon class="mx-2" dark>mdi-domain</v-icon>
                      <h4 class="tw-text-lg tw-font-medium">
                        {{ Job.industry }}
                      </h4>
                    </div>
                  </template>
                  <span>Industry</span>
                </v-tooltip>

                <v-tooltip v-if="Job.vacancy" bottom color="gray">
                  <template v-slot:activator="{ on, attrs }">
                    <div
                      v-bind="attrs"
                      v-on="on"
                      class="
                        d-flex
                        align-center
                        justify-center
                        tw-cursor-pointer
                      "
                    >
                      <v-icon class="mx-2" dark>mdi-account-group</v-icon>
                      <h4 class="tw-text-lg tw-font-medium">
                        {{ Job.vacancy || "-" }}
                      </h4>
                    </div>
                  </template>
                  <span>Vacancy</span>
                </v-tooltip>
              </v-card-text>
            </v-card>
          </div>

          <div
            v-if="Job"
            class="
              job__description
              pa-5
              tw-border tw-border-slate-400 tw-rounded-xl
            "
          >
            <h1 v-if="Job.job_desc" class="tw-text-4xl tw-font-bold my-5">
              Job Description
            </h1>

            <div
              class="default_font"
              v-if="Job.job_desc"
              v-html="Job.job_desc"
            ></div>

            <div v-else>
              <h1 class="tw-text-xl text-center grey--text tw-font-medium my-5">
                No job description.
              </h1>
            </div>
          </div>

          <div v-else>
            <h1 class="tw-text-4xl text-center tw-font-bold my-5">
              No job description!
            </h1>
          </div>

          <v-btn
            v-if="Job"
            class="my-5 mb-10"
            block
            height="42"
            color="secondary"
            width="120"
            @click="uploadCvDialog = true"
          >
            Apply
          </v-btn>
        </section>
      </v-col>
    </v-row>

    <UploadVideoCv
      :applyJob="true"
      :jobId="Job?.id"
      :initDialog="uploadCvDialog"
      @closeDialog="uploadCvDialog = false"
    />
  </v-container>
</template>
  
  <script>
export default {
  mounted() {
    // if (!localStorage.getItem("auth_id")) {
    //   this.$router.push("/");
    //   return false;
    // }
  },
  async asyncData({ params, $api, app }) {
    // if (localStorage.getItem("auth_id")) {
    const id = params.id;

    const Job = await $api.jobService.get_Job_by_Id(id).then((response) => {
      return response.data.result;
    });

    return { Job };
    // }
  },
  data() {
    return {
      Job: null,
      uploadCvDialog: false,
    };
  },
};
</script>

<style lang="scss" >
.min__height {
  min-height: 800px !important;
}
</style>

<style lang="scss" >
h4 {
  text-transform: capitalize;
}
</style>