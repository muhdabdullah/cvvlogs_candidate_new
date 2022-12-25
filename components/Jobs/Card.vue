<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card
        @click="viewJob"
        :elevation="hover ? 6 : 0"
        :class="{ 'on-hover': hover }"
        outlined
        rounded="lg"
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
        <div class="d-flex flex-wrap align-center pa-1 text-capitalize">
          <div class="d-flex flex-column align-start mx-5">
            <h3
              class="
                tw-text-lg
                text-capitalize
                tw-max-w-xs tw-truncate tw-font-bold
              "
            >
              {{ jobDetail.title || jobDetail.job_title }}
            </h3>
            <h4
              v-if="Helper.show_recruiter(jobDetail.rec)"
              class="tw-text-sm text-capitalize primary--text tw-font-medium"
            >
              {{ jobDetail.rec }}
            </h4>
            <div class="d-flex align-center tw-text-sm tw-font-semibold my-1">
              <span v-if="jobDetail.city"> {{ jobDetail.city }}, </span>
              <span v-if="jobDetail.state"> &nbsp;{{ jobDetail.state }}, </span>
              <span v-if="jobDetail.country">
                &nbsp;{{ jobDetail.country }}
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
              <v-icon aria-hidden="false" color="#4c2e8b"> mdi-heart </v-icon>
            </span>
          </div>
          <div class="d-flex flex-column">
            <span class="tw-text-sm">
              <v-btn @click="viewJob" depressed width="120" color="secondary">
                <span class="text-capitalize tw-font-medium black--text"
                  >View Job</span
                ></v-btn
              >
            </span>

            <span class="text-capitalize tw-text-sm mt-3">
              <v-btn :disabled="!AuthID" depressed width="120" color="primary"
                ><span class="text-capitalize tw-font-light"
                  >Apply Now</span
                ></v-btn
              >
            </span>
          </div>
        </div>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import helperFunc from "@/utils/helper";
export default {
  props: {
    jobDetail: {
      type: Object,
    },
  },
  computed: {
    Helper() {
      return helperFunc;
    },
    AuthID() {
      if (this.$store.getters["auth/get_authId"]) return true;
    },
  },
  methods: {
    viewJob() {
      this.$router.push({
        name: "jobs-id",
        params: {
          id: this.jobDetail.id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
</style>