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
      <!-- <v-btn
        v-bind="attrs"
        v-on="on"
        width="307"
        height="50"
        color="red"
        rounded
        disabled
        depressed
      >
        <span class="text-capitalize"
          >Record Intro <span class="text-uppercase">Video</span></span
        ></v-btn
      > -->
    </template>

    <v-card outlined>
      <section id="video__cv__container">
        <video
          id="video___rec__source"
          controls
          width="100%"
          height="300"
          autoplay
        >
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
              color="secondary"
              @click="record_video"
            >
              Record Video
            </v-btn>

            <v-btn
              depressed
              min-width="100"
              class="mx-2"
              height="50"
              rounded
              :disabled="dataLoading"
              :loading="buttonLoader"
              color="success"
              @click="save"
            >
              save
            </v-btn>

            <v-btn
              :disabled="dataLoading"
              id="stop_recording"
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
      camera_stream: null,
      mediaRecorder: null,
      recordedChunks: [],
    };
  },
  computed: {
    navigator() {
      return (
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
      );
    },
  },
  methods: {
    record_video() {
      //let video = document.querySelector("#video___rec__source");

      var player = document.getElementById("video___rec__source");
      let shouldStop = false;
      let stopped = false;
      const downloadLink = document.getElementById("download");
      const stopButton = document.getElementById("stop_recording");

      stopButton.addEventListener("click", function () {
        shouldStop = true;
      });

      var handleSuccess = function (stream) {
        const options = { mimeType: "video/webm" };
        const recordedChunks = [];
        const mediaRecorder = new MediaRecorder(stream, options);

        mediaRecorder.addEventListener("dataavailable", function (e) {
          if (e.data.size > 0) {
            recordedChunks.push(e.data);
          }

          if (shouldStop === true && stopped === false) {
            mediaRecorder.stop();
            stopped = true;
          }
        });

        mediaRecorder.addEventListener("stop", function () {
          downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
          downloadLink.download = "acetest.webm";
        });

        mediaRecorder.start();
      };

      navigator.mediaDevices
        .getUserMedia({ audio: true, video: true })
        .then(handleSuccess);
    },
    stop_recording() {
      this.mediaRecorder.stop();
      // downloadLink.href = URL.createObjectURL(new Blob(this.recordedChunks));
      // downloadLink.download = "acetest.webm";
    },
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