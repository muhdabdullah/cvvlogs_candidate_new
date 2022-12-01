<template>
  <div class="text-center">
    <v-dialog width="582" persistent v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          color="primary"
          height="35"
          width="110"
          rounded
          depressed
        >
          Register
        </v-btn>
      </template>
      <v-card
        color="primary"
        width="582"
        height="516"
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

            <div class="d-flex align-center white--text justify-space-between">
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
              Don't have an account? <span class="tw-font-bold"> Sign in </span>
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
