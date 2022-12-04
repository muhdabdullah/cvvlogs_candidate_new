<template>
  <section>
    <v-container>
      <v-row align="center" class="my-5">
        <v-col>
          <div class="borderVerticalLine d-flex align-center">
            <h3 class="tw-text-5xl tw-font-bold ml-5" style="color: #282828">
              {{ alljobs ? "All Jobs" : "Recent Jobs" }}
            </h3>
          </div>
        </v-col>

        <v-col align="end" class="jobTabs">
          <v-tabs
            light
            center-active
            class="d-flex justify-end tabsCustom"
            color="#4c2e8b"
          >
            <v-tab class="text-capitalize">Featured</v-tab>
            <v-tab class="text-capitalize">Remotely</v-tab>
            <v-tab class="text-capitalize">Part Time</v-tab>
            <v-tab class="text-capitalize">Full Time</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col v-if="!compactView" cols="3">
          <v-card class="my-2" flat>
            <div
              class="text-center secondary pa-3 white--text tw-text-xl tw-font-semibold"
            >
              Job Title
            </div>
            <v-card-text>
              <div class="d-flex justify-space-between align-center">
                <v-checkbox :label="`Accounts`"></v-checkbox>
                <span>15</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col
          class="tw-overflow-auto"
          :class="compactView ? '' : 'max__height'"
          :cols="compactView ? 12 : 9"
        >
          <section>
            <v-card
              outlined
              rounded="lg"
              v-for="(job, index) in slicedJobsArray"
              :key="`job__${index}`"
              class="d-flex align-center flex-wrap justify-space-between py-2 my-2 pa-4 tw-cursor-pointer"
            >
              <div class="d-flex flex-wrap align-center pa-1 text-capitalize">
                <v-img
                  contain
                  width="120"
                  height="120"
                  position="left"
                  src="img/Job_app_2.png"
                  class="tw-min-w-32"
                />

                <div class="d-flex flex-column align-start mx-5">
                  <h3
                    class="tw-text-lg text-capitalize tw-max-w-xs tw-truncate tw-font-bold"
                  >
                    {{ job.title }}
                  </h3>
                  <h4
                    class="tw-text-sm text-capitalize primary--text tw-font-medium"
                  >
                    {{ job.rec }}
                  </h4>
                  <div
                    class="d-flex align-center tw-text-sm tw-font-semibold my-1"
                  >
                    <span>{{ 125 }}</span>
                    <span class="mx-2">|</span>
                    <span v-if="job.city"> {{ job.city }}, </span>
                    <span v-if="job.state"> &nbsp;{{ job.state }}, </span>
                    <span v-if="job.country"> &nbsp;{{ job.country }} </span>
                  </div>
                </div>
              </div>

              <div class="d-flex pa-1">
                <div
                  class="mr-4 mt-1 d-flex justify-center align-center"
                  style="
                    width: 35px;
                    border: 1px solid #ede3e3;
                    height: 31px;
                    border-radius: 4px;
                  "
                >
                  <span>
                    <v-icon aria-hidden="false" color="#4c2e8b">
                      mdi-heart
                    </v-icon>
                  </span>
                </div>
                <div class="d-flex flex-column">
                  <span class="tw-text-sm">
                    <v-btn depressed width="120" color="secondary">
                      <span class="text-capitalize tw-font-medium black--text"
                        >View Jobs</span
                      ></v-btn
                    >
                  </span>

                  <span class="text-capitalize tw-text-sm mt-3">
                    <v-btn depressed width="120" color="primary"
                      ><span class="text-capitalize tw-font-light"
                        >Apply Now</span
                      ></v-btn
                    >
                  </span>
                </div>
              </div>
            </v-card>
          </section>
        </v-col>
      </v-row>
    </v-container>

    <div class="d-flex justify-center my-2">
      <v-btn
        v-if="!(recentJobs.length === slicedJobsArray.length)"
        class="tw-text-lg text-capitalize tw-font-bold"
        width="180"
        height="50"
        depressed
        tile
        color="secondary"
        @click.prevent="exploreMore"
        >Explore More Jobs</v-btn
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    compactView: {
      type: Boolean,
      default: true,
    },
    alljobs: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      recentJobs: [],
      slicedJobsArray: [],
      jobs_length: 3,
      job_applications: [
        {
          img: "img/Job_app_1.png",
          title: "Matematics Tutors",
          organization: "Multination Organization Pvt.(Ltd).",
          salary: "$12K - 15K",
          address: "Virginia, USA, PO # 001003",
          status: "received",
          date: "Nov 06, 2020",
        },
        {
          img: "img/Job_app_2.png",
          title: "Web Developer",
          organization: "Online, Online Teaching jobs",
          salary: "$12K - 15K",
          address: "Virginia, USA, PO # 001003",
          status: "received",
          date: "Nov 06, 2020",
        },
        {
          img: "img/Job_app_3.png",
          title: "Accounts Teacher Required",
          organization: "Multination Organization Pvt.(Ltd).",
          salary: "$12K - 15K",
          address: "Virginia, USA, PO # 001003",
          status: "received",
          date: "Nov 06, 2020",
        },
      ],
    };
  },
  created() {
    this.get_job_data();
  },
  computed: {},
  methods: {
    get_job_data() {
      this.$api.jobService.get_offline_dashboard().then((response) => {
        this.recentJobs = [...response.data.recent_jobs];
        this.slicedJobsArray = [...this.recentJobs.slice(0, this.jobs_length)];
      });
    },
    exploreMore() {
      if (this.compactView) {
        this.$router.push("/jobs/recent");
      } else {
        this.jobs_length = this.jobs_length + 5;

        this.slicedJobsArray = [...this.recentJobs.slice(0, this.jobs_length)];
      }
    },
  },
};
</script>

<style lang="scss">
.max__height {
  height: 800px !important;
}
</style>
