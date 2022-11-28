<template>
  <v-container>
    <v-card max-width="1200" variant="flat" class="mx-auto">
      <v-card-text class="text-center">
        <span class="tw-text-5xl tw-font-bold">Upload your CV/Video CV</span>

        <h4 class="text-red tw-text-xl tw-font-bold text-uppercase mt-5">
          IMPORTANT
        </h4>
        <p class="tw-text-lg tw-font-bold tw-w-2/3 mx-auto">
          In order to protect your privacy, we strongly recommend that you do
          not share any personal data, i.e. full name, home address, phone
          number, email address in your video resume.
        </p>
        <div class="d-flex align-center justify-center flex-wrap mt-10 my-5">
          <v-btn
            width="307"
            height="50"
            color="primary"
            rounded="xl"
            variant="flat"
            class="mr-2"
          >
            <span class="text-capitalize"
              >Upload <span class="text-uppercase">CV</span></span
            >
          </v-btn>

          <v-btn
            width="307"
            height="50"
            color="secondary"
            rounded="xl"
            variant="flat"
            class="mr-2"
          >
            <span class="text-capitalize text-white"
              >Upload Video <span class="text-uppercase">CV</span></span
            >
          </v-btn>

          <v-btn
            width="307"
            height="50"
            color="red"
            rounded="xl"
            variant="flat"
          >
            <span class="text-capitalize"
              >Record Intro <span class="text-uppercase">Video</span></span
            ></v-btn
          >
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
