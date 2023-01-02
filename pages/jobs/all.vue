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
            <v-btn-toggle
              tile
              :rounded="false"
              color="primary"
              borderless
              multiple
              @change="get_job_list"
              v-model="filter.work_level_id"
            >
              <v-btn
                v-for="(btn, index) in job_type_list"
                :key="`toggle-${index + 1}`"
                small
                :value="btn.id"
              >
                {{ btn.name }}
              </v-btn>
            </v-btn-toggle>
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
                Job Category
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
                              :value="job.id"
                              v-model="child_industry_id_parent"
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
                            v-model="filter.industry_id"
                            :value="job_child.id"
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
                    :value="job.id"
                    v-model="filter.industry_id"
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
                    :value="location.state_id"
                    v-model="filter.state_id"
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

            <v-btn
              v-if="AuthID"
              @click.prevent="get_job_list"
              color="secondary"
              depressed
              block
              ><span class="text-capitalize tw-text-xl tw-font-bold"
                >Apply Filter</span
              ></v-btn
            >

            <!-- Salary Filter -->
            <!-- <v-card outlined class="my-2" flat>
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
            </v-card> -->
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
                v-else-if="recentJobs && recentJobs.length == 0"
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
                v-for="(job, index) in recentJobs"
                :key="`job__${index}__${job.id}`"
                :jobDetail="job"
              />
            </section>
          </v-col>
        </v-row>
      </v-container>

      <div v-if="recentJobs && recentJobs.length" class="ma-5 text-center">
        <v-pagination
          total-visible="7"
          color="secondary"
          v-model="filter.page"
          :length="
            jobs_search_data &&
            jobs_search_data.last_page &&
            jobs_search_data.last_page
          "
          circle
          @input="get_job_list"
        ></v-pagination>

        <small class="tw-font-bold black--text"
          >Showing
          {{ jobs_search_data.data && jobs_search_data.data.length }} results of
          {{ jobs_search_data.total }}</small
        >
      </div>

      <!-- <div class="d-flex justify-center my-2">
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
      </div> -->
    </section>
  </section>
</template>
  
  <script>
export default {
  data() {
    return {
      job_type_list: [
        { id: 1, name: "Full Time" },
        { id: 2, name: "Part Time" },
        { id: 3, name: "Freelance" },
        { id: 4, name: "Permanent" },
        { id: 5, name: "Fixed Term" },
        { id: 6, name: "Remote Working" },
      ],
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
      jobs_search_data: null,
      loading: false,
      child_industry_id_parent: [],
      filter: {
        work_level_id: [],
        country_id: null,
        city_id: null,
        state_id: [],
        industry_id: [],
        // min_salary: 0,
        // max_salary: 100000,
        featured: null,
        keyword: null,
        page: null,
        limit: 30,
      },
    };
  },
  created() {
    if (this.AuthID) {
      // this.get_job_data();
      this.get_job_list();

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
    async get_job_list() {
      this.loading = true;

      // Cloning Filter so it doesnt changes value on selector as we have used as v-model on
      let params = Object.assign({}, this.filter);

      params["state_id[]"] = this.selected_state?.state_id;
      params.city_id = params.city_id?.map((row) => row.city_id);
      //params.industry_id = params.industry_id?.map((row) => row.id);

      // Merging child_industry_id_parent with main industry arr.
      params.industry_id = params.industry_id.concat(
        this.child_industry_id_parent
      );

      // sending userId in payload.
      let userData = JSON.parse(localStorage.getItem("userData"));
      params.user_id = userData?.id;
      // params.min_salary = this.salary_value[0];
      // params.max_salary = this.salary_value[1];

      this.$api.jobService
        .get_job_list(params)
        .then((response) => {
          this.recentJobs = response?.data?.data;
          this.jobs_search_data = response?.data;
          this.filter.page = response?.data?.current_page;
        })
        .finally(() => {
          this.loading = false;
        });
    },
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
  