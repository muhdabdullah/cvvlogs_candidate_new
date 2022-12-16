<template>
  <v-snackbar class="tw-w-full" top v-model="show" :color="color">
    <div class="d-flex align-center justify-space-between tw-w-full">
      <h3 class="tw-font-semibold tw-text-truncate">{{ message }}</h3>
      <v-btn class="white mx-2" x-small icon @click="show = false">
        <v-icon :color="color">mdi-close</v-icon>
      </v-btn>
    </div>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "",
      color: "",
    };
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "snackbar/showMessage") {
        this.message = state.snackbar.content;
        this.color = state.snackbar.color;
        this.show = true;
      }
    });
  },
};
</script>