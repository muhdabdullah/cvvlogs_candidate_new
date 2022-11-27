<template>
  <v-container fluid class="pa-0">
    <v-row align="start" no-gutters>
      <v-col cols="12">
        <div class="tw-relative">
          <nuxt-img
            fit="fill"
            class="tw-grayscale tw-brightness-50"
            style="width: 100%"
            src="img/dashboard.png"
          >
          </nuxt-img>
          <div
            class="tw-absolute tw-top-0 tw-w-full tw-h-full d-flex flex-column justify-center align-center"
          >
            <h1 class="tw-text-6xl text-white tw-font-bold px-2 py-10">
              Get Your Dream Job Today!
            </h1>

            <v-card
              class="mx-auto tw-opacity-95"
              color="primary"
              height="130"
              width="940"
              rounded="xl"
              variant="flat"
            >
              <v-card-text class="d-flex flex-column justify-center tw-h-full">
                <div class="d-flex align-center justify-center">
                  <v-text-field
                    placeholder="Enter Your Keyword"
                    type="text"
                    variant="filled"
                    bg-color="white"
                    hide-details
                    class="mx-1"
                    rounded="xl"
                  >
                    <template v-slot:append-inner>
                      <v-icon
                        color="primary"
                        size="large"
                        icon="mdi-keyboard"
                      ></v-icon>
                    </template>
                  </v-text-field>

                  <v-text-field
                    placeholder="City, Province or Region"
                    type="text"
                    variant="filled"
                    hide-details
                    bg-color="white"
                    class="mx-1"
                    rounded="xl"
                  >
                    <template v-slot:append-inner>
                      <v-icon icon="mdi-menu"></v-icon>
                    </template>
                  </v-text-field>

                  <v-select
                    placeholder="Category"
                    type="text"
                    hide-details
                    variant="filled"
                    bg-color="white"
                    class="mx-1"
                    rounded="xl"
                  >
                  </v-select>

                  <v-btn class="ml-2" icon color="secondary">
                    <v-icon
                      color="white"
                      size="x-large"
                      icon="mdi-magnify"
                    ></v-icon>
                  </v-btn>
                </div>

                <p class="text-center ma-2">
                  We will deliver 7 days a week, 365 days a year get a free
                  quote: <span class="tw-font-bold">(123) - 45 - 7890</span>
                </p>
              </v-card-text>
            </v-card>
          </div>
        </div>
        <v-card
          variant="flat"
          rounded="0"
          color="secondary"
          height="10"
        ></v-card>

        <section class="mt-15">
          <nuxt-img
            fit="contain"
            maxWidth="1200"
            format="webp"
            class=""
            style="width: 100%"
            src="img/home_banner.png"
          >
          </nuxt-img>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss"></style>

<script>
export default {};
</script>
