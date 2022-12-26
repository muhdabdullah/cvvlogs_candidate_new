<template>
  <v-container>
    <v-card flat max-width="1200" depressed class="mx-auto">
      <v-card-text class="text-center black--text">
        <span class="tw-text-5xl tw-font-bold">Upload your CV/Video CV</span>

        <h4 class="red--text tw-text-xl tw-font-bold text-uppercase mt-5">
          IMPORTANT
        </h4>
        <p class="tw-text-lg tw-font-bold tw-w-2/3 mx-auto">
          In order to protect your privacy, we strongly recommend that you do
          not share any personal data, i.e. full name, home address, phone
          number, email address in your video resume.
        </p>
        <div class="d-flex align-center justify-center flex-wrap mt-10 my-5">
          <UploadCvDoc />

          <UploadVideoCv />

          <UploadRecordVideo />
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
