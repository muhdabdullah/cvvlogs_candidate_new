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

/* Scroll bars */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(158, 158, 158, 0.3);
  border-radius: 6px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  height: 8px;
  width: 8px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(158, 158, 158, 0.178);
  background-color: #b0b0b093;
}
</style>
