<template>
  <div v-if="title" class="tw-w-full my-5">
    <v-row align="center" no-gutters>
      <v-col>
        <h1 class="md:tw-text-3xl tw-text-sm tw-font-bold text--primary">
          {{ title }}
        </h1>
      </v-col>

      <v-col align="right">
        <v-btn :to="route" text>
          <span
            class="
              md:tw-text-xl
              tw-text-sm tw-font-semibold
              text-capitalize
              primary--text
            "
          >
            View All
          </span>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider class="my-2"></v-divider>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    route: {
      type: String,
    },
  },
};
</script>

<style>
</style>