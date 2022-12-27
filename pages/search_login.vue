<template>
  <v-container class="pa-0">
    <v-row align="start">
      <v-col class="ma-16">
        <h1 class="searchHead">Search for Jobs</h1>
        <p>Enter the following info to get the most suitable jobs</p>
        <v-text-field
          v-model="keyword"
          prepend-inner-icon="mdi-search"
          label="Job Title"
          solo
          clearable
        >
        </v-text-field>
        <div class="d-flex">
          <v-combobox
            v-model="state"
            prepend-inner-icon="mdi-map-marker"
            :items="searchData.state"
            item-text="state_name"
            label="State/Province"
            solo
          ></v-combobox>
          <v-combobox
            v-model="city"
            prepend-inner-icon="mdi-map-marker"
            :items="items"
            label="City"
            solo
          ></v-combobox>
          <v-combobox
            prepend-inner-icon="mdi-pencil"
            :items="searchData.industries"
            item-text="name"
            v-model="ind"
            label="Industry"
            solo
          ></v-combobox>
          <v-combobox
            prepend-inner-icon="mdi-briefcase"
            label="Experience"
            :items="searchData.experiences"
            item-text="name"
            v-model="exp"
            solo
          ></v-combobox>
        </div>
        <div class="d-flex justify-space-between">
          <div>
            <p class="primary--text tw-font-bold">Recent Searchs:</p>
            <div v-for="n in searchData.previous_searches" :key="n.id">
              <v-icon large :color="primary"> mdi-history </v-icon>
              {{ n.keyword }}
            </div>
          </div>
          <v-btn class="secondary" @click="serchingJob()">Search</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    async asyncData({ params,$api, store }) {
      const searchData = await $api.jobService
        .search_data_get()
        .then((response) => {
          return response.data
        });

      return { searchData };
    },
  data() {
    return {
        primary: '#8a63de',
        searchData: [],
      recentSearchList: ['customer','accountant','freelance','Freelance','IT'],
      items: ["Programming", "Design", "Vue", "Vuetify"],
      city:null,
      exp:null,
      ind:null,
      keyword:null,
      state:null,
    };
  },
  methods: {
    async serchingJob() {
      const formData={
        "city": this.city,
        "exp": this.exp?.id,
        "ind": this.ind.id,
        "keyword": this.keyword,
        "state": this.state?.state_id
      }
        await this.$api.jobService
        .searchJob(formData)
        .then((response) => {
            return response
        })
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
