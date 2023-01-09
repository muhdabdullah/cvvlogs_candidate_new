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
          pa-xs-0 pa-lg-4
          tw-cursor-pointer
        "
      >
        <div class="d-flex flex-wrap align-center pa-1 text-capitalize">
          <div class="d-flex flex-column align-start mx-5">
            <h3
              :class="$vuetify.breakpoint.mobile ? 'tw-w-64' : 'tw-max-w-xl'"
              class="tw-text-lg text-capitalize tw-truncate tw-font-bold"
            >
              {{ jobDetail.title || jobDetail.job_title }}
            </h3>
            <h4
              v-if="Helper.show_recruiter(jobDetail.rec)"
              class="tw-text-sm text-capitalize primary--text tw-font-medium"
            >
              {{ jobDetail.rec }}
            </h4>
            <div
              :class="$vuetify.breakpoint.mobile ? 'tw-w-64' : 'tw-max-w-xl'"
              class="d-flex align-center tw-text-sm tw-font-semibold my-1"
            >
              <span class="tw-truncate" v-if="jobDetail.city">
                {{ jobDetail.city.name || jobDetail.city }},
              </span>
              <span class="tw-truncate" v-if="jobDetail.state">
                &nbsp;{{ jobDetail.state.name || jobDetail.state }},
              </span>
              <span class="tw-truncate" v-if="jobDetail.country">
                &nbsp;{{ jobDetail.country.name || jobDetail.country }}
              </span>
            </div>
            <!-- <div
              v-if="!parseInt(jobDetail.external_id)"
              class="d-flex align-center tw-text-sm tw-font-semibold"
            >
              <span v-if="jobDetail.currency || jobDetail.curr" class="mr-2">{{
                jobDetail.currency || jobDetail.curr
              }}</span>
              <span
                v-if="jobDetail.salary_min || jobDetail.salary_max"
                class="mr-2"
                >{{ jobDetail.salary_min }} - {{ jobDetail.salary_max }}
              </span>
            </div> -->
          </div>
        </div>

        <!-- <div class="d-flex pa-1">
          <v-btn
            v-if="AuthID"
            :loading="favourite_loader"
            class="tw-border-solid tw-border-2 tw-rounded-lg mx-4"
            icon
          >
            <v-icon
              aria-hidden="false"
              :color="jobDetail.is_fav ? 'red' : 'grey'"
            >
              mdi-heart
            </v-icon>
          </v-btn>

          <div class="d-flex justify-center flex-column">
            <span class="tw-text-sm">
              <v-btn @click="viewJob" depressed width="120" color="secondary">
                <span class="text-capitalize tw-font-medium"
                  >View Job</span
                ></v-btn
              >
            </span>

            <span class="text-capitalize tw-text-sm mt-3">
              <v-btn v-if="AuthID" depressed width="120" color="primary"
                ><span class="text-capitalize tw-font-light"
                  >Apply Now</span
                ></v-btn
              >
            </span>
          </div>
        </div> -->
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
  data() {
    return {
      favourite_loader: false,
    };
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
    add_favourite_job() {
      let userData = JSON.parse(localStorage.getItem("userData"));
      this.favourite_loader = true;
      this.$api.utilsService
        .init_favourite({
          job_id: this.jobDetail.id,
          user_id: userData?.id,
          is_fav: this.jobDetail.is_fav ? 0 : 1,
        })
        .then((response) => {})
        .finally(() => {
          this.favourite_loader = false;
        });
    },
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