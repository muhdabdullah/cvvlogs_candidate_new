<template>
  <v-container class="pa-0 tw-h-full">
    <v-row align="start">
      <v-col>
        <h1 class="searchHead">Search for Jobs</h1>
        <p>Enter the following info to get the most suitable jobs</p>
        <v-text-field
          v-model="filter.keyword"
          append-icon="mdi-magnify secondary rounded-xl pa-1 "
          placeholder="Job Title / Keyword"
          label="Keyword"
          outlined
          clearable
        >
        </v-text-field>
        <div class="d-flex justify-space-between flex-wrap">
          <v-combobox
            v-model="selected_state"
            prepend-inner-icon="mdi-map-marker"
            :items="searchData.state"
            item-text="state_name"
            item-value="state_id"
            label="State/Province"
            placeholder="Select State"
            outlined
            class="mr-1"
            @input="select_state"
          ></v-combobox>
          <v-combobox
            v-model="filter['city_id']"
            prepend-inner-icon="mdi-map-marker"
            :items="selected_state.cities"
            :disabled="!selected_state && selected_state.cities"
            item-text="city_name"
            item-value="city_id"
            label="City"
            multiple
            outlined
            class="mr-1"
          ></v-combobox>
          <v-combobox
            v-model="filter['industry_id']"
            prepend-inner-icon="mdi-pencil"
            :items="searchData.industries"
            item-text="name"
            label="Industry"
            multiple
            outlined
            class="mr-1"
          ></v-combobox>
          <v-combobox
            prepend-inner-icon="mdi-briefcase"
            label="Experience"
            :items="searchData.experiences"
            item-text="name"
            item-value="id"
            multiple
            v-model="filter['work_level_id']"
            outlined
          ></v-combobox>
        </div>
        <div class="d-flex justify-space-between">
          <div>
            <p class="primary--text tw-font-bold">Recent search:</p>
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
          <v-btn
            :loading="job_list_loading"
            class="secondary"
            @click="get_job_list"
            >Search</v-btn
          >
        </div>
      </v-col>
    </v-row>

    <v-row class="my-5">
      <v-col>
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
      searchData: [],
      job_list_data: [],
      selected_state: {
        cities: [],
        state_name: null,
      },
      selected_city: {
        city_id: null,
        city_name: null,
      },
      selected_experience: null,
      selected_industry: null,
      keyword: null,
      job_list_loading: false,
      filter: {
        "work_level_id[]": null,
        "country_id[]": null,
        "city_id[]": null,
        "industry_id[]": null,
        min_salary: null,
        max_salary: null,
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
  methods: {
    async get_job_list() {
      this.job_list_loading = true;
      this.$api.jobService
        .get_job_list(this.filter)
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
    select_state(state) {
      this.selected_state = state;
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
$primary: #5d378d;
.searchHead {
  color: $primary;
  font-size: 2.5rem !important;
  font-weight: bold !important;
}
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
