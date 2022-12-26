<template>
  <section>
    <LayoutMainPageHeader />
    <section>
      <v-container class="custom_wd_container">
        <v-row align="center" class="my-5">
          <v-col>
            <div class="borderVerticalLine d-flex align-center">
              <h3 class="tw-text-5xl tw-font-bold ml-5 black--text">
                All Jobs
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
          <v-col v-if="filter_data.industries.length" cols="3">
            <!-- Job Filter -->
            <v-card
              v-if="filter_data && filter_data.industries"
              outlined
              class="my-2"
              flat
            >
              <div
                class="
                  text-center
                  secondary
                  pa-3
                  white--text
                  tw-text-xl tw-font-semibold
                "
              >
                Job Industry
              </div>
              <v-card-text class="tw-overflow-auto tw-max-h-64">
                <div
                  v-for="(job, index) in job_categories"
                  :key="index"
                  class="d-flex align-center justify-space-between"
                >
                  <div
                    v-if="job && job.children && job.children.length"
                    class="tw-w-full"
                  >
                    <v-expansion-panels flat>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="d-flex pa-0">
                          <div class="d-flex align-center">
                            <v-checkbox
                              :label="`${job.name} (${job.children.length})`"
                              hide-details
                              color="primary"
                              class="my-1 black--text"
                            ></v-checkbox>
                          </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <v-checkbox
                            v-for="(job_child, job_child_index) in job.children"
                            :key="job_child_index"
                            :label="`${job_child.name} ${
                              job_child.job_count
                                ? `${job_child.job_count}`
                                : ''
                            }`"
                            hide-details
                            color="primary"
                            class="my-1 black--text"
                          ></v-checkbox>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </div>

                  <v-checkbox
                    v-else
                    :label="`${job.name} (${job.job_count})`"
                    hide-details
                    color="primary"
                    class="my-1 black--text"
                  ></v-checkbox>
                </div>
                <!-- <v-btn
                  v-if="
                    !(
                      filter_data.industries.length ===
                      filter_data.slicedIndustry.length
                    )
                  "
                  @click.prevent="explore_more_filter('industry')"
                  text
                  color="primary"
                  block
                  ><span class="text-capitalize tw-text-xl tw-font-bold"
                    >Explore More</span
                  ></v-btn
                > -->
              </v-card-text>
            </v-card>

            <!-- Location Filter -->
            <v-card
              v-if="
                filter_data && filter_data.state && filter_data.state.length
              "
              outlined
              class="my-2"
              flat
            >
              <div
                class="
                  text-center
                  secondary
                  pa-3
                  white--text
                  tw-text-xl tw-font-semibold
                "
              >
                Location
              </div>
              <v-card-text class="tw-overflow-auto tw-max-h-64">
                <div
                  v-for="(location, index) in filter_data.state"
                  :key="index"
                  class="d-flex align-center justify-space-between"
                >
                  <v-checkbox
                    :label="location.state_name"
                    hide-details
                    color="primary"
                    class="my-1 black--text"
                  ></v-checkbox>
                </div>
                <!-- <v-btn
                  v-if="
                    !(
                      filter_data.state.length ===
                      filter_data.slicedLocation.length
                    )
                  "
                  @click.prevent="explore_more_filter('location')"
                  text
                  color="primary"
                  block
                  ><span class="text-capitalize tw-text-xl tw-font-bold"
                    >Explore More</span
                  ></v-btn
                > -->
              </v-card-text>
            </v-card>

            <!-- Salary Filter -->
            <v-card outlined class="my-2" flat>
              <div
                class="
                  text-center
                  secondary
                  pa-3
                  white--text
                  tw-text-xl tw-font-semibold
                "
              >
                Salary
              </div>
              <v-card-text>
                <v-range-slider
                  :max="salary_range.max"
                  :min="salary_range.min"
                  v-model="salary_range.value"
                  hide-details
                ></v-range-slider>
                <div class="tw-font-medium tw-text-lg black--text">
                  {{ salary_range.value[0] }}$ - {{ salary_range.value[1] }}$
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            class="tw-overflow-auto"
            :class="'max__height'"
            :cols="filter_data && filter_data.industries.length ? 9 : 12"
          >
            <section>
              <div v-if="loading">
                <v-skeleton-loader
                  v-for="i in 3"
                  :key="i"
                  height="100"
                  type="card"
                  class="py-2 my-2 pa-4"
                ></v-skeleton-loader>
              </div>

              <div
                class="d-flex align-center justify-center tw-h-full"
                v-else-if="slicedJobsArray && slicedJobsArray.length == 0"
              >
                <h1
                  class="
                    tw-text-4xl
                    grey--text
                    text-center
                    tw-font-semibold
                    my-5
                  "
                >
                  No jobs.
                </h1>
              </div>

              <JobsCard
                v-else
                v-for="(job, index) in slicedJobsArray"
                :key="`job__${index}__${job.id}`"
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
  </section>
</template>
  
  <script>
export default {
  data() {
    return {
      exploreMoreOptions: {
        industryLength: 5,
        locationLength: 5,
      },
      filter_data: {
        state: [],
        industries: [],
        slicedIndustry: [],
        slicedLocation: [],
      },
      salary_range: {
        min: 100,
        max: 1000,
        value: [20, 400],
      },
      slicedJobsArray: [],
      jobs_length: 5,
      recentJobs: [],
      loading: false,
    };
  },
  created() {
    if (this.AuthID) {
      this.get_job_data();

      // Get Filter Data
      this.search_data_get();
    } else this.get_offline_dashboard();
  },
  computed: {
    AuthID() {
      if (this.$store.getters["auth/get_authId"]) return true;
    },
    job_categories() {
      if (this.$store.getters["get_jobs_by_industry"]) {
        return this.$store.getters["get_jobs_by_industry"];
      }
      return [];
    },
  },
  methods: {
    search_data_get() {
      this.$api.jobService.search_data_get().then((response) => {
        this.filter_data = {
          ...response.data,
          slicedIndustry: [
            ...response.data.industries.slice(
              0,
              this.exploreMoreOptions.industryLength
            ),
          ],
          slicedLocation: [
            ...response.data.state.slice(
              0,
              this.exploreMoreOptions.locationLength
            ),
          ],
        };
      });
    },
    get_offline_dashboard() {
      this.loading = true;
      this.$api.jobService
        .get_offline_dashboard()
        .then((response) => {
          this.recentJobs = [...response.data.recent_jobs];
          this.slicedJobsArray = [
            ...this.recentJobs.slice(0, this.jobs_length),
          ];
          this.filter_data = {
            ...this.filter_data,
            industries: response.data.jobs_by_industry,
          };
        })
        .finally(() => {
          this.loading = false;
        });
    },
    get_job_data() {
      this.loading = true;
      this.$api.jobService
        .get_job_exclude()
        .then((response) => {
          this.recentJobs = response.data.job;
          this.slicedJobsArray = [
            ...this.recentJobs.slice(0, this.jobs_length),
          ];
        })
        .finally(() => {
          this.loading = false;
        });
    },
    explore_more_filter(filter_name) {
      if (filter_name == "industry") {
        this.exploreMoreOptions.industryLength += 3;
        this.filter_data.slicedIndustry = [
          ...this.filter_data.industries.slice(
            0,
            this.exploreMoreOptions.industryLength
          ),
        ];
      } else if (filter_name == "location") {
        this.exploreMoreOptions.locationLength += 3;
        this.filter_data.slicedLocation = [
          ...this.filter_data.state.slice(
            0,
            this.exploreMoreOptions.locationLength
          ),
        ];
      }
    },
    exploreMore() {
      this.jobs_length = this.jobs_length + 5;
      this.slicedJobsArray = [...this.recentJobs.slice(0, this.jobs_length)];
    },
  },
};
</script>
  
  <style lang="scss" >
.v-label.theme--light {
  color: black;
  font-size: 0.9rem;
}
</style>
  