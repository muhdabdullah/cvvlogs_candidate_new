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
            <v-card min-width="950" min-height="534" class="cardDesign">
              <div class="ma-12">
                <h1 class="tw-text-2xl tw-text-black tw-font-medium">
                  What did you like the most? What did you like the least?
                </h1>
                <p class="primary--text tw-font-bold tw-text-base mt-6">
                  Write a review
                </p>
                <div style="height: 100%;">
                    <v-textarea
                  outlined
                  name="input-7-4"
                  label="Write your review here"
                  rows="10"
                ></v-textarea>
                </div>
                <v-btn width="100%" height="38" class="secondary text-capitalize tw-text-base tw-font-bold">Submit</v-btn>
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
    return {};
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
