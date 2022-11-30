<template>
  <div>
    <v-system-bar color="#cccccc" window>
      <v-container class="pa-0">
        <div class="d-flex justify-space-between align-center">
          <div class="call_to_actions d-flex align-center">
            <div class="phone">
              <v-icon color="primary">mdi-phone</v-icon>
              <a href="tel:123-456-789">
                <span class="ml-2">123-456-789</span>
              </a>
            </div>

            <div class="email ml-5">
              <v-icon color="primary">mdi-email</v-icon>
              <a href="mailto:info@cvvlogs.com">
                <span class="ml-2">info@cvvlogs.com</span>
              </a>
            </div>
          </div>
        </div>
      </v-container>
    </v-system-bar>
    <v-app-bar elevation="0" color="white">
      <v-container class="pa-0 tw-h-full">
        <div class="d-flex justify-space-between align-center tw-h-full">
          <NuxtLink to="/">
            <nuxt-img
              class="mr-10"
              fit="contain"
              width="200"
              src="/img/logo.png"
            />
          </NuxtLink>
          <!-- selected-class="btn__active__class" -->
          <div class="tw-h-full">
            <v-btn
              v-for="(btn, index) in menuBtn"
              :key="index"
              height="100%"
              active-class="btn__active__class"
              plain
              :to="btn ? btn.to : ''"
            >
              <span v-if="btn">{{ btn.name }}</span>
            </v-btn>
          </div>

          <div class="mx-2 tw-h-full d-flex align-center justify-center">
            <v-btn
              to="/upload-resume"
              color="red"
              height="35"
              rounded
              depressed
              dark
            >
              <span class="text-capitalize">Upload Resume</span>
              <v-icon size="large" class="ml-2">
                mdi-arrow-up-thin-circle-outline</v-icon
              >
            </v-btn>

            <AuthSignIn class="ml-2" />

            <AuthRegister class="ml-2" />
          </div>
        </div>
      </v-container>
    </v-app-bar>
    <v-app-bar elevation="0" height="10" color="secondary"></v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuBtn: [
        {
          name: "Home",
          to: "/",
          class: "",
        },
        {
          name: "About Us",
          to: "/about-us",
          class: "",
        },
        {
          name: "Jobs",
          to: "/jobs",
          class: "",
        },
        {
          name: "How It Works",
          to: "/how-it-works",
          class: "",
        },
        {
          name: "Packages",
          to: "/packages",
          class: "",
        },
        {
          name: "Contact Us",
          to: "/contact-us",
          class: "",
        },
        ,
      ],
    };
  },
};
</script>

<style>
.v-toolbar__content {
  /* width: 100% !important; */
  padding-top: 0;
  padding-bottom: 0;
}

.btn__active__class {
  background: #ff9900 !important;
  color: white !important;
  border-radius: 0;
}
</style>
