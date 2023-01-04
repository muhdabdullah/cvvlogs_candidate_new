<template>
  <div>
    <!-- Mobile Menu -->
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mobile"
      v-model="drawer"
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-item-group
          v-for="(item, i) in menuBtn"
          :key="`menu-items-${i}`"
        >
          <v-list-item :to="item ? item.to : ''" router exact>
            <v-list-item-content>
              <v-list-item-title v-text="item && item.name" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <div class="d-flex align-center flex-wrap">
        <LayoutLoginMenu v-if="AuthID" />
        <AuthSignIn v-else class="ma-2" />

        <AuthRegister class="ma-2" />
      </div>
      <v-btn
        class="ml-2 text-center"
        color="primary"
        depressed
        tile
        target="_blank"
        href="https://recruiter.cvvlogs.com/"
      >
        <div class="d-flex flex-column">
          <span class="tw-font-bold text-capitalize">For Recruiters</span>
          <!-- <span class="tw-text-xs text-lowercase"
      >(recruiter can login/register here)</span
    > -->
        </div>
      </v-btn>

      <template v-if="AuthID" v-slot:append>
        <div class="pa-2">
          <v-btn depressed color="error" block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-system-bar color="#cccccc" window>
      <v-container class="pa-0 custom_wd_container">
        <div
          v-if="!$vuetify.breakpoint.mobile"
          class="d-flex justify-space-between align-center"
        >
          <div class="call_to_actions d-flex align-center">
            <div class="phone">
              <v-icon color="primary">mdi-phone</v-icon>
              <a href="tel:+1866-955-9001">
                <span class="ml-2">+1 866-955-9001</span>
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
      <v-container class="custom_wd_container pa-0 tw-h-full">
        <div
          class="d-flex align-center tw-h-full"
          v-if="$vuetify.breakpoint.mobile"
        >
          <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer" />

          <NuxtLink to="/">
            <v-img
              class="mr-10"
              contain
              width="200"
              src="/img/logo.png"
              lazy-src="/img/logo.png"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div v-else class="d-flex justify-space-between align-center tw-h-full">
          <NuxtLink to="/">
            <v-img
              class="mr-5"
              contain
              width="150"
              src="/img/logo.png"
              lazy-src="/img/logo.png"
            />
          </NuxtLink>

          <div class="tw-h-full d-flex align-center">
            <div v-for="(btn, index) in menuBtn" :key="index" class="tw-h-full">
              <v-btn
                tile
                small
                height="100%"
                active-class="btn__active__class"
                plain
                :to="btn ? btn.to : ''"
              >
                <span class="text-truncate" v-if="btn">{{ btn.name }}</span>
              </v-btn>
            </div>

            <div v-if="AuthID" class="tw-h-full">
              <v-btn
                tile
                small
                height="100%"
                active-class="btn__active__class"
                plain
                :to="'/messages'"
              >
                <span class="text-truncate">Messages</span>
              </v-btn>
            </div>
          </div>

          <div class="mx-2 tw-h-full d-flex align-center justify-center">
            <v-btn
              v-if="AuthID"
              to="/upload-resume"
              color="red"
              height="35"
              rounded
              small
              depressed
              dark
            >
              <span class="text-capitalize">Upload Resume</span>
              <v-icon size="large" class="ml-2">
                mdi-arrow-up-thin-circle-outline</v-icon
              >
            </v-btn>

            <div>
              <LayoutLoginMenu class="mx-2" v-if="AuthID" />
              <AuthSignIn
                ref="signInDialog"
                @initSignup="initSignup"
                v-else
                class="ml-2"
              />
            </div>

            <AuthRegister
              @initSignIn="initSignIn"
              ref="signUpDialog"
              v-if="!AuthID"
              class="ml-2"
            />

            <v-btn
              class="ml-2"
              color="primary"
              text
              height="100%"
              max-width="200"
              tile
              small
              target="_blank"
              href="https://recruiter.cvvlogs.com/"
            >
              <div class="d-flex flex-column">
                <span class="tw-font-bold text-capitalize">For Recruiters</span>
                <span class="tw-text-xs text-lowercase"
                  >(login/register here)</span
                >
              </div>
            </v-btn>

            <!-- <v-btn
              v-if="!AuthID"
              class="ml-2"
              color="primary"
              height="35"
              width="110"
              to="/register"
              rounded
              depressed
            >
              Register
            </v-btn> -->
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
      drawer: false,
      menuBtn: [
        {
          name: "Home",
          to: "/",
          class: "",
        },
        {
          name: "Jobs",
          to: "/jobs/all",
          class: "",
        },
        {
          name: "How It Works",
          to: "/how-it-works",
          class: "",
        },

        {
          name: "About Us",
          to: "/about-us",
          class: "",
        },

        // {
        //   name: "Contact Us",
        //   to: "/contact-us",
        //   class: "",
        // },
      ],
    };
  },
  methods: {
    initSignup() {
      if (this.$refs && this.$refs.signUpDialog) {
        this.$refs.signUpDialog.dialog = true;
      }
    },
    initSignIn() {
      if (this.$refs && this.$refs.signInDialog) {
        this.$refs.signInDialog.dialog = true;
      }
    },
  },
  watch: {},
  computed: {
    AuthID() {
      if (this.$store.getters["auth/get_authId"]) return true;
    },
  },
};
</script>

<style lang="scss">
.v-toolbar__content {
  /* width: 100% !important; */
  padding-top: 0;
  padding-bottom: 0;
}

.btn__active__class {
  background: #ff9900 !important;
  color: white !important;
  border-radius: 0;

  span {
    color: white !important;
  }
}
</style>
