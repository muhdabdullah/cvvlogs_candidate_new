<template>
  <div class="text-center">
    <v-menu rounded offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          height="35"
          rounded
          depressed
          small
          v-bind="attrs"
          v-on="on"
        >
          <span class="text-capitalize">{{
            $store.getters["auth/get_first_name"]
          }}</span>
          <v-icon small class="ml-1">mdi-arrow-down-drop-circle</v-icon>
        </v-btn>
      </template>
      <v-list class="py-0">
        <div>
          <v-btn
            to="/profile"
            nuxt
            height="50"
            class="text-capitalize"
            block
            tile
            depressed
          >
            Profile
          </v-btn>
          <v-btn height="50" class="text-capitalize" block tile depressed>
            Disable Account
          </v-btn>
          <v-btn height="50" class="text-capitalize" block tile depressed>
            Delete Account
          </v-btn>
          <v-divider></v-divider>
          <v-btn
            @click="$api.authService.logout()"
            color="error lighten-1"
            height="50"
            block
            tile
            depressed
            dark
          >
            <span class="text-capitalize">Logout</span>
          </v-btn>
        </div>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>