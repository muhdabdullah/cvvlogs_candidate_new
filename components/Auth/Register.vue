<template>
  <div class="text-center">
    <v-dialog width="582" persistent v-model="dialog">
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
      <v-card
        color="primary"
        width="582"
        rounded
        flat
        class="mx-auto tw-border-0"
      >
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
            @click="dialog = false"
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

                <v-text-field
                  :readonly="loading"
                  :rules="[required]"
                  class="mb-2"
                  hide-spin-buttons
                  v-model="registerData.number"
                  solo
                  type="number"
                  placeholder="Phone"
                  density="comfortable"
                ></v-text-field>

                <v-text-field
                  class=""
                  :readonly="loading"
                  solo
                  :rules="[required]"
                  v-model="registerData.confirmPassword"
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
    registerData: {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      confirmPassword: null,
      number: null,
    },
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
  },
  methods: {
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
            // // Get new Auth Data, Cause Now the user is logged In.
            this.$api.jobService.get_offline_dashboard().then((response) => {
              if (response.data) {
                this.$store.dispatch(
                  "set_jobs_by_industry",
                  response.data.jobs_by_industry
                );
                this.$store.dispatch("setDashboardData", response.data);

                this.$store.dispatch(
                  "setRecentJobs",
                  response.data.recent_jobs
                );
              }
            });

            this.$api.jobService.get_job_exclude().then((response) => {
              this.$store.dispatch("setAllJobs", response?.data?.job);
            });

            this.$store.dispatch("auth/set_authId", resp.data);
            if (this.$route != "/") this.$router.push("/");

            this.$refs.form.reset();
            this.dialog = false;
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
