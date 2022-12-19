<template>
  <v-container class="tw-h-full">
    <v-row class="tw-h-full">
      <v-col class="tw-h-full" align-self="center">
        <v-card class="my-10 mx-auto" max-width="500">
          <v-card-text class="pa-3">
            <div class="my-3 text-center black--text">
              <h1 class="primary--text tw-font-bold tw-text-2xl">Enter OTP</h1>
              <h3>Check your phone for the OTP</h3>
            </div>

            <label class="text-left tw-w-full black--text" for="OPT"
              >Enter OTP</label
            >
            <v-text-field
              placeholder="Enter the 4 digit OTP"
              class="my-2"
              outlined
            ></v-text-field>

            <div class="d-flex flex-wrap align-center justify-space-around">
              <v-btn
                width="45%"
                color="primary"
                depressed
                class="text-capitalize"
                :loading="buttonLoader"
                @click="otp_disable"
              >
                Submit
              </v-btn>

              <v-btn
                width="45%"
                color="primary"
                depressed
                class="text-capitalize"
                :disabled="buttonLoader"
                :loading="resendLoader"
                @click="resend"
              >
                Resend
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      otp: null,
      buttonLoader: false,
      resendLoader: false,
    };
  },
  methods: {
    async otp_disable() {
      this.buttonLoader = true;
      await this.$api.utilsService
        .confirm_disable({ code: this.otp })
        .then((response) => {
          if (response.status == 200) {
            this.otp = null;
          }
        })
        .finally(() => (this.buttonLoader = false));
    },
    async resend() {
      this.resendLoader = true;
      await this.$api.utilsService
        .disable_otp()
        .then((response) => {
          if (response.status == 200) {
            this.$notifier.showMessage({
              content: response?.message || "OTP sent!",
              color: "success",
            });
          }
        })
        .finally(() => (this.resendLoader = false));
    },
  },
};
</script>

<style>
</style>