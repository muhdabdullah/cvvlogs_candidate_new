<template>
  <div class="text-center">
    <v-dialog max-width="750" persistent v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          color="primary"
          class="text-capitalize"
          height="35"
          width="110"
          small
          rounded
          depressed
        >
          Register
        </v-btn>
      </template>
      <v-card color="primary" rounded flat class="mx-auto tw-border-0">
        <div class="pa-2 card__login__bg d-flex justify-end">
          <div class="d-flex align-center tw-w-full">
            <img
              class="mx-auto"
              contain
              width="300"
              :height="$vuetify.breakpoint.mobile ? 50 : 80"
              src="/img/logo.png"
            />
          </div>

          <v-btn
            size="29"
            fab
            icon
            rounded
            class="primary"
            color="white"
            small
            @click="close"
            >x</v-btn
          >
        </div>

        <v-card-text class="pa-5">
          <v-form ref="form" v-model="form" @submit.prevent="onSubmit">
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <v-text-field
                  v-model="registerData.first_name"
                  :readonly="loading"
                  :rules="[required]"
                  class="mb-2"
                  solo
                  placeholder="First Name"
                  density="comfortable"
                ></v-text-field>

                <v-text-field
                  :readonly="loading"
                  :rules="[required]"
                  v-model="registerData.email"
                  class="mb-2"
                  type="email"
                  solo
                  placeholder="Email"
                  density="comfortable"
                ></v-text-field>

                <v-text-field
                  v-model="registerData.password"
                  class=""
                  :readonly="loading"
                  solo
                  :rules="[required]"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPass ? 'text' : 'password'"
                  @click:append="showPass = !showPass"
                  placeholder="Password"
                  density="comfortable"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <v-text-field
                  :readonly="loading"
                  :rules="[required]"
                  class="mb-2"
                  v-model="registerData.last_name"
                  solo
                  placeholder="Last Name"
                  density="comfortable"
                ></v-text-field>

                <v-row class="" no-gutters dense>
                  <v-col cols="4">
                    <v-autocomplete
                      v-model="registerData.num_code"
                      :items="country_code_list"
                      item-value="country_code"
                      item-text="country_code"
                      placeholder="Code"
                      :rules="[(v) => !!v || 'Country code required']"
                      solo
                      class="mb-2 mr-2"
                    >
                      <template v-slot:append>
                        <!-- Caret Down -->
                        <v-icon>mdi-chevron-down</v-icon>
                      </template>
                    </v-autocomplete>
                  </v-col>

                  <v-col cols="8">
                    <v-text-field
                      :readonly="loading"
                      :rules="[required]"
                      class="mb-2"
                      hide-spin-buttons
                      v-model="registerData.number"
                      solo
                      type="number"
                      placeholder="Phone"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-text-field
                  class=""
                  :readonly="loading"
                  solo
                  :rules="[required]"
                  v-model="confirmPassword"
                  :append-icon="showConfirmPass ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showConfirmPass ? 'text' : 'password'"
                  @click:append="showConfirmPass = !showConfirmPass"
                  placeholder="Confirm Password"
                  density="comfortable"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- <div class="d-flex align-center white--text justify-space-between">
              <v-checkbox
                label="Remember me"
                v-model="rememberMe"
                color="white"
                dark
              ></v-checkbox>

              <h5>Forgot password ?</h5>
            </div> -->

            <v-btn
              :loading="loading"
              block
              class="my-5"
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
              Don't have an account?
              <span
                @click="init_SignIn_dialog"
                class="tw-font-bold tw-cursor-pointer"
              >
                Sign in
              </span>
            </h6>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    rememberMe: false,
    country_code_list: [],
    registerData: {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      num_code: null,
      number: null,
    },
    confirmPassword: null,
    dialog: false,
    showPass: false,
    showConfirmPass: false,
    form: false,
    email: null,
    password: null,
    loading: false,
  }),
  created() {
    this.$nuxt.$on("init-register-dialog", () => {
      this.dialog = true;
    });

    this.get_country_code();
  },
  methods: {
    close() {
      this.dialog = false;
      this.$refs.form.reset();
    },
    get_country_code() {
      this.$api.utilsService.get_country_code().then(async (response) => {
        this.country_code_list = response?.data?.country_codes;
      });
    },
    init_SignIn_dialog() {
      this.dialog = false;
      this.$emit("initSignIn");
    },
    onSubmit() {
      this.$refs.form.validate();

      if (!this.form) return;

      this.loading = true;

      this.$api.authService
        .signUp(this.registerData)
        .then((resp) => {
          if (resp?.status == 200 && resp?.data) {
            this.$router.push({
              name: "otp-activate-account",
              params: {
                resend: true,
              },
              query: {
                auth_id: resp.data.auth_id,
              },
            });
            this.$refs.form.reset();
            this.dialog = false;

            // // // Get new Auth Data, Cause Now the user is logged In.
            // this.$api.jobService.get_offline_dashboard().then((response) => {
            //   if (response.data) {
            //     this.$store.dispatch(
            //       "set_jobs_by_industry",
            //       response.data.jobs_by_industry
            //     );
            //     this.$store.dispatch("setDashboardData", response.data);

            //     this.$store.dispatch(
            //       "setRecentJobs",
            //       response.data.recent_jobs
            //     );
            //   }
            // });

            // this.$api.jobService.get_job_exclude().then((response) => {
            //   this.$store.dispatch("setAllJobs", response?.data?.job);
            // });

            // this.$store.dispatch("auth/set_authId", resp.data);
            // if (this.$route != "/") this.$router.push("/");
          } else if (resp?.status == 404) {
            this.$notifier.showMessage({
              content: resp?.message || "Error",
              color: "error",
            });
            return;
          } else {
            if (resp?.message) {
              this.$notifier.showMessage({
                content: resp.message,
                color: "error",
              });
            }
          }
        })
        .finally(() => (this.loading = false));
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>

<style lang="scss" scoped>
.card__login__bg {
  max-height: 141px;
  min-height: 120px;
  background: white;
}

.v-card-item__content {
  height: 100% !important;
}

.text_field_outlined {
  // border: 2px solid #cccccc;
}
</style>
