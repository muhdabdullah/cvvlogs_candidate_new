<template>
    <v-container fluid>
      <v-row class="ma-15">
        <v-col cols="12">
          <v-card
            v-if="!$vuetify.breakpoint.xs"
            class="mx-auto tw-opacity-95 roundedBox mt-12"
            elevation="10"
            color="white"
          >
            <v-card-text class="mt-9 mb-9 tw-h-full d-flex flex-column justify-center">
              <!-- <p class="tw-text-black ml-10 ma-0 tw-text-base">
              List of recruiters viewed your profile will appear here
            </p> -->
              <div class="d-flex ml-10">
                <div class="imgBox d-flex justify-center align-center">
                  <v-img
                    height="82px"
                    max-width="142px"
                    position="center"
                    cover
                    :lazy-src="profileById?.comapany?.dp"
                    :src="profileById?.comapany?.dp"
                  />
                </div>
                <div class="d-flex flex-column justify-center ml-8">
                  <h1 class="fontColor tw-font-semibold">{{ profileById?.comapany?.name }}</h1>
                  <p class="tw-text-sm mt-2 mb-2">{{ profileById?.comapany?.tagline }}</p>
                  <p class="tw-text-base ma-0" style="color: #d3d3d3">| {{ profileById?.comapany?.industry }}</p>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="ma-15">
        <v-col cols="12" class="d-flex justify-lg-space-between">
          <v-card
            v-if="!$vuetify.breakpoint.xs"
            class="tw-opacity-95 roundedBox"
            elevation="10"
            color="white"
            width="550"
            min-height="322"
          >
            <v-card-text class="tw-h-full d-flex flex-column">
              <div class="d-flex flex-column">
                <h1 class="tw-text-4xl tw-font-medium">About Us</h1>
                <p class="tw-text-sm mt-2 mb-2">{{ profileById?.comapany?.desc }}</p>
              </div>
            </v-card-text>
          </v-card>
          <v-card
            v-if="!$vuetify.breakpoint.xs"
            class="tw-opacity-95 roundedBox"
            elevation="10"
            color="white"
            width="550"
            min-height="322"
          >
            <v-card-text class=" d-flex flex-column">
              <div class="">
                <h1 class="tw-text-xl tw-font-medium">Website</h1>
                <p class="tw-text-sm mt-2 mb-2 tw-text-sm">{{ profileById?.comapany.website }}</p>
              </div>
              <div class="">
                <h1 class="tw-text-xl tw-font-medium">Industry</h1>
                <p class="tw-text-sm mt-2 mb-2 tw-text-sm">{{ profileById?.comapany.industry }}</p>
              </div>
              <div class="">
                <h1 class="tw-text-xl tw-font-medium">Company Size</h1>
                <p class="tw-text-sm mt-2 mb-2 tw-text-sm">{{ profileById?.comapany.size }} employees</p>
              </div>
              <div class="">
                <h1 class="tw-text-xl tw-font-medium">Headquarters</h1>
                <p class="tw-text-sm mt-2 mb-2 tw-text-sm">{{ profileById?.comapany.city }}</p>
              </div>
              <div class="">
                <h1 class="tw-text-xl tw-font-medium">Founded</h1>
                <p class="tw-text-sm mt-2 mb-2 tw-text-sm">{{ profileById?.comapany.founded }}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    async asyncData({ params,$api, store }) {
      const id = params.id 
      const profileById = await $api.utilsService
        .get_Profile_by_Id(id)
        .then((response) => {
          return response.data
        });
  
      return { profileById };
    },
    data() {
      return {
        profileById: null,
      };
    },
    methods: {
      
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .roundedBox {
    border-radius: 15px !important;
  }
  .imgBox {
    width: 182px;
    height: 110px;
    background-color: #fff;
    border: 1px solid #707070;
    border-radius: 10px;
  }
  .fontColor {
    color: #808080 !important;
    font-size: 25px !important;
  }
  </style>
  