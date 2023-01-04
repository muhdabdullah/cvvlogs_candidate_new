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
          <video id="video" controls width="100%" height="300" autoplay></video>
        </section>
  
        <v-card-text>
          <v-container>
            <v-divider class="my-5"></v-divider>
  
            <div class="d-flex align-center justify-center">
              <v-btn
                depressed
                min-width="100"
                class="mx-2"
                height="50"
                rounded
                color="success"
                id="start_camera"
                @click="Start_camera"
              >
                Start Camera
              </v-btn>
              <v-btn
                depressed
                min-width="300"
                height="50"
                rounded
                color="secondary"
                id="start-record"
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
                id="stop_record"
                @click="save"
                download="test.webm"
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
              <!-- <a id="download-video" download="test.webm">Download Video</a> -->
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
        camera_stream: null,
        media_recorder: null,
        stop_button: document.querySelector("#stop-record"),
        download_link: document.querySelector("#download-video"),
        _video: document.querySelector("#video"),
        start_camera: null,
      };
    },
    // computed: {
    //   navigator() {
    //     return (
    //       navigator.getUserMedia ||
    //       navigator.webkitGetUserMedia ||
    //       navigator.mozGetUserMedia ||
    //       navigator.msGetUserMedia
    //     );
    //   },
    // },
    methods: {
      async Start_camera() {
        const start_camera = document?.querySelector("#start-camera");
        this.camera_stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          },
          audio: true,
        });
        video.srcObject = this.camera_stream;
      },
      record_video() {
        let blobs_recorded = [];
        // set MIME type of recording as video/webm
        this.media_recorder = new MediaRecorder(this.camera_stream, {
          mimeType: "video/webm",
        });
  
        console.log(this.camera_stream);
  
        // event : new recorded video blob available
        this.media_recorder.addEventListener("dataavailable", function (e) {
          blobs_recorded.push(e.data);
        });
  
        // event : recording stopped & all blobs sent
        this.media_recorder.addEventListener("stop", function () {
          // create local object URL from the recorded video blobs
          let video_local = URL.createObjectURL(
            new Blob(blobs_recorded, { type: "video/webm" })
          );
          console.log("video_local", video_local);
          this.download_link.href = video_local;
        });
  
        // start recording with each recorded blob having 1 second video
        this.media_recorder.start(1000);
      },
      stop_recording() {},
      save() {
        this.media_recorder?.stop();
        console.log(this.media_recorder);
      },
      close() {
        this.$emit("closeDialog");
        this.dialog = false;
      },
    },
  };
  </script>
  
  <style></style>
  