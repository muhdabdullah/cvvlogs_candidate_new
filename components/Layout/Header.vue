<template>
  <div>
    <v-system-bar color="#cccccc" window>
      <v-container class="pa-0">
        <div class="d-flex justify-space-between align-center">
          <div class="call_to_actions d-flex align-center">
            <div class="phone">
              <v-icon color="primary" icon="mdi-phone"></v-icon>
              <span class="ml-2">123-456-789</span>
            </div>

            <div class="email ml-5">
              <v-icon color="primary" icon="mdi-email"></v-icon>
              <a href="mailto:info@cvvlogs.com">
                <span class="ml-2">info@cvvlogs.com</span>
              </a>
            </div>
          </div>
        </div>
      </v-container>
    </v-system-bar>
    <v-app-bar elevation="0" color="white" class="tw-w-full">
      <v-container class="pa-0 tw-h-full">
        <div class="d-flex justify-space-between align-center tw-h-full">
          <nuxt-img
            format="webp"
            loading="lazy"
            class="mr-10"
            fit="contain"
            width="200"
            src="./img/logo.png"
          />

          <div class="tw-h-full">
            <v-btn
              selected-class="btn__active__class"
              color="secondary"
              variant="flat"
              height="100%"
              value="left"
              rounded="0"
            >
              Home
            </v-btn>

            <v-btn height="100%" rounded="0"> About Us </v-btn>

            <v-btn height="100%" rounded="0"> Jobs </v-btn>

            <v-btn height="100%" rounded="0"> How It Works </v-btn>

            <v-btn height="100%" rounded="0"> Packages </v-btn>

            <v-btn height="100%" rounded="0"> Contact Us </v-btn>
          </div>

          <v-spacer></v-spacer>

          <div class="mx-2 tw-h-full d-flex align-center justify-center">
            <v-btn color="red" height="35" rounded="xl" variant="flat">
              <span class="text-capitalize">Upload Resume</span>
              <v-icon
                size="x-large"
                class="ml-2"
                icon="mdi-arrow-up-thin-circle-outline"
              ></v-icon>
            </v-btn>

            <AuthSignIn class="ml-2" />

            <AuthRegister class="ml-2" />
          </div>
        </div>
      </v-container>
    </v-app-bar>
    <v-app-bar height="10" color="secondary"></v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.v-toolbar {
  width: 100% !important;
}

.btn__active__class {
  background: #ff9900 !important;
}
</style>
