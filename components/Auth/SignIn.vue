<template>
  <div class="text-center">
    <v-dialog width="500" persistent v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          color="secondary"
          height="35"
          width="110"
          rounded
          small
          depressed
        >
          <div>
            <v-icon size="large" class="mr-1" color="white"
              >mdi-lock-open</v-icon
            >
            <span class="text-capitalize text-white">Login</span>
          </div>
        </v-btn>
      </template>
      <v-card
        color="primary"
        width="500"
        height="516"
        rounded
        flat
        class="mx-auto"
      >
        <div class="pa-2 card__login__bg d-flex justify-end">
          <div class="d-flex align-center tw-w-full">
            <v-img
              class="mx-auto"
              contain
              width="250"
              height="80"
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
            <v-text-field
              v-model="email"
              :readonly="loading"
              :rules="[required]"
              hide-details
              class="mb-2"
              type="email"
              solo
              placeholder="User Name"
            ></v-text-field>

            <v-text-field
              v-model="password"
              type="password"
              :readonly="loading"
              solo
              :rules="[required]"
              placeholder="Password"
            ></v-text-field>

            <div class="d-flex align-center white--text justify-space-between">
              <v-checkbox
                label="Remember me"
                v-model="rememberMe"
                color="white"
                dark
              ></v-checkbox>

              <AuthForgotPassword />
            </div>

            <v-btn
              :loading="loading"
              block
              light
              color="secondary"
              height="60"
              size="large"
              type="submit"
              depressed
            >
              Sign In
            </v-btn>

            <h6 class="secondary--text pa-3 text-center">
              Don't have an account?
              <span
                @click="init_SignUp_dialog"
                class="tw-font-bold tw-cursor-pointer"
              >
                Sign up
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
    dialog: false,
    form: false,
    email: null,
    password: null,
    loading: false,
  }),
  created() {
    this.$nuxt.$on("init-login-dialog", () => {
      this.dialog = true;
    });
  },
  computed: {
    AuthID() {
      if (this.$store.getters["auth/get_authId"]) return true;
    },
  },
  methods: {
    init_SignUp_dialog() {
      this.dialog = false;
      this.$emit("initSignup");
    },
    onSubmit() {
      this.$refs.form.validate();
      if (!this.form) return;

      this.loading = true;

      this.$api.authService
        .login({
          username: this.email,
          password: this.password,
        })
        .then(async (resp) => {
          if (resp.data) {
            await this.$store.dispatch("resetJobsData");

            if (resp?.status == 200 && resp?.data) {
              await this.$store.dispatch("auth/set_authId", resp.data);
              if (this.$route != "/") this.$router.push("/");
              this.$refs.form.reset();
            }

            if (resp?.status == 404) {
              this.$notifier.showMessage({
                content: resp.message,
                color: "error",
              });
              return;
            }

            // Get new Auth Data
            await this.$api.jobService
              .get_offline_dashboard()
              .then((response) => {
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

                  if (this.AuthID) {
                    this.$api.jobService.get_job_exclude().then((response) => {
                      this.$store.dispatch("setAllJobs", response?.data?.job);
                    });
                  }
                }

                return [...response?.data?.jobs_by_industry];
              });

            if (this.$route.path != "/") this.$router.push("/");
            this.dialog = false;
          }
        })
        .catch((error) => {})
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
  height: 141px;
  background: white;
}

.text_field_outlined {
  border: 2px solid #cccccc;
}
</style>
