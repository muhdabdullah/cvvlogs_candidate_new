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

<script>
export default {
  mounted() {
    if (localStorage.getItem("auth_id")) {
      let obj = {
        auth_id: localStorage.getItem("auth_id"),
      };

      let userData = JSON.parse(localStorage.getItem("userData"));

      if (userData) {
        obj = {
          ...obj,
          ...userData,
        };
      } else {
        obj.onlyID = true;
      }

      this.$store.dispatch("auth/set_authId", obj);
    }
  },
};
</script>

<style>
.custom_wd_container {
  max-width: 1380px;
}
</style>
