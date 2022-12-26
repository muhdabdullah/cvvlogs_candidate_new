<template>
  <v-dialog persistent v-model="dialog" max-width="640px">
    <template v-slot:activator="{ on, attrs }">
      <!-- <v-btn
        v-bind="attrs"
        v-on="on"
        width="307"
        height="50"
        color="secondary"
        rounded
        depressed
        class="mr-2"
        :disabled="buttonLoader"
      >
        <span class="text-capitalize text-white"
          >Upload Video <span class="text-uppercase">CV</span></span
        >
      </v-btn> -->
      <v-btn
        v-bind="attrs"
        v-on="on"
        dark
        width="307"
        height="50"
        color="red"
        rounded
        depressed
      >
        <span class="text-capitalize"
          >Record Intro <span class="text-uppercase">Video</span></span
        ></v-btn
      >
    </template>

    <v-card outlined>
      <section id="video__cv__container">
        <video id="video__source" controls width="100%" height="300" autoplay>
          <source :src="''" type="video/mp4" />
        </video>
      </section>

      <v-card-text>
        <v-container>
          <v-divider class="my-5"></v-divider>

          <div class="d-flex align-center justify-center">
            <v-btn
              depressed
              min-width="300"
              height="50"
              rounded
              :disabled="dataLoading"
              :loading="buttonLoader"
              color="secondary"
              @click="save"
            >
              save
            </v-btn>

            <v-btn
              :disabled="dataLoading"
              @click="close"
              small
              icon
              fab
              class="red mx-2"
            >
              <v-icon color="white">mdi-close</v-icon>
            </v-btn>
          </div>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dataLoading: false,
      buttonLoader: false,
      dialog: false,
    };
  },
  methods: {
    save() {},
    close() {
      this.$emit("closeDialog");
      this.dialog = false;

      document.getElementById("video__source").src = "";
    },
  },
};
</script>

<style>
</style>