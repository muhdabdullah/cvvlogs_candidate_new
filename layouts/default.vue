<template>
  <v-app>
    <LayoutHeader />
    <v-main>
      <v-container class="pa-0" fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <LayoutFooter />
  </v-app>
</template>

<style>
.custom_wd_container {
  max-width: 1380px;
}
</style>
