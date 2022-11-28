<template>
  <v-footer class="d-flex flex-column pa-0">
    <v-card
      variant="flat"
      rounded="0"
      color="secondary"
      height="10"
      width="100%"
    ></v-card>
    <div class="bg-footer text-white d-flex w-100 align-center px-4">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" lg="3" xl="3">
            <nuxt-img
              format="webp"
              loading="lazy"
              class="mr-10"
              fit="contain"
              width="280"
              src="./img/logo.png"
            />
            <p class="pa-1 my-2">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well Reference site about Lorem Ipsum, giving
              information on its origins, as well Reference site about Lorem
              Ipsum, giving information on its origins.”
            </p>
          </v-col>
          <v-col cols="12" md="3" lg="3" xl="3">
            <h3 class="font-weight-bold">Quick Links</h3>
          </v-col>
          <v-col cols="12" md="3" lg="3" xl="3">
            <h3 class="font-weight-bold">Information</h3>
          </v-col>
          <v-col cols="12" md="3" lg="3" xl="3">
            <h3 class="font-weight-bold">Subscribe</h3>

            <h3 class="font-weight-bold mt-15">Social Media</h3>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-0"
              :icon="icon"
              variant="plain"
              size="32"
            ></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="px-4 py-1 bg-primary text-center w-100">
      &copy;2020-{{ new Date().getFullYear() }} — cvvlogs.com All Rights
      Reserved.
    </div>
  </v-footer>
</template>

<script setup>
import { ref } from "vue";

const icons = ref([
  "mdi-facebook",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-instagram",
]);
</script>

<style lang="scss" scoped>
.bg-footer {
  background: #1f212a;
  height: 460px;
}
</style>
