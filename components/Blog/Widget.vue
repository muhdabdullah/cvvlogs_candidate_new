<template>
  <section class="mt-15">
    <h3 class="tw-font-extrabold tw-text-5xl my-5 text-center">Latest Blogs</h3>

    <div class="d-flex flex-wrap align-center justify-center">
      <v-card v-for="n in 3" :key="n" outlined class="ma-3" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>
        <v-card-title>
          <p class="tw-text-xs">
            <span
              style="text-transform: uppercase; color: #4c2e8b"
              class="tw-font-semibold"
              >Featured</span
            >
            <span class="ml-4 tw-font-semibold">October, 20, 2016</span>
          </p>
        </v-card-title>
        <v-img
          height="150"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-text class="pb-0">
          <span class="tw-font-bold tw-text-xl" style="color: black">
            How to turn reviews into revenue:<br />
            Making the most of positive customer feedback.
          </span>
        </v-card-text>
        <v-card-text style="color: black" class="tw-font-normal">
          Morbi cursus libero at odio elementum consectetur. Vestibulum eleifed
          eros euismod rhoncus fringilla. Phasellus venen...
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" text>
            <span class="tw-font-bold">Read More</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <div class="d-flex justify-center mt-6">
      <v-btn
        class="tw-text-lg text-capitalize tw-font-bold"
        width="224"
        to="/blogs"
        height="64"
        depressed
        tile
        color="secondary"
        >Explore More Blogs</v-btn
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
