<template>
  <v-container fluid class="pa-0">
    <v-row align="start" no-gutters>
      <v-col cols="12">
        <div class="tw-relative">
          <v-img
            class="img__gray"
            style="width: 100%"
            src="img/dashboard.png"
          />

          <div
            class="tw-absolute tw-top-0 tw-w-full tw-h-full d-flex flex-column justify-center align-center"
          >
            <h1
              class="md:tw-text-6xl tw-text-base text-center white--text tw-font-bold px-2 py-10"
            >
              Get Your Dream Job Today!
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
                      <v-icon color="primary" size="x-large">
                        mdi-keyboard
                      </v-icon>
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
                    placeholder="Category"
                    type="text"
                    hide-details
                    background-color="white"
                    class="mx-1"
                    filled
                    rounded
                  >
                  </v-select>

                  <v-btn class="ml-2 secondary" icon fab>
                    <v-icon color="white" size="x-large">mdi-magnify</v-icon>
                  </v-btn>
                </div>

                <p class="text-center white--text ma-1">
                  We will deliver 7 days a week, 365 days a year get a free
                  quote: <span class="tw-font-bold">(123) - 45 - 7890</span>
                </p>
              </v-card-text>
            </v-card>
          </div>
        </div>
        <v-card flat rounded="0" color="secondary" height="10"></v-card>

        <!-- Job Application -->
        <JobsWidget />

        <section class="mt-15">
          <v-img contain style="width: 100%" src="img/home_banner.png"> </v-img>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.rounded__rect {
  border-radius: 40px !important;
}

.img__gray {
  filter: grayscale(60%);
  filter: brightness(50%);
}
</style>

<script setup></script>
