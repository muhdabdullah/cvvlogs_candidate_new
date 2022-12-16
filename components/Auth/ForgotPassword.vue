<template>
  <div class="text-center">
    <v-dialog width="582" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <h5 v-bind="attrs" v-on="on">Forgot password ?</h5>
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
          <v-form v-model="form" @submit.prevent="">
            <v-text-field
              hide-details
              class="mb-2"
              outlined
              placeholder="Enter Registered Email ID"
            ></v-text-field>

            <v-btn
              block
              light
              color="secondary"
              height="50"
              size="large"
              type="submit"
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
      form: null,
    };
  },
};
</script>

<style>
</style>