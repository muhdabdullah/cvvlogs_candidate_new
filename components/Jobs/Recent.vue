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

        <v-col align="right" class="jobTabs">
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
        <!-- <v-col v-if="!compactView" cols="3">
          <v-card class="my-2" flat>
            <div
              class="
                text-center
                secondary
                pa-3
                white--text
                tw-text-xl tw-font-semibold
              "
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
        </v-col> -->

        <v-col
          class="tw-overflow-auto pa-4"
          :class="compactView ? '' : 'max__height'"
          :cols="12"
        >
          <section>
            <div v-if="!slicedJobsArray.length">
              <v-skeleton-loader
                v-for="i in 3"
                :key="i"
                height="100"
                type="card"
                class="py-2 my-2 pa-4"
              ></v-skeleton-loader>
            </div>

            <JobsCard
              v-for="(job, index) in slicedJobsArray"
              :key="`job__${index}`"
              :jobDetail="job"
            />
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
  computed: {
    AuthID() {
      if (this.$store.getters["auth/get_authId"]) return true;
    },
  },
  methods: {
    viewJob() {
      if (this.AuthID) {
        this.$router.push({
          name: "jobs-id",
          params: {
            id: job.id,
          },
        });
      }
    },
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

<style lang="scss" scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
</style>
