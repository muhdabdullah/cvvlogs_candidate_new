<template>
  <v-container fluid class="pa-0">
    <v-row align="start" no-gutters>
      <v-col cols="12">
        <LayoutMainPageHeader class="tw-z-30" />

        <section v-if="AuthID" class="dash__sec">
          <!-- Profile Card -->
          <ProfileCard
            :userData="authData"
            class="tw-relative tw-bottom-10 tw-z-10"
          />

          <!-- Job Application -->
          <JobsWidget
            :recent_jobs_loader="recent_jobs_loader"
            :all_jobs_loader="all_jobs_loader"
            :all_jobs_data="all_Jobs"
          />
        </section>

        <div v-else>
          <!-- Hide as per requirement -->
          <!-- <section class="mt-5">
            <v-img contain class="" width="100%" src="img/homeCircleImg.png" />
          </section> -->

          <!-- Add Resume Section - Hide as instructed. -->
          <!-- <section class="mt-15">
            <div class="tw-relative">
              <v-img
                class="page__div"
                contain
                width="100%"
                src="img/homeAddResume.png"
              />
              <div
                class="
                  d-flex
                  justify-space-around
                  align-center
                  tw-absolute tw-top-0 tw-w-full tw-h-full tw-text-3xl
                  white--text
                  tw-font-bold
                "
              >
                <span class="tw-leading-relaxed"
                  >Get the best Teaching jobon your Email.<br />Add Resume
                  Now!</span
                >
                <span>
                  <v-btn
                    tile
                    color="secondary"
                    height="64"
                    width="224"
                    depressed
                  >
                    <span class="text-capitalize tw-font-2xl tw-font-medium"
                      >+ Add Resume</span
                    >
                  </v-btn>
                </span>
              </div>
            </div>
          </section> -->

          <v-container class="custom_wd_container">
            <section class="mt-10 container">
              <LayoutSectionHeader
                viewAllRoute="/jobs"
                text="Jobs by Category"
              />

              <v-row
                v-if="job_by_Industry && job_by_Industry.length"
                dense
                class="d-flex justify-lg-space-between my-5"
              >
                <v-col
                  sm="3"
                  v-for="(job, index) in jobs_by_industry_sliced"
                  :key="`job__${index}`"
                >
                  <v-hover v-slot="{ hover }">
                    <v-card
                      @click="move_to_search(job)"
                      :elevation="hover ? 12 : 5"
                      :class="{ 'on-hover': hover }"
                      color=""
                      rounded="lg"
                      :height="$vuetify.breakpoint.mobile ? '100%' : 60"
                      class="
                        gradient-btn
                        d-flex
                        align-center
                        justify-start
                        pa-4
                        tw-cursor-pointer
                      "
                    >
                      <h3 class="md:tw-text-sm tw-text-xs tw-font-semibold">
                        {{ job.name }} ({{ job.job_count }})
                      </h3>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>

              <v-row v-else dense class="d-flex justify-lg-space-between my-5">
                <v-col v-for="i in 4" :key="`sekelton__${i}`">
                  <v-skeleton-loader
                    height="60"
                    type="image"
                  ></v-skeleton-loader>
                </v-col>
              </v-row>
            </section>

            <!-- Recent Jobs -->
            <JobsRecent />

            <!-- Blogs Component -->
            <!-- <BlogWidget /> -->
          </v-container>

          <!-- <LayoutCustomerReview /> -->

          <v-container class="custom_wd_container">
            <section class="mt-15">
              <v-img
                contain
                width="100%"
                src="img/notification_app.png"
                lazy-src="img/notification_app.png"
              />
            </section>
          </v-container>

          <!-- <section class="mt-15">
            <header class="tw-relative">
              <v-img
                class="page__header"
                width="100%"
                contain
                src="img/homeJoinCompanyImg.png"
              />
              <div
                class="
                  tw-absolute tw-top-0 tw-w-full tw-h-full
                  d-flex
                  flex-column
                  justify-center
                  align-center
                "
              >
                <h1
                  class="
                    md:tw-text-6xl
                    tw-text-base
                    text-center
                    white--text
                    tw-font-bold
                    px-16
                    py-10
                  "
                >
                  Join Thousands of Companies <br />
                  That Rely on Us!
                </h1>
                <h1
                  class="
                    tw-text-3xl tw-max-w-6xl
                    text-center
                    white--text
                    tw-font-normal
                    px-16
                    py-10
                  "
                >
                  We offers a way to completely optimize your entire recruiting
                  process. Find better candidatess. Find better candidates,
                  conduct more focused interviews, and make data-driven hiring
                  decisions.
                </h1>
                <v-btn
                  class="text-capitalize"
                  color="secondary"
                  height="64"
                  @click="$nuxt.$emit('init-login-dialog')"
                  depressed
                  tile
                  width="224"
                >
                  Registered Now</v-btn
                >
              </div>
            </header>
          </section> -->
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      job_by_Industry: [],
      recent_jobs_loader: false,
      all_jobs_loader: false,
      all_Jobs: [],
    };
  },
  mounted() {
    this.get_home_data();

    if (this.AuthID) {
      this.get_job_data();
    }
  },
  computed: {
    jobs_by_industry_sliced() {
      let arr = [...this.job_by_Industry];
      if (arr?.length) {
        arr.sort((a, b) => {
          // Sort array in descending order.
          return b.job_count - a.job_count;
        });
      }
      return arr.slice(0, 16);
    },
    dashboardData() {
      return this.$store.getters["getDashboardData"];
    },
    authData() {
      return this.$store.getters["auth/get_userData"];
    },
    AuthID() {
      if (this.$store.getters["auth/get_authId"]) return true;
    },
  },
  methods: {
    move_to_search(job) {
      this.$store.dispatch("reset_search_jobs_data");
      this.$router.push({
        name: "search",
        params: {
          industry_id: job,
        },
      });
    },
    get_job_data() {
      this.all_jobs_loader = true;
      this.$api.jobService
        .get_job_exclude()
        .then((response) => {
          this.all_Jobs = response?.data?.job;
          this.$store.dispatch("setAllJobs", response.data.job);
        })
        .finally(() => {
          this.all_jobs_loader = false;
        });
    },
    get_home_data() {
      this.recent_jobs_loader = true;
      this.$api.jobService
        .get_offline_dashboard()
        .then((response) => {
          this.job_by_Industry = [...response?.data?.jobs_by_industry];
          if (response.data) {
            // Store ip_info
            if (response.data?.ip_info)
              this.$store.dispatch("auth/set_ip_info", response.data.ip_info);
            this.$store.dispatch(
              "set_jobs_by_industry",
              response.data.jobs_by_industry
            );
            this.$store.dispatch("setDashboardData", response.data);
            this.$store.dispatch("setRecentJobs", response.data.recent_jobs);
          }
        })
        .finally(() => {
          this.recent_jobs_loader = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: #5d378d;
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.on-hover {
  border: 3px solid $primary;
}

.v-card:not(.on-hover) {
  // opacity: 0.6;
}
</style>

<style lang="scss">
.rounded__rect {
  border-radius: 40px !important;
}

.img__gray {
  filter: grayscale(60%);
  filter: brightness(50%);
}

.borderVerticalLine {
  border-left: 12px solid #4c2e8b;
  height: 71px;
}

.jobTabs .v-item-group {
  border: 1px solid #ede3e3;
  border-radius: 8px;
}

.tabsCustom .v-tab--active {
  background: #4c2e8b !important;
  color: #fff !important;
  border-radius: 4px;
}
</style>

