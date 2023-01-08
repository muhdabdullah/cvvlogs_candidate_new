<template>
  <div>
    <LayoutPageHeader text="How It Works" />
    <v-container>
      <div class="tw-max-w-4xl mx-auto">
        <p
          class="
            tw-text-2xl
            max-sm:tw-tw-text-base
            tw-font-semibold
            text-center
            tw-my-10
          "
        >
          Using our proprietary video resume format and superior analytics, we
          will help you find the perfect match. From caretakers to
          professionals, you can rely on our advanced technology to help you
          connect with employers and business in the shortest possible time.
        </p>

        <div>
          <iframe
            class="mx-auto"
            :width="$vuetify.breakpoint.mobile ? 'auto' : 700"
            height="415"
            :src="intro_video_lang"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    intro_video_lang() {
      if (
        [167, 101].includes(
          parseInt(this.$store.getters["auth/get_ip_info"]?.country_id || 0)
        )
      ) {
        return "https://www.youtube.com/embed/QAOHAHHOIy0";
      } else return "https://www.youtube.com/embed/ECWJ-xQ4P2o";
    },
  },
};
</script>

<style></style>
