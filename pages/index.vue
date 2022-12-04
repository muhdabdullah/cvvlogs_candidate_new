<template>
  <v-container fluid class="pa-0">
    <v-row align="start" no-gutters>
      <v-col cols="12">
        <LayoutMainPageHeader class="tw-z-20" />

        <section v-if="AuthID" class="dash__sec">
          <!-- Profile Card -->
          <ProfileCard class="tw-relative tw-bottom-32 tw-z-30" />

          <!-- Job Application -->
          <JobsWidget />
        </section>

        <div v-else>
          <section class="mt-5">
            <v-img contain class="" width="100%" src="img/homeCircleImg.png" />
          </section>

          <section class="mt-10 container">
            <v-row align="center" no-gutters>
              <v-col>
                <h2 class="tw-text-4xl tw-font-bold" style="color: #282828">
                  Jobs by Category
                </h2>
              </v-col>

              <v-col align="end">
                <v-btn
                  to="/jobs"
                  width="160"
                  height="50"
                  depressed
                  color="secondary"
                >
                  <span
                    class="
                      tw-text-base
                      max-sm:tw-text-sm
                      font-weight-light
                      text-capitalize
                    "
                  >
                    View All
                  </span>
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-lg-space-between">
              <v-col
                sm="3"
                class=""
                v-for="(job, index) in job_by_Industry"
                :key="`job__${index}`"
              >
                <v-card
                  elevation="10"
                  rounded="lg"
                  class="
                    d-flex
                    align-center
                    justify-start
                    pa-4
                    tw-cursor-pointer
                  "
                >
                  <v-img
                    max-width="50"
                    height="50"
                    lazy-src="img/bankIcon.png"
                    src="img/bankIcon.png"
                    contain
                    class="mr-2"
                  />

                  <h3 class="tw-text-sm tw-font-semibold">
                    {{ job.name }} ({{ job.job_count }})
                  </h3>
                </v-card>
              </v-col>
            </v-row>
          </section>
          <section class="mt-15">
            <v-img
              contain
              width="100%"
              src="img/home_banner.png"
              lazy-src="img/home_banner.png"
            />
          </section>

        
            <v-card
              class="mx-auto"
              rounded="xl"
              height="622"
              max-width="1180"
              flat
            >
              <v-card-text
                class="py-5 tw-h-full tw-overflow-auto tw-p-10 sm:tw-p-10"
              >
                <v-row align="center" no-gutters>
                  <v-col>
                    <div class="borderVerticalLine d-flex align-center">
                      <h3
                        class="tw-text-5xl tw-font-bold ml-5"
                        style="color: #282828"
                      >
                        Recent Jobs
                      </h3>
                    </div>
                  </v-col>

                  <v-col align="end" class="jobTabs">
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

                <div class="d-flex flex-column">
                  <v-card
                    outlined
                    rounded="lg"
                    v-for="(job, index) in job_applications"
                    :key="`job__${index}`"
                    class="
                      d-flex
                      align-center
                      flex-wrap
                      justify-space-between
                      py-2
                      my-2
                      pa-4
                      tw-cursor-pointer
                    "
                  >
                    <div class="d-flex flex-wrap align-center pa-1">
                      <v-img
                        contain
                        width="120"
                        height="120"
                        position="left"
                        :src="job.img"
                        class="tw-min-w-32"
                      />

                      <div class="d-flex flex-column align-start mx-5">
                        <h3 class="tw-text-lg tw-font-bold">
                          {{ job.title }}
                        </h3>
                        <h4 class="tw-text-sm primary--text tw-font-medium">
                          {{ job.organization }}
                        </h4>
                        <div
                          class="
                            d-flex
                            align-center
                            tw-text-sm tw-font-semibold
                            my-1
                          "
                        >
                          <span>{{ job.salary }}</span>
                          <span class="mx-2">|</span>
                          <span>
                            {{ job.address }}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex pa-1">
                      <div
                        class="mr-4 mt-1 d-flex justify-center align-center"
                        style="
                          width: 35px;
                          border: 1px solid #ede3e3;
                          height: 31px;
                          border-radius: 4px;
                        "
                      >
                        <span>
                          <v-icon aria-hidden="false" color="#4c2e8b">
                            mdi-heart
                          </v-icon>
                        </span>
                      </div>
                      <div class="d-flex flex-column">
                        <span class="tw-text-sm">
                          <v-btn depressed width="120" color="secondary">
                            <span
                              class="text-capitalize tw-font-medium black--text"
                              >View Jobs</span
                            ></v-btn
                          >
                        </span>

                        <span class="text-capitalize tw-text-sm mt-3">
                          <v-btn depressed width="120" color="primary"
                            ><span class="text-capitalize tw-font-light"
                              >Apply Now</span
                            ></v-btn
                          >
                        </span>
                      </div>
                    </div>
                  </v-card>
                </div>
              </v-card-text>
            </v-card>
            <div class="d-flex justify-center mt-6">
              <v-btn
                class="tw-text-lg text-capitalize tw-font-bold"
                width="180"
                height="50"
                depressed
                color="secondary"
                >Explore More Jobs</v-btn
              >
            </div>
          </section>

          <!-- Recent Jobs -->
          <JobsRecent />

          <section class="mt-15">
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
          </section>

          <BlogWidget />

          <LayoutCustomerReview />

          <section class="mt-15">
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
                  depressed
                  tile
                  width="224"
                >
                  Registered Now</v-btn
                >
              </div>
            </header>
          </section>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

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

<script>
export default {
  data() {
    return {
      job_by_Industry: [
        {
          img: "img/bankIcon.png",
          title: "Banking",
        },
        {
          img: "img/telemarketing.png",
          title: "Telemarketing",
        },
        {
          img: "img/education.png",
          title: "Education",
        },
        {
          img: "img/architect.png",
          title: "Construction",
        },
      ],
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
    this.get_home_data();
  },
  computed: {
    AuthID() {
      if (this.$store.getters["auth/get_authId"]) return true;
    },
  },
  methods: {
    get_home_data() {
      this.$api.jobService.get_offline_dashboard().then((response) => {
        this.job_by_Industry = [...response.data.jobs_by_industry];
      });
    },
  },
};
</script>
