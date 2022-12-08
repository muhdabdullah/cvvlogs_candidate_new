<template>
  <section>
    <LayoutMainPageHeader />
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
    if (this.$route.path == "/jobs") this.$router.push("/jobs/all");
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
  methods: {},
};
</script>

<style lang="scss" >
.v-label.theme--light {
  color: black;
  font-size: 0.9rem;
}
</style>
