<template>
  <v-app>
    <LayoutHeader />
    <v-main>
      <v-container class="pa-0 tw-h-full" fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <LayoutFooter />
    <LayoutSnackbar />
  </v-app>
</template>

<script>
export default {
  name: "default_layout",
  created() {
    this.jobsByIndustry();

    if (localStorage.getItem("auth_id")) {
      this.get_job_data();

      let obj = {
        auth_id: localStorage.getItem("auth_id"),
      };

      let userData = JSON.parse(localStorage.getItem("userData"));

      if (userData) {
        obj = {
          ...obj,
          ...userData,
        };
      } else {
        obj.onlyID = true;
      }

      this.$store.dispatch("auth/set_authId", obj);
    }
  },
  computed: {},
  methods: {
    get_job_data() {
      this.$api.jobService.get_job_exclude().then((response) => {
        this.$store.dispatch("setAllJobs", response.data.job);
      });
    },
    jobsByIndustry() {
      this.$api.jobService.get_offline_dashboard().then((response) => {
        if (response.data) {
          this.$store.dispatch(
            "set_jobs_by_industry",
            response.data.jobs_by_industry
          );
          this.$store.dispatch("setDashboardData", response.data);
          this.$store.dispatch("setRecentJobs", response.data.recent_jobs);
        }
      });
    },
  },
};
</script>

<style>
.custom_wd_container {
  max-width: 1250px;
}

/* Scroll bars */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(158, 158, 158, 0.3);
  border-radius: 6px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  height: 8px;
  width: 6px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(158, 158, 158, 0.178);
  background-color: #b0b0b093;
}
</style>
