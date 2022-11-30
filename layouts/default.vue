<template>
  <!-- <v-layout>
    <LayoutHeader />

    <v-main>
      <slot />
    </v-main>
  </v-layout> -->
  <div>
    <VApp>
      <LayoutHeader />
      <VMain style="height: '100%'" class="tw-h-full">
        <slot />
      </VMain>
      <LayoutFooter />
    </VApp>
  </div>
</template>
