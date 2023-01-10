<template>
  <div class="text-center">
    <v-dialog width="582" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <h5 class="py-1" v-bind="attrs" v-on="on">Forgot password ?</h5>
      </template>
      <v-card
        color="white"
        width="582"
        rounded
        flat
        class="mx-auto tw-border-0"
      >
        <div class="white--text text-center pa-5">
          <span class="tw-font-bold tw-text-2xl primary--text"
            >Forgot your password?</span
          >
          <h6 class="tw-text-sm black--text py-2">
            Enter your email address below and we will send you a reset password
            link.
          </h6>
        </div>
        <v-card-text class="pa-5">
          <v-form ref="form">
            <v-text-field
              class="mb-2"
              v-model="email"
              :rules="emailRules"
              type="email"
              outlined
              @keyup.enter="submit"
              placeholder="Enter Registered Email ID"
            ></v-text-field>

            <v-btn
              block
              light
              color="secondary"
              height="50"
              size="large"
              :loading="loading"
              @click="submit"
              depressed
            >
              Submit
            </v-btn>

            <h6 class="secondary--text pa-3 text-right">
              Remember your password?
              <span
                @click="dialog = false"
                to="/"
                class="tw-font-bold secondary--text tw-cursor-pointer"
                >Login instead</span
              >
            </h6>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      form: null,
      email: null,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$api.authService
          .send_forget_password_mail({ email: this.email })
          .then((response) => {
            if (response.status == 200) {
              this.$notifier.showMessage({
                content: "Email sent successfully.",
                color: "success",
              });
              this.dialog = false;
              this.email = null;
              this.$refs.form.reset();
            }
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style>
</style>