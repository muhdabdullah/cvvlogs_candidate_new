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

              <NuxtLink v-else :to="links.heading.to ? links.heading.to : ''">
                <h1
                  class="
                    tw-text-base tw-font-bold tw-h-full
                    d-flex
                    align-center
                  "
                >
                  {{ links.heading.label }}
                </h1>
              </NuxtLink>
            </div>

            <div v-if="links.text1 && links.text1.href">
              <NuxtLink
                to="/"
                :href="links.text1.href"
                :target="links.text1.target"
                class="tw-text-xs"
              >
                {{ links.text1.label }}
              </NuxtLink>
            </div>

            <span
              v-else-if="links.text1 && links.text1.label == 'Login'"
              @click="$nuxt.$emit('init-login-dialog')"
              class="tw-text-xs py-2 tw-cursor-pointer"
            >
              {{ links.text1.label }}
            </span>

            <NuxtLink
              v-else-if="links.text1 && links.text1.to"
              :to="links.text1.to"
              class="tw-text-xs"
            >
              {{ links.text1.label }}
            </NuxtLink>

            <div class="py-3" v-if="links.text2 && links.text2.href">
              <NuxtLink
                to="/"
                :href="links.text2.href"
                :target="links.text2.target"
                class="tw-text-xs"
              >
                {{ links.text2.label }}
              </NuxtLink>
            </div>

            <span
              v-else-if="links.text2 && links.text2.label == 'Register'"
              @click="$nuxt.$emit('init-register-dialog')"
              class="tw-text-xs py-2 tw-cursor-pointer"
            >
              {{ links.text2.label }}
            </span>

            <NuxtLink
              v-else-if="links.text2 && links.text2.to"
              :to="links.text2.to"
              class="tw-text-xs"
            >
              {{ links.text2.label }}
            </NuxtLink>

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
            <div
              :class="`d-flex mr-1 my-2 ${
                $vuetify.breakpoint.mobile ? 'flex-column' : ''
              }`"
            >
              <NuxtLink
                href="https://play.google.com/store/apps/details?id=com.cvvlogs.candidate"
                to="/"
                target="_blank"
              >
                <v-img
                  width="128"
                  height="38"
                  src="img/googlePlayIcon.svg"
                  lazy-src="img/googlePlatIcon.svg"
                />
              </NuxtLink>

              <NuxtLink
                href="https://apps.apple.com/us/app/cvvlogs/id1584693199"
                to="/"
                target="_blank"
              >
                <v-img
                  width="128"
                  height="38"
                  src="img/appleIcon.svg"
                  lazy-src="img/appleIcon.svg"
                  :class="$vuetify.breakpoint.mobile ? 'mt-2' : 'ml-4'"
                />
              </NuxtLink>
            </div>
            <div>
              <h3 class="font-weight-bold mt-5">Follow Us On</h3>
              <v-btn
                v-for="btn in icons"
                :key="btn.icon"
                :href="btn.href"
                target="_blank"
                class="mx-0"
                icon
                size="32"
              >
                <v-icon>{{ btn.icon }}</v-icon></v-btn
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
          <!-- <NuxtLink class="white--text ml-10" to="/blogs">
            <p>Blogs</p>
          </NuxtLink> -->
          <NuxtLink class="white--text ml-10" to="/about-us">
            <p>About Us</p>
          </NuxtLink>
          <NuxtLink class="white--text ml-10" to="/contact-us">
            <p>Contact Us</p>
          </NuxtLink>
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
      icons: [
        {
          icon: "mdi-facebook",
          href: "https://www.facebook.com/cvvlogspk",
        },
        {
          icon: "mdi-instagram",
          href: "https://www.instagram.com/__CVVlogs",
        },
        {
          icon: "mdi-linkedin",
          href: "https://www.linkedin.com/company/cvvlogs",
        },
      ],
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
          text2: { label: "Privacy Policy", to: "/privacy-policy" },
          text3: { label: "Terms & Conditions", to: "/termsAndCondition" },
          text4: { label: "Tips & Recommendations", to: "/tips" },
        },
        {
          heading: { label: "Job Seekers" },
          text1: { label: "Login", to: "/" },
          text2: { label: "Register", to: "/" },
          text3: { label: "Search", to: "/search" },
          text4: { label: "Browse Jobs", to: "/jobs/all" },
        },
        {
          heading: { label: "Recruiters" },
          text1: {
            label: "Register",
            href: "https://recruiter.cvvlogs.com/register",
            target: "_blank",
          },
          text2: {
            label: "Login",
            href: "https://recruiter.cvvlogs.com/login",
            target: "_blank",
          },
        },
        {
          heading: { label: "Contact Us", to: "/contact-us" },
          text1: { label: "info@cvvlogscom", to: "/" },
          text2: { label: "Feed back", to: "/feedback" },
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

  a:hover,
  .tw-cursor-pointer:hover {
    color: orange;
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
  }
}
</style>
