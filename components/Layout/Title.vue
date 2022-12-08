<template>
  <div v-if="title" class="tw-w-full">
    <v-row align="center" no-gutters>
      <v-col>
        <h1 class="tw-text-3xl tw-font-bold text--primary">{{ title }}</h1>
      </v-col>

      <v-col align="right">
        <v-btn :to="route" text>
          <span
            class="
              tw-text-xl
              max-sm:tw-text-sm
              tw-font-semibold
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