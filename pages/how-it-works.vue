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
            src="https://www.youtube.com/embed/QAOHAHHOIy0"
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
export default {};
</script>

<style></style>
