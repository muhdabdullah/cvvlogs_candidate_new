<template>
  <section>
    <LayoutMainPageHeader />

    <!-- Recent Jobs -->
    <JobsRecent :compactView="false" />
  </section>
</template>

<script>
export default {
  data() {
    return {
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
    this.get_job_data();
  },
  methods: {
    get_job_data() {
      this.$api.jobService.get_offline_dashboard().then((response) => {
        this.recentJobs = [...response.data.recent_jobs];
      });
    },
  },
};
</script>

<style>
</style>
