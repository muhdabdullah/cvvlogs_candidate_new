<template>
  <v-dialog persistent v-model="dialog" max-width="640px">
    <template v-if="!applyJob" v-slot:activator="{ on, attrs }">
      <v-btn
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
      </v-btn>
    </template>

    <v-card outlined>
      <section id="video__cv__container">
        <video id="video__source" controls width="100%" height="300" autoplay>
          <source :src="''" type="video/mp4" />
        </video>
      </section>

      <v-card-text>
        <v-container>
          <v-file-input
            v-if="!videoPreviewUrl"
            chips
            prepend-icon="mdi-movie-play"
            accept=".mp4, .mp3, .mkv, .webm, .mov, .avi"
            outlined
            color="success accent-4"
            v-model="fileData"
            show-size
            label="Select video"
          >
          </v-file-input>

          <v-divider class="my-5"></v-divider>

          <div class="d-flex align-center justify-center">
            <v-btn
              v-if="videoPreviewUrl && !jobId"
              dark
              outlined
              min-width="300"
              height="50"
              rounded
              :loading="buttonLoader"
              color="red"
              @click="deleteVideo"
            >
              Delete Video
            </v-btn>

            <v-btn
              v-else-if="applyJob && jobId"
              depressed
              min-width="300"
              height="50"
              rounded
              :disabled="dataLoading"
              :loading="buttonLoader"
              color="secondary"
              @click="applyForJob"
            >
              Apply
            </v-btn>

            <v-btn
              v-else
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
  name: "upload-video-cv",
  props: {
    jobId: {
      type: Number,
    },
    applyJob: {
      type: Boolean,
      default: false,
    },
    initDialog: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    dialog(val) {
      if (val) {
        this.getUserVideo();
      }
    },
    initDialog(val) {
      if (val) {
        this.dialog = val;
      }
    },
  },
  data() {
    return {
      dialog: false,
      dataLoading: false,
      buttonLoader: false,
      fileData: null,
      videoPreviewUrl: null,
      rules: [
        (value) => {
          return !value || !value.length;
        },
      ],
    };
  },
  methods: {
    async applyForJob() {
      this.buttonLoader = true;
      await this.$api.jobService
        .apply_job({
          job_id: this.jobId,
          videos: this.videoPreviewUrl?.video_id,
        })
        .then((response) => {
          if (response?.status == 200) {
            this.dialog = false;
            this.$emit("closeDialog");
            this.$emit("reload");
          }

          this.$notifier.showMessage({
            content: response?.message,
            color: response?.status == 200 ? "success" : "error",
          });
        })
        .finally(() => (this.buttonLoader = false));
    },
    async getUserVideo() {
      this.dataLoading = true;
      await this.$api.documnetService
        .getUserVideos()
        .then((response) => {
          if (response?.data?.videos) {
            this.dataLoading = false;
            this.videoPreviewUrl = response.data.videos[0];
            // Set Video
            this.selectVideo(this.videoPreviewUrl?.vid_url);
          }
        })
        .finally(() => {
          this.dataLoading = false;
        });
    },
    close() {
      this.$emit("closeDialog");
      this.dialog = false;
      this.fileData = null;
      this.videoPreviewUrl = null;
      document.getElementById("video__source").src = "";
    },
    selectVideo(video, type) {
      if (video) {
        if (type == "video") {
          document.getElementById("video__source").src =
            URL.createObjectURL(video);
        } else {
          document.getElementById("video__source").src = video;
        }
      }
    },
    async deleteVideo() {
      this.$swal
        .fire({
          text: "Are you sure you want to delete?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
        })
        .then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          await this.$api.documnetService
            .deleteUserVideo(this.videoPreviewUrl?.video_id)
            .then(async (response) => {
              if (response.status == 200) {
                this.videoPreviewUrl = null;
                this.$emit("reload");
                this.close();
              }
            });
        });
    },
    async save() {
      this.buttonLoader = true;

      const formData = new FormData();
      formData.append("file", this.fileData);

      await this.$api.documnetService
        .uploadCvVideo(formData)
        .then((response) => {
          if (response.status == 200) {
            this.$emit("reload");
            this.close();
            this.getUserVideo();
          }
        })
        .finally(() => (this.buttonLoader = false));
    },
  },
};
</script>

<style lang="scss" scoped>
#video__cv__container {
  video {
    height: 360px !important;
    max-width: 640px;
  }
}
</style>
  