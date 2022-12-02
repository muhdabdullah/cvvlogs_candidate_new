<template>
  <div class="d-flex tw-h-full flex-column align-center justify-center">
    <v-container>
      <v-card
        outlined
        height="600"
        class="tw-rounded-l-xl"
        rounded="xl"
        elevation="15"
      >
        <v-row no-gutters justify="center" align="center" class="tw-h-full">
          <v-col
            v-if="$vuetify.breakpoint.lgAndUp"
            md="6"
            lg="6"
            xl="6"
            class="tw-h-full"
          >
            <!-- <v-img
          contain
          src="img/home_banner.png"
          lazy-src="img/home_banner.png"
        /> -->
            <v-img
              cover
              class="tw-rounded-l-xl"
              height="100%"
              position="left top"
              lazy-src="img/homeCustomerImg.png"
              src="img/homeCustomerImg.png"
            />
          </v-col>

          <v-col align="center" class="tw-h-full tw-rounded-r-xl px-5">
            <div class="pa-2 card__login__bg d-flex justify-end">
              <div class="d-flex align-center tw-w-full">
                <img
                  class="mx-auto"
                  contain
                  width="300"
                  height="80"
                  src="/img/logo.png"
                />
              </div>
            </div>
            <v-card
              color="primary"
              max-width="582"
              rounded="xl"
              flat
              class="mx-auto tw-border-0"
            >
              <v-card-text class="pa-5">
                <v-form v-model="form" @submit.prevent="onSubmit">
                  <v-row dense>
                    <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                      <v-text-field
                        hide-details
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        solo
                        placeholder="First Name"
                        density="comfortable"
                      ></v-text-field>

                      <v-text-field
                        hide-details
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        type="email"
                        solo
                        placeholder="Email"
                        density="comfortable"
                      ></v-text-field>

                      <v-text-field
                        v-model="password"
                        hide-details
                        type="password"
                        class=""
                        :readonly="loading"
                        solo
                        :rules="[required]"
                        placeholder="Password"
                        density="comfortable"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                      <v-text-field
                        hide-details
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        solo
                        placeholder="Last Name"
                        density="comfortable"
                      ></v-text-field>

                      <v-text-field
                        hide-details
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        hide-spin-buttons
                        solo
                        type="number"
                        placeholder="Phone"
                        density="comfortable"
                      ></v-text-field>

                      <v-text-field
                        hide-details
                        class=""
                        :readonly="loading"
                        solo
                        type="password"
                        :rules="[required]"
                        placeholder="Confirm Password"
                        density="comfortable"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <div
                    class="
                      d-flex
                      align-center
                      white--text
                      justify-space-between
                    "
                  >
                    <v-checkbox
                      label="Remember me"
                      v-model="rememberMe"
                      color="white"
                      dark
                    ></v-checkbox>

                    <h5>Forgot password ?</h5>
                  </div>

                  <v-btn
                    :loading="loading"
                    block
                    light
                    color="secondary"
                    height="50"
                    size="large"
                    type="submit"
                    depressed
                  >
                    Sign Up
                  </v-btn>

                  <h6 class="secondary--text pa-3 text-center">
                    Already have an account?
                    <span class="tw-font-bold">
                      <NuxtLink class="secondary--text" to="/signIn">
                        Sign In
                      </NuxtLink>
                    </span>
                  </h6>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
  
  <script>
export default {
  layout: "blank",
  data: () => ({
    rememberMe: false,
    dialog: false,
    form: false,
    email: null,
    password: null,
    loading: false,
  }),
  computed: {
    renderColumn() {
      if (!this.isMounted) return true;
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.card__login__bg {
  height: 141px;
  background: white;
}

.v-card-item__content {
  height: 100% !important;
}

.text_field_outlined {
  // border: 2px solid #cccccc;
}
</style>
  