<template>
  <section class="mt-15">
    <div class="mx-15 mt-15">
      <p class="tw-font-bold tw-text-lg my-5 text-center mx-15">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
      </p>
    </div>
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

    <div class="d-flex justify-center mt-6 mb-15">
      <div class="">
        <v-pagination
          v-model="page"
          :length="5"
          :total-visible="5"
        ></v-pagination>
      </div>
    </div>
  </section>
  <!-- <BlogDetails/> -->
</template>
<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
.v-pagination__item {
  background: #958a8a !important;
  color: #fff !important;
}
.v-pagination__item--active {
  box-shadow: none !important;
}
</style>
