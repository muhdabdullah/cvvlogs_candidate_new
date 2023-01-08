<template>
  <v-container>
    <v-row class="ma-8">
      <v-col>
        <div class="d-flex justify-center flex-column">
          <h1
            :class="`primary--text text-center tw-font-bold ${
              $vuetify.breakpoint.mobile ? 'tw-text-4xl' : 'tw-text-5xl'
            }`"
          >
            Feedback
          </h1>
          <div class="d-flex justify-center mt-4">
            <v-card
              min-width="950"
              min-height="534"
              class="cardDesign"
              elevation="1"
              outlined
            >
              <div class="ma-12">
                <h1 class="tw-text-2xl tw-text-black tw-font-medium">
                  What did you like the most? What did you like the least?
                </h1>
                <p class="primary--text tw-font-bold tw-text-base mt-6">
                  Write a review
                </p>
                <v-form
                  ref="form"
                  v-model="formHasErrors"
                  @submit.prevent="submit"
                >
                  <div style="height: 100%">
                    <v-textarea
                      solo
                      v-model="review"
                      required
                      label="Write your review here"
                      rows="10"
                      :rules="[() => !!review || 'This field is required']"
                    ></v-textarea>
                  </div>
                  <v-btn
                    :disabled="!formHasErrors"
                    :loading="loading"
                    width="100%"
                    height="38"
                    class="secondary text-capitalize tw-text-base tw-font-bold"
                    type="submit"
                    >Submit</v-btn
                  >
                </v-form>
              </div>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      formHasErrors: false,
      loading: false,
      review: null,
    };
  },
  methods: {
    submit(e) {
      if (this.$store.getters["auth/get_authId"]) {
        this.loading = true;
        this.$api.utilsService
          .send_feedback({ feedback: this.review })
          .then((response) => {
            console.log(response);

            if (response.status == 200) {
              this.$notifier.showMessage({
                content: "Feedback submitted.",
                color: "success",
              });
            }

            this.$refs.form.reset();
            this.$refs.form.resetValidation();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        // this will popup login dialog.
        this.$nuxt.$emit("init-login-dialog");
        this.$notifier.showMessage({
          content: "Sign in to submit feedback.",
          color: "info",
        });
      }
    },
  },
};
</script>

<style lang="scss">
.content1 {
  white-space: pre-line;
}
.danger {
  color: #dc3545 !important;
}
.cardDesign {
  border-radius: 10px !important;
}
</style>
