<template>
  <div class="text-center">
    <v-btn
      color="secondary"
      height="35"
      width="110"
      rounded="xl"
      variant="flat"
    >
      Login

      <v-dialog persistent v-model="dialog" activator="parent">
        <v-card
          color="primary"
          width="500"
          height="516"
          rounded="lg"
          flat
          class="mx-auto"
        >
          <v-card-item class="card__login__bg pa-2">
            <div class="d-flex align-center justify-end">
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
            <nuxt-img
              class="mx-auto"
              fit="contain"
              width="283"
              src="./img/logo.png"
            />
          </v-card-item>

          <v-card-text class="pa-5">
            <v-form v-model="form" @submit.prevent="onSubmit">
              <v-text-field
                v-model="email"
                :readonly="loading"
                :rules="[required]"
                class="mb-2"
                variant="solo"
                placeholder="User Name"
                height="61px"
              ></v-text-field>

              <v-text-field
                v-model="password"
                class=""
                :readonly="loading"
                variant="solo"
                :rules="[required]"
                placeholder="Password"
                height="61px"
              ></v-text-field>

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
                height="60"
                size="large"
                type="submit"
                variant="flat"
              >
                Sign In
              </v-btn>

              <h6 class="text-secondary pa-3 text-center">
                Don't have an account? <NuxtLink> Sign up </NuxtLink>
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

.text_field_outlined {
  border: 2px solid #cccccc;
}
</style>
