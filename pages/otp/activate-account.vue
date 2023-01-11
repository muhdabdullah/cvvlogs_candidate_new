<template>
  <v-container class="tw-h-full">
    <v-row class="tw-h-full">
      <v-col class="tw-h-full" align-self="center">
        <v-card class="my-10 mx-auto" max-width="500">
          <h1
            class="
              primary--text
              pa-3
              tw-font-bold tw-text-3xl
              text-center text-capitalize
            "
          >
            Activate Account
          </h1>
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
              v-model="otp"
              @keyup.enter="submit"
              outlined
            ></v-text-field>

            <div class="d-flex flex-wrap align-center justify-space-around">
              <v-btn
                width="45%"
                color="primary"
                depressed
                class="text-capitalize"
                :disabled="!otp"
                :loading="buttonLoader"
                @click="submit"
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
      label: null,
      otp: null,
      OTP_Label: null,
      OPT_heading: null,
      buttonLoader: false,
      resendLoader: false,
    };
  },
  async mounted() {
    const { resend } = this.$route.params;
    if (resend) this.resend();
  },
  methods: {
    async submit() {
      await this.otp_disable();
    },
    async resend() {
      await this.send_disable_otp();
    },

    async otp_disable() {
      this.buttonLoader = true;
      await this.$api.utilsService
        .send_otp_activate({ code: this.otp })
        .then((response) => {
          if (response?.status == 200) {
            this.reset();
            if (this.$route.path != "/") this.$router.push("/");
          } else if (response?.status) {
            this.$notifier.showMessage({
              content: `${response?.message} - ${response?.status}`,
              color: "error",
            });
          }
        })
        .finally(() => (this.buttonLoader = false));
    },
    async send_disable_otp(noToast) {
      this.resendLoader = true;
      await this.$api.utilsService
        .resend_otp()
        .then((response) => {
          if (response?.status == 200) {
            if (!noToast) {
              this.$notifier.showMessage({
                content: response?.message || "OTP sent!",
                color: "success",
              });
            }
            this.reset();
          }
        })
        .finally(() => (this.resendLoader = false));
    },
    reset() {
      this.otp = null;
    },
  },
};
</script>
  
  <style>
</style>