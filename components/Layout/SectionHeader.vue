<template>
  <v-row align="center" no-gutters>
    <v-col>
      <div class="borderVerticalLine d-flex align-center">
        <h3
          class="md:tw-text-5xl tw-text-xl tw-font-bold ml-5"
          style="color: #282828"
        >
          {{ text }}
        </h3>
      </div>
    </v-col>

    <v-col v-if="viewAllRoute" align="right">
      <v-btn
        :to="viewAllRoute"
        :width="$vuetify.breakpoint.mobile ? 100 : 160"
        :height="$vuetify.breakpoint.mobile ? 30 : 50"
        depressed
        color="secondary"
      >
        <span
          class="md:tw-text-base tw-text-sm font-weight-light text-capitalize"
        >
          View All
        </span>
      </v-btn>
    </v-col>
  </v-row>
</template>
  
  <script>
export default {
  props: {
    text: {
      type: String,
    },
    viewAllRoute: {
      type: String,
    },
  },
};
</script>
  
  <style lang="scss" scoped>
</style>
  