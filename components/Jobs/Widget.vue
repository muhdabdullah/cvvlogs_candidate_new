<template>
  <v-container>
    <v-card class="mx-auto" rounded="xl" height="622" max-width="1180" flat>
      <v-card-text class="py-5 tw-h-full tw-overflow-auto tw-p-10 sm:tw-p-10">
        <!-- <div
          v-for="(job, index) in this.$store.getters['getRecentJobs']"
          :key="`job__${index}`"
          class="d-flex flex-column"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              outlined
              :elevation="hover ? 2 : 0"
              :class="{ 'on-hover': hover }"
              rounded="xl"
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
              >
              </v-img>

                <div class="d-flex flex-column align-start mx-5">
                  <h3 class="tw-text-lg tw-font-extrabold">
                    {{ job.title }}
                  </h3>
                  <h4 class="tw-text-sm primary--text tw-font-bold">
                    {{ job.rec }}
                  </h4>
                  <div class="d-flex align-center tw-text-sm tw-font-bold my-1">
                    
                    <span v-if="job.city"> {{ job.city }}, </span>
                    <span v-if="job.state"> &nbsp;{{ job.state }}, </span>
                    <span v-if="job.country"> &nbsp;{{ job.country }} </span>
                  </div>
                </div>
              </div>

              <div class="d-flex align-center justify-center pa-1">
                <span class="grey--text tw-text-sm">
                  <v-icon size="small">mdi-calendar-month</v-icon>
                  {{ job.date }}
                </span>

                <span class="text-capitalize grey--text tw-text-sm ml-2">
                  <v-icon size="small">mdi-calculator</v-icon>
                  {{ job.status }}
                </span>
              </div>
            </v-card>
          </v-hover>
        </div> -->

        <v-card class="mx-auto" max-width="1170" flat>
          <v-card-title>
            <LayoutTitle title="Recent Jobs" route="/jobs/recent" />
          </v-card-title>
          <v-card-text>
            <v-row v-if="recentJobs && recentJobs.length" dense>
              <v-col
                cols="12"
                md="4"
                lg="4"
                xl="4"
                v-for="(job, index) in recentJobs"
                :key="`all__jobs__${index}`"
              >
                <v-card
                  @click="
                    $router.push({
                      name: 'jobs-id',
                      params: {
                        id: job.id,
                      },
                    })
                  "
                  max-width="300"
                  outlined
                >
                  <v-card-text>
                    <h3
                      class="
                        text-truncate
                        tw-text-md tw-font-semibold
                        black--text
                      "
                    >
                      {{ job.title }}
                    </h3>
                    <h4
                      v-if="Helper.show_recruiter(job.rec)"
                      class="
                        text-truncate text-capitalize
                        tw-text-sm
                        primary--text
                        tw-font-medium
                      "
                    >
                      {{ job.rec }}
                    </h4>
                    <h6>
                      <div
                        class="
                          d-flex
                          align-center
                          tw-text-xs tw-font-normal
                          my-1
                        "
                      >
                        <v-icon small class="mr-1">mdi-map-marker</v-icon>
                        <span v-if="job.city"> {{ job.city }}, </span>
                        <span v-if="job.state"> &nbsp;{{ job.state }}, </span>
                        <span v-if="job.country">
                          &nbsp;{{ job.country }}
                        </span>
                      </div>
                    </h6>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row v-else-if="recentJobs && recentJobs.length == 0">
              <v-col cols="12">
                <h1
                  class="
                    tw-text-2xl
                    grey--text
                    text-center
                    tw-font-semibold
                    my-5
                  "
                >
                  No recent jobs.
                </h1>
              </v-col>
            </v-row>

            <v-row v-else>
              <v-col v-for="i in 4" :key="i" cols="12" md="3" lg="3" xl="3">
                <v-skeleton-loader
                  width="265"
                  height="78"
                  type="image"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto" max-width="1170" flat>
          <v-card-title>
            <LayoutTitle title="All Jobs" route="/jobs/all" />
          </v-card-title>
          <v-card-text>
            <v-row v-if="all_Jobs && all_Jobs.length" dense>
              <v-col
                cols="12"
                md="3"
                lg="3"
                xl="3"
                v-for="(job, index) in all_Jobs"
                :key="`all__jobs__${index}`"
              >
                <v-card
                  @click="
                    $router.push({
                      name: 'jobs-id',
                      params: {
                        id: job.id,
                      },
                    })
                  "
                  max-width="300"
                  outlined
                >
                  <v-card-text>
                    <h3
                      class="
                        text-capitalize text-truncate
                        tw-text-md tw-font-semibold
                        black--text
                      "
                    >
                      {{ job.job_title }}
                    </h3>
                    <h4
                      v-if="Helper.show_recruiter(job.rec)"
                      class="
                        text-capitalize text-truncate
                        tw-text-sm
                        primary--text
                        tw-font-medium
                      "
                    >
                      {{ job.rec }}
                    </h4>
                    <h6>
                      <div
                        class="
                          d-flex
                          align-center
                          tw-text-xs tw-font-normal
                          my-1
                          text-truncate
                        "
                      >
                        <v-icon small class="mr-1">mdi-map-marker</v-icon>
                        <span v-if="job.city"> {{ job.city }}, </span>
                        <span v-if="job.state"> &nbsp;{{ job.state }}, </span>
                        <span v-if="job.country">
                          &nbsp;{{ job.country }}
                        </span>
                      </div>
                    </h6>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row v-else-if="all_Jobs && all_Jobs.length == 0">
              <v-col cols="12">
                <h1
                  class="
                    tw-text-2xl
                    grey--text
                    text-center
                    tw-font-semibold
                    my-5
                  "
                >
                  No jobs.
                </h1>
              </v-col>
            </v-row>

            <v-row v-else>
              <v-col v-for="i in 4" :key="i" cols="12" md="3" lg="3" xl="3">
                <v-skeleton-loader
                  width="265"
                  height="78"
                  type="image"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import helperFunc from "@/utils/helper";

export default {
  data() {
    return {
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
  computed: {
    Helper() {
      return helperFunc;
    },
    recentJobs() {
      let data = [...this.$store.getters["getRecentJobs"]].splice(0, 8);
      return data;
    },
    all_Jobs() {
      let data = [...this.$store.getters["getAllJobs"]].splice(0, 8);
      return data;
    },
  },
};
</script>


<style lang="scss" scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
</style>
