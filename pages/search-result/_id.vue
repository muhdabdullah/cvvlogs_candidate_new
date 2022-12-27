<template>
  <v-container>
    <v-row>
      <v-col cols="12 mt-12">
        <h1 class="tw-font-bold tw-text-5xl primary--text">Search for Jobs</h1>
        <p class="tw-font-bold tw-text-2xl primary--text">Showing 4 Jobs</p>
      </v-col>
      <v-col cols="10" class="">
        <div v-for="n in 3"
            :key="n">
        <v-hover v-slot="{ hover }">
          <v-card
           @click="viewJob"
            :elevation="hover ? 6 : 0"
            :class="{ 'on-hover': hover }"
            class="mx-auto mb-10 tw-cursor-pointer"
            rounded="lg"
            color=""
            outlined
          >
            <v-card-text class="px-6 my-4 tw-h-full">
              <div class="d-flex justify-space-between">
                <div>
                  <h1 class="tw-text-4xl tw-font-bold">Resume rewriter</h1>
                  <p
                    class="tw-text-base tw-font-medium"
                    style="color: #c8c8c8 !important"
                    color="#C8C8C8"
                  >
                    Professional Sage
                  </p>
                </div>
                <p class="tw-text-xs text">295 days ago</p>
              </div>
              <v-row class="text">
                <v-col cols="4" class="d-flex align-center">
                  <img
                    class="mr-3"
                    src="/img/briefCase.svg"
                    width="19"
                    height="24"
                    contain
                  />
                  less than 1 year Experience</v-col
                >
                <v-col cols="4" class="d-flex align-center">
                  <img
                    class="mr-3"
                    src="/img/loc.svg"
                    width="19"
                    height="24"
                    contain
                  />Pakistan , Sindh , Sindh
                </v-col>
                <v-col cols="4" class="d-flex align-center"
                  ><img
                    class="mr-3"
                    src="/img/pen.svg"
                    width="19"
                    height="24"
                    contain
                  />Entry Level</v-col
                >
              </v-row>
              <div class="mt-6">
                <p class="text">
                  Looking for very talented person who can rewrite resumes for
                  targeted jobs. We have clients from USA, UK, and Canada. You
                  must have excellent English skills.
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
        </div>
      </v-col>
      <v-col cols="2">
        <v-card
          class="mx-auto tw-opacity-95 mb-10 tw-h-full"
          elevation="0"
          rounded="lg"
          color=""
          outlined
        >
          <v-card-text class="">Placeholder for Ads</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      genders: [
        { id: 1, name: "Male" },
        { id: 2, name: "Female" },
      ],
    };
  },
  methods: {
    viewJob() {
      this.$router.push({
        name: "jobs-id",
        params: {
          id: '1',
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  font-size: 38px !important;
  color: #808080 !important;
}
.text {
  color: #707070 !important;
  font-size: 16px !important;
}

.v-card {
  transition: opacity 0.4s ease-in-out;
}
</style>
