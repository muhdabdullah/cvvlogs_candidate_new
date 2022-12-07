<template>
  <v-footer dark color="#1f212a" class="d-flex flex-column pa-0">
    <v-card
      depressed
      rounded="0"
      color="secondary"
      height="10"
      width="100%"
    ></v-card>
    <!-- <div
      class="bg-footer text-white d-flex align-center px-4 tw-w-0"
      style="width: 100%"
    > -->
    <v-container class="bg-footer pa-10 custom_wd_container">
      <!-- <v-row>
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
        </v-row> -->
      <v-row justify="center" align-content="center">
        <v-col
          v-for="(links, index) in footerText"
          :key="`footer__link__${index}`"
        >
          <div
            class="
              tw-text-base
              footer__links
              tw-font-medium
              d-flex
              flex-column
              justify-center
              align-left
            "
          >
            <div class="tw-h-14">
              <NuxtLink v-if="links.heading.logo" to="/">
                <v-img
                  class="mr-10"
                  contain
                  width="180"
                  height="50"
                  src="/img/logo.png"
                />
              </NuxtLink>

              <h1
                v-else
                class="tw-text-base tw-font-bold tw-h-full d-flex align-center"
              >
                {{ links.heading.label }}
              </h1>
            </div>
            <NuxtLink :to="links.text1.to || '/'" class="tw-text-xs">{{
              links.text1.label
            }}</NuxtLink>

            <NuxtLink :to="links.text2.to" class="tw-text-xs">{{
              links.text2.label
            }}</NuxtLink>

            <NuxtLink
              v-if="links.text3"
              :to="links.text3.to"
              class="tw-text-xs"
              >{{ links.text3.label }}</NuxtLink
            >

            <NuxtLink
              :to="links.text4.to"
              v-if="links.text4"
              class="tw-text-xs"
              >{{ links.text4.label }}</NuxtLink
            >
          </div>
        </v-col>
        <v-col align-content="center">
          <div>
            <h1 class="tw-text-base tw-font-bold">Download our app</h1>
            <div class="d-flex align-center mr-1 my-2">
              <v-img
                contain
                width="128"
                height="38"
                src="img/googlePlayIcon.svg"
                lazy-src="img/googlePlatIcon.svg"
              />

              <v-img
                contain
                width="128"
                height="38"
                src="img/appleIcon.svg"
                lazy-src="img/appleIcon.svg"
              />
            </div>
            <div>
              <h3 class="font-weight-bold mt-5">Follow Us On</h3>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-0"
                icon
                size="32"
              >
                <v-icon>{{ icon }}</v-icon></v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="tw-max-w-6xl">
        <hr style="border-top: 1px solid white; width: 100%" />
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          xl="6"
          class="d-flex align-center pa-2 justify-start"
        >
          <p>
            &copy;2020-{{ new Date().getFullYear() }} — cvvlogs.com All Rights
            Reserved.
          </p>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          xl="6"
          class="d-flex align-center justify-end"
        >
          <p>Home</p>
          <p class="ml-10">About Us</p>
          <p class="ml-10">Contact Us</p>
        </v-col>
      </v-row>
    </v-container>
    <!-- </div> -->

    <!-- <v-card
      width="100%"
      color="primary"
      rounded="0"
      class="px-4 py-1 text-center"
    >
      &copy;2020-{{ new Date().getFullYear() }} — cvvlogs.com All Rights
      Reserved.
    </v-card> -->
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      footerText: [
        {
          heading: {
            label: "Company",
            logo: true,
          },
          text1: {
            label: "Home",
            to: "/",
          },
          text2: { label: "Privacy Policy", to: "/" },
          text3: { label: "Terms & Conditions", to: "/" },
          text4: { label: "Tips & Recommendations", to: "/" },
        },
        {
          heading: { label: "Job Seekers" },
          text1: { label: "Login", to: "/" },
          text2: { label: "Register", to: "/" },
          text3: { label: "Search", to: "/" },
          text4: { label: "Browse Jobs", to: "/" },
        },
        {
          heading: { label: "Recruiters" },
          text1: { label: "Register", to: "/" },
          text2: { label: "Login", to: "/" },
        },
        {
          heading: { label: "Contact Us" },
          text1: { label: "info@cvvlogscom", to: "/" },
          text2: { label: "Feed back", to: "/" },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-footer {
  // background: #1f212a;
  // height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer__links {
  a {
    padding: 10px 10px 10px 0;
    color: white;
    text-align: left;
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
  }

  a:hover {
    color: orange;
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
  }
}
</style>
