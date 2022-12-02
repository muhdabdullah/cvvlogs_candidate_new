<template>
  <header>
    <div class="tw-relative">
      <v-img
        class="img__gray"
        style="width: 100%"
        src="img/dashboard.png"
        lazy-src="img/dashboard.png"
      />

      <div
        class="
          tw-absolute tw-top-0 tw-w-full tw-h-full
          d-flex
          flex-column
          justify-center
          align-center
        "
      >
        <h1
          class="
            md:tw-text-5xl
            tw-text-base
            text-center
            white--text
            tw-font-bold
            text-capitalize
            px-2
            py-10
          "
        >
          {{ main_page_heading }}
        </h1>

        <v-card
          v-if="!$vuetify.breakpoint.xs"
          class="mx-auto tw-opacity-95 rounded__rect"
          color="primary"
          height="130"
          width="940"
          depressed
        >
          <v-card-text class="d-flex flex-column justify-center tw-h-full">
            <div class="d-flex align-center justify-center">
              <v-text-field
                placeholder="Enter Your Keyword"
                type="text"
                background-color="white"
                hide-details
                class="mx-1"
                filled
                rounded
              >
                <template v-slot:append>
                  <v-icon color="primary" size="x-large"> mdi-keyboard </v-icon>
                </template>
              </v-text-field>

              <v-text-field
                placeholder="City, Province or Region"
                type="text"
                hide-details
                background-color="white"
                class="mx-1"
                filled
                rounded
              >
                <template v-slot:append>
                  <v-icon size="x-large" color="primary"
                    >mdi-map-marker-outline</v-icon
                  >
                </template>
              </v-text-field>

              <v-select
                style="max-width: 272px"
                placeholder="Category"
                type="text"
                hide-details
                clearable
                background-color="white"
                class="mx-1"
                :items="job_categories"
                item-text="name"
                item-value="id"
                filled
                rounded
              >
              </v-select>

              <v-btn class="ml-2 secondary" icon fab>
                <v-icon color="white" size="x-large">mdi-magnify</v-icon>
              </v-btn>
            </div>

            <p class="text-center white--text ma-1">
              We will deliver 7 days a week, 365 days a year get a free quote:
              <span class="tw-font-bold">(123) - 45 - 7890</span>
            </p>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <v-card flat rounded="0" color="secondary" height="10"></v-card>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    job_categories() {
      if (this.$store.getters["get_jobs_by_industry"]) {
        return this.$store.getters["get_jobs_by_industry"];
      }
      return [];
    },
    main_page_heading() {
      if (
        this.$store.getters["auth/get_authId"] &&
        this.$store.getters["auth/get_candidate_name"]
      ) {
        let name = `Welcome Back, ${this.$store.getters["auth/get_candidate_name"]}`;
        if (name) return name;
      }
      return "Get Your Dream Job Today!";
    },
  },
};
</script>

<style>
</style>