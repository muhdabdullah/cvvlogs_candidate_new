<template>
  <v-container class="pa-0 tw-h-full">
    <v-row align="start">
      <v-col>
        <v-card color="grey lighten-3" class="my-5" outlined>
          <v-card-text class="tw-font-bold primary--text">
            <h3 class="tw-text-5xl tw-font-bold">Search for Jobs</h3>
            <p class="tw-text-base tw-font-semibold">
              Enter the following info to get the most suitable jobs
            </p>
            <v-row>
              <v-col cols="9">
                <v-text-field
                  v-model="filter.keyword"
                  append-icon="mdi-magnify secondary rounded-xl pa-1 "
                  placeholder="Job Title / Keyword"
                  label="Keyword"
                  background-color="white"
                  single-line
                  outlined
                  clearable
                  autofocus
                >
                </v-text-field>
              </v-col>
              <v-col cols="3">
                <v-combobox
                  prepend-inner-icon="mdi-briefcase"
                  background-color="white"
                  :items="job_type_list"
                  v-model="filter['work_level_id']"
                  multiple
                  item-text="name"
                  item-value="id"
                  label=" Job Type"
                  single-line
                  placeholder="Select Job Type"
                  small-chips
                  deletable-chips
                  clearable
                  outlined
                  class="mr-1"
                ></v-combobox>
              </v-col>
            </v-row>
            <div class="d-flex align-center justify-space-between">
              <v-combobox
                v-model="selected_state"
                background-color="white"
                prepend-inner-icon="mdi-map-marker"
                :items="searchData.state"
                item-text="state_name"
                item-value="state_id"
                label="State/Province"
                placeholder="Select State"
                outlined
                hide-details
                single-line
                class="mr-1"
                clearable
                @input="select_state"
                @click:clear="clear_state"
              ></v-combobox>
              <v-combobox
                v-model="filter['city_id']"
                background-color="white"
                prepend-inner-icon="mdi-map-marker"
                :items="selected_state && selected_state.cities"
                :disabled="
                  selected_state &&
                  selected_state &&
                  selected_state.cities.length == 0
                "
                item-text="city_name"
                item-value="city_id"
                small-chips
                deletable-chips
                label="City"
                clearable
                multiple
                hide-details
                single-line
                outlined
                class="mr-1"
              ></v-combobox>
              <v-combobox
                v-model="filter['industry_id']"
                background-color="white"
                prepend-inner-icon="mdi-pencil"
                :items="job_categories"
                single-line
                small-chips
                deletable-chips
                item-value="id"
                item-text="name"
                label="Industry"
                hide-details
                multiple
                clearable
                outlined
                class="mr-1"
              ></v-combobox>
              <v-btn
                :loading="job_list_loading"
                depressed
                height="56"
                class="secondary"
                @click="get_job_list"
                >Search</v-btn
              >
            </div>
          </v-card-text>
        </v-card>

        <div
          v-if="searchData && searchData.previous_searches"
          class="d-flex justify-space-between"
        >
          <div>
            <p class="primary--text tw-font-bold">Recent searches:</p>
            <div class="d-flex align-center">
              <template v-for="n in searchData.previous_searches">
                <v-chip
                  v-if="n.keyword"
                  :key="n.id"
                  @click="filter.keyword = n.keyword"
                  class="mx-1"
                  small
                  ><v-icon small class="mr-1" color="primary">
                    mdi-history
                  </v-icon>
                  <span class="tw-font-semibold">{{ n.keyword }}</span>
                </v-chip>
              </template>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="my-5">
      <v-col cols="2">
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
              :max="filter.max_salary"
              :min="filter.min_salary"
              v-model="salary_value"
              hide-details
            ></v-range-slider>
            <div class="tw-font-medium tw-text-lg black--text">
              {{ salary_value[0] }}$ - {{ salary_value[1] }}$
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="10">
        <div class="mb-10" v-if="job_list_loading">
          <v-skeleton-loader
            v-for="i in 2"
            :key="i"
            height="80"
            type="card"
            class="py-2 my-2 pa-4"
          ></v-skeleton-loader>
        </div>

        <div
          class="d-flex align-center justify-center tw-h-full"
          v-else-if="
            job_list_data &&
            job_list_data.data &&
            job_list_data.data.length == 0
          "
        >
          <h1 class="tw-text-4xl grey--text text-center tw-font-semibold my-5">
            No jobs found.
          </h1>
        </div>

        <JobsCard
          v-else
          v-for="(job, index) in job_list_data.data"
          :key="`job__${index}__${job.id}`"
          :jobDetail="job"
        />
      </v-col>
    </v-row>

    <div
      v-if="job_list_data && job_list_data.data && job_list_data.data.length"
      class="ma-5 text-center"
    >
      <v-pagination
        total-visible="7"
        color="secondary"
        v-model="filter.page"
        :length="
          (job_list_data &&
            job_list_data.links &&
            job_list_data.links.length) ||
          4
        "
        circle
        @input="get_job_list"
      ></v-pagination>
      <small class="tw-font-bold black--text"
        >Showing {{ job_list_data.per_page }} results of
        {{ job_list_data.total }}</small
      >
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      primary: "#8a63de",
      job_type_list: [
        { id: 1, name: "Full Time" },
        { id: 2, name: "Part Time" },
        { id: 3, name: "Freelance" },
        { id: 4, name: "Permanent" },
        { id: 5, name: "Fixed Term" },
        { id: 6, name: "Remote Working" },
      ],
      searchData: [],
      job_list_data: [],
      selected_state: {
        cities: [],
        state_name: null,
        state_id: null,
      },
      selected_city: {
        city_id: null,
        city_name: null,
      },
      selected_experience: null,
      selected_industry: null,
      keyword: null,
      job_list_loading: false,
      salary_value: [0, 1000000],
      filter: {
        work_level_id: null,
        country_id: null,
        city_id: null,
        industry_id: null,
        min_salary: 0,
        max_salary: 100000,
        featured: null,
        limit: null,
        keyword: null,
        page: null,
      },
    };
  },
  async created() {
    this.get_search_data();
  },
  computed: {
    job_categories() {
      if (this.$store.getters["get_jobs_by_industry"]) {
        return this.$store.getters["get_jobs_by_industry"];
      }
      return [];
    },
  },
  methods: {
    async get_job_list() {
      this.job_list_loading = true;

      // Cloning Filter so it doesnt changes value on selector as we have used as v-model on
      let params = Object.assign({}, this.filter);

      params["state_id[]"] = this.selected_state?.state_id;
      params.work_level_id = params.work_level_id?.map((row) => row.id);
      params.city_id = params.city_id?.map((row) => row.city_id);
      params.industry_id = params.industry_id?.map((row) => row.id);
      params.min_salary = this.salary_value[0];
      params.max_salary = this.salary_value[1];

      this.$api.jobService
        .get_job_list(params)
        .then((response) => {
          this.job_list_data = response?.data;

          this.filter.page = response?.data?.current_page;
        })
        .finally(() => {
          this.job_list_loading = false;
        });
    },
    async get_search_data() {
      await this.$api.jobService.search_data_get().then((response) => {
        this.searchData = response.data;
      });
    },
    clear_state() {
      this.selected_state = {
        ...this.selected_state,
        state_name: null,
        state_id: null,
      };
    },
    select_state(state) {
      this.selected_state = state;
      // Clear city filter
      this.filter.city_id = null;
    },
    async serchingJob() {
      const formData = {
        city: this.city,
        exp: this.exp?.id,
        ind: this.ind.id,
        keyword: this.keyword,
        state: this.state?.state_id,
      };
      await this.$api.jobService.searchJob(formData).then((response) => {
        return response;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
