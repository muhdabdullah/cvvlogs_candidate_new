<template>
  <div>
    <section>
      <div>
        <v-img
          cover
          lazy-src="img/homeCustomerImg.png"
          src="img/homeCustomerImg.png"
        >
          <div class="d-flex flex-column justify-center align-center ma-5">
            <!-- <p class="tw-font-bold tw-text-2xl secondary--text">
            We are trusted in our community
          </p> -->
            <h1
              class="
                md:tw-text-6xl
                tw-text-base
                text-center
                white--text
                tw-font-normal
                ma-5
              "
            >
              Here's What our customers have to say
            </h1>
            <div class="ma-2">
              <v-img contain lazy-src="img/rthImg.png" src="img/rthImg.png" />
            </div>
            <!-- Social Media Ratings -->
            <!-- <div class="d-flex">
            <v-img
              v-for="n in 3"
              :key="n"
              contain
              :lazy-src="'img/ratting' + n + '.png'"
              :src="'img/ratting' + n + '.png'"
            />
          </div> -->

            <section class="cardsTop">
              <div class="mt-4 text-center">
                <!-- <v-row class="d-flex justify-content-center"> -->
                <div class="d-flex justify-center" v-for="nn in 2" :key="nn">
                  <v-card
                    class="ma-3"
                    max-width="344"
                    v-for="n in (nn = 3)"
                    :key="n"
                    width="344"
                  >
                    <v-card-text>
                      <div class="d-flex justify-space-between align-center">
                        <h2 class="tw-text-3xl text--primary tw-font-extrabold">
                          Bonnie M
                        </h2>
                        <span class="tw-text-black">Jan, 21, 2021</span>
                      </div>
                      <div class="text-left">
                        <v-rating
                          v-model="rating"
                          background-color="orange lighten-3"
                          color="orange"
                        ></v-rating>
                      </div>
                      <p class="tw-text-black text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>
                    </v-card-text>

                    <v-card-actions> </v-card-actions>
                  </v-card>
                </div>
                <!-- </v-row> -->
                <!-- <v-btn
          class="text-capitalize"
          color="secondary"
          height="64"
          depressed
          to="/register"
          tile
          width="224"
        >
          Registered Now</v-btn
        > -->
              </div>
            </section>
          </div>
        </v-img>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 4,
    };
  },
};
</script>

<style lang="scss">
.cardsTop {
  // margin-top: -200px;
  // position: relative;
  // bottom: 370px;
}
</style>
