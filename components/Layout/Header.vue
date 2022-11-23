<template>
  <div>
    <v-app-bar color="white">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>
        <nuxt-img fit="contain" width="200" src="./img/logo.png" />
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <div class="mx-2 tw-h-full d-flex align-center justify-center">
        <AuthSignIn class="ml-2" />

        <AuthRegister class="ml-2" />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
