<template>
  <v-container fluid class="pa-0">
    <v-row align="start" no-gutters>
      <v-col cols="12">
        <LayoutMainPageHeader />

        <!-- Job Application -->
        <JobsWidget />

        <section class="mt-15">
          <v-img contain style="width: 100%" src="img/home_banner.png"> </v-img>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss">
.rounded__rect {
  border-radius: 40px !important;
}

.img__gray {
  filter: grayscale(60%);
  filter: brightness(50%);
}
</style>


