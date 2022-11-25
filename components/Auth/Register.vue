<template>
  <div class="text-center">
    <v-btn color="primary" height="35" width="110" rounded="xl" variant="flat">
      Register

      <v-dialog persistent v-model="dialog" activator="parent">
        <v-card
          color="primary"
          width="582"
          height="516"
          rounded="lg"
          flat
          class="mx-auto"
        >
          <div class="pa-2 card__login__bg d-flex justify-end">
            <div class="d-flex align-center tw-w-full">
              <nuxt-img
                class="mx-auto"
                fit="contain"
                height="100"
                src="./img/logo.png"
              />
            </div>

            <v-btn
              size="29"
              variant="flat"
              rounded="xl"
              class="bg-primary"
              color="primary"
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
                    variant="solo"
                    placeholder="First Name"
                    density="comfortable"
                  ></v-text-field>

                  <v-text-field
                    hide-details
                    :readonly="loading"
                    :rules="[required]"
                    class="mb-2"
                    variant="solo"
                    placeholder="Email"
                    density="comfortable"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    hide-details
                    class=""
                    :readonly="loading"
                    variant="solo"
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
                    variant="solo"
                    placeholder="Last Name"
                    density="comfortable"
                  ></v-text-field>

                  <v-text-field
                    hide-details
                    :readonly="loading"
                    :rules="[required]"
                    class="mb-2"
                    variant="solo"
                    type="number"
                    placeholder="Phone"
                    density="comfortable"
                  ></v-text-field>

                  <v-text-field
                    hide-details
                    class=""
                    :readonly="loading"
                    variant="solo"
                    :rules="[required]"
                    placeholder="Confirm Password"
                    density="comfortable"
                  ></v-text-field>
                </v-col>
              </v-row>

              <div class="d-flex align-center justify-space-between">
                <v-checkbox
                  hide-details
                  label="Remember me"
                  v-model="rememberMe"
                  color="white"
                ></v-checkbox>

                <NuxtLink><h5>Forgot password ?</h5></NuxtLink>
              </div>

              <v-btn
                :loading="loading"
                block
                light
                color="secondary"
                height="50"
                size="large"
                type="submit"
                variant="flat"
              >
                Sign Up
              </v-btn>

              <h6 class="text-secondary pa-3 text-center">
                Don't have an account? <NuxtLink> Sign in </NuxtLink>
              </h6>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-btn>
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
  border: 2px solid #cccccc;
}
</style>
