<template>
  <v-footer dark color="#1f212a" class="d-flex flex-column pa-0">
    <v-card
      depressed
      rounded="0"
      color="secondary"
      height="10"
      width="100%"
    ></v-card>
    <div class="bg-footer text-white d-flex align-center px-4">
      <v-container class="custom_wd_container">
        <v-row>
          <v-col cols="12" md="3" lg="3" xl="3">
            <v-img
              class="mr-10"
              contain
              width="180"
              height="50"
              src="/img/logo.png"
            />
            <p class="pa-1 my-2">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well Reference site about Lorem Ipsum, giving
              information on its origins, as well Reference site about Lorem
              Ipsum, giving information on its origins.”
            </p>
          </v-col>
          <v-col cols="12" md="3" lg="3" xl="3">
            <h3 class="font-weight-bold">Quick Links</h3>
          </v-col>
          <v-col cols="12" md="3" lg="3" xl="3">
            <h3 class="font-weight-bold">Information</h3>
          </v-col>
          <v-col cols="12" md="3" lg="3" xl="3">
            <h3 class="font-weight-bold">Subscribe</h3>

            <h3 class="font-weight-bold mt-15">Social Media</h3>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-0"
              icon
              size="32"
            >
              <v-icon>{{ icon }}</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-card
      width="100%"
      color="primary"
      rounded="0"
      class="px-4 py-1 text-center"
    >
      &copy;2020-{{ new Date().getFullYear() }} — cvvlogs.com All Rights
      Reserved.
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-footer {
  // background: #1f212a;
  height: 460px;
}
</style>
