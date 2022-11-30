<template>
  <header class="tw-relative">
    <nuxt-img
      class="page__header img__gray"
      quality="100"
      src="img/dashboard.png"
    />
    <h1
      class="tw-absolute tw-top-0 tw-w-full tw-h-full tw-text-6xl white--text text-center tw-font-bold text-capitalize d-flex flex-column justify-center align-center"
    >
      {{ text }}
    </h1>
    <v-card flat rounded="0" color="secondary" height="10"></v-card>
  </header>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.page__header {
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: top;
}
</style>
