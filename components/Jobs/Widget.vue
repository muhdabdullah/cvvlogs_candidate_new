<template>
  <v-container>
    <v-card
      class="mx-auto"
      rounded="xl"
      height="622"
      max-width="1180"
      elevation="15"
    >
      <v-card-text class="py-5 tw-h-full tw-overflow-auto tw-p-10 sm:tw-p-10">
        <v-row align="center" no-gutters>
          <v-col>
            <h2
              class="tw-text-xl max-sm:tw-text-sm text-capitalize tw-font-semibold"
            >
              My Job Applications
            </h2>
          </v-col>

          <v-col align="end">
            <v-btn to="/jobs" variant="text">
              <span
                class="tw-text-xl max-sm:tw-text-sm tw-font-semibold text-capitalize text-primary"
              >
                View All
              </span>
            </v-btn>
          </v-col>
        </v-row>

        <div class="d-flex flex-column">
          <div
            v-for="(job, index) in job_applications"
            :key="`job__${index}`"
            class="d-flex align-center flex-wrap justify-space-between py-1 my-5 tw-cursor-pointer"
          >
            <div class="d-flex flex-wrap align-center pa-1">
              <nuxt-img
                fit="contain"
                width="120"
                quality="100"
                :src="job.img"
                class="tw-min-w-32"
              >
              </nuxt-img>

              <div class="d-flex flex-column align-start mx-5">
                <h3 class="tw-text-lg tw-font-extrabold">
                  {{ job.title }}
                </h3>
                <h4 class="tw-text-sm text-primary tw-font-bold">
                  {{ job.organization }}
                </h4>
                <div class="d-flex align-center tw-text-sm tw-font-bold my-1">
                  <span>{{ job.salary }}</span>
                  <span class="mx-2">|</span>
                  <span>
                    {{ job.address }}
                  </span>
                </div>
              </div>
            </div>

            <div class="d-flex align-center justify-center pa-1">
              <span class="text-grey tw-text-sm">
                <v-icon size="small" icon="mdi-calendar-month"></v-icon>
                {{ job.date }}
              </span>

              <span class="text-capitalize text-grey tw-text-sm ml-2">
                <v-icon size="small" icon="mdi-calculator"></v-icon>
                {{ job.status }}
              </span>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const job_applications = ref([
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
]);
</script>
