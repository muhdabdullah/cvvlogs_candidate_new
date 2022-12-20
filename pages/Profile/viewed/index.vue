<template>
  <v-container fluid>
    <v-row class="ma-15" dense>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <div>
          <h1 class="tw-text-5xl tw-font-bold primary--text">Profile Viewed</h1>
          <p class="font-weight-bold mt-2 primary--text">
            List of Recruiters who have visited your Profile
          </p>
        </div>
        <v-card
          v-if="!$vuetify.breakpoint.xs"
          class="mx-auto tw-opacity-95 roundedBox mt-12"
          elevation="20"
          color="white"
          max-width="1170"
        >
          <v-card-text class="ma-4 tw-h-full d-flex flex-column justify-center">
            <h1 class="tw-text-2xl tw-font-bold ml-10 primary--text">
              List of Recruiters
            </h1>

            <div
              v-for="pvData in profileViews.viewers"
              :key="pvData.id"
              class="d-flex mx-10 my-3 _cursor"
              @click="viewProfile(pvData.id)"
            >
              <div class="imgBox d-flex justify-center align-center">
                <v-img
                  height="110px"
                  max-width="110px"
                  position="center"
                  cover
                  :lazy-src="pvData.img"
                  :src="pvData.img"
                />
              </div>
              <div class="d-flex flex-column justify-center ml-8 black--text">
                <h1 class="black--text tw-text-2xl tw-font-semibold">
                  {{ pvData.name }}
                </h1>
                <p class="tw-text-sm mt-2">{{ pvData.tagline }}</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $api, store }) {
    const profileViews = await $api.utilsService
      .get_profile_viewers()
      .then((response) => {
        if (response?.data) {
          return response?.data;
        }
        console.log(profileViews);
      });

    return { profileViews };
  },
  data() {
    return {
      profileViews: null,
    };
  },
  methods: {
    viewProfile(id) {
      this.$router.push({
        name: "company-profile-id",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.roundedBox {
  border-radius: 15px !important;
}
.imgBox {
  width: 135px;
  height: 135px;
  background-color: #fff;
  border: 1px solid #e8ebee;
  border-radius: 4px;
}
.fontColor {
  color: #808080 !important;
  font-size: 25px !important;
}
._cursor {
  cursor: pointer;
}
</style>
