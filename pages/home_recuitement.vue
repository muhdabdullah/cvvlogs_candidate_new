<template>
    <v-container fluid class="pa-0">
        <v-row align="start" no-gutters>
            <v-col cols="12">
                <div class="tw-relative">
                    <nuxt-img fit="fill" class="img__gray" style="width: 100%" src="img/dashboard.png" />

                    <div
                        class="tw-absolute tw-top-0 tw-w-full tw-h-full d-flex flex-column justify-center align-center">
                        <h1 class="tw-text-6xl white--text tw-font-bold px-2 py-10">
                            Get Your Dream Job Today!
                        </h1>

                        <v-card class="mx-auto tw-opacity-95 rounded__rect" color="primary" height="130" width="940"
                            depressed>
                            <v-card-text class="d-flex flex-column justify-center tw-h-full">
                                <div class="d-flex align-center justify-center">
                                    <v-text-field placeholder="Enter Your Keyword" type="text" background-color="white"
                                        hide-details class="mx-1" filled rounded>
                                        <template v-slot:append>
                                            <v-icon color="primary" size="x-large">
                                                mdi-keyboard
                                            </v-icon>
                                        </template>
                                    </v-text-field>

                                    <v-text-field placeholder="City, Province or Region" type="text" hide-details
                                        background-color="white" class="mx-1" filled rounded>
                                        <template v-slot:append>
                                            <v-icon size="x-large" color="primary">mdi-map-marker-outline</v-icon>
                                        </template>
                                    </v-text-field>

                                    <v-select placeholder="Category" type="text" hide-details background-color="white"
                                        class="mx-1" filled rounded>
                                    </v-select>

                                    <v-btn class="ml-2 secondary" icon fab>
                                        <v-icon color="white" size="x-large">mdi-magnify</v-icon>
                                    </v-btn>
                                </div>

                                <p class="text-center white--text ma-1">
                                    We will deliver 7 days a week, 365 days a year get a free
                                    quote: <span class="tw-font-bold">(123) - 45 - 7890</span>
                                </p>
                            </v-card-text>
                        </v-card>
                    </div>
                </div>
                <v-card flat rounded="0" color="secondary" height="10"></v-card>
                <section class="mt-5">
                    <nuxt-img fit="fill" class="" style="width: 100%" src="img/homeCircleImg.png" />
                </section>

                <section class="mt-10">
                    <v-card class="mx-auto" rounded="xl" height="622" max-width="1180" flat>
                        <v-card-text class="py-5 tw-h-full tw-overflow-auto tw-p-10 sm:tw-p-10">
                            <v-row align="center" no-gutters>
                                <v-col>
                                    <h2 class="tw-text-4xl tw-font-black" style="color: #282828">
                                        Jobs by Industry
                                    </h2>
                                </v-col>

                                <v-col align="end">
                                    <v-btn to="/jobs"
                                        style="width: 160px; height: 50px; background-color: #ff9900; color: #ffffff">
                                        <span class="tw-text-base max-sm:tw-text-sm tw-font-semibold text-capitalize">
                                            View All
                                        </span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col class="d-flex justify-lg-space-between">
                                        <v-card elevation="5" rounded="lg"
                                            style="width: 270px"
                                            v-for="(job, index) in job_by_Industry"
                                            :key="`job__${index}`"
                                            class="d-flex align-center flex-wrap justify-space-between py-2 my-2 pa-4 tw-cursor-pointer">
                                            <div class="d-flex flex-wrap align-center pa-1">
                                                <nuxt-img fit="contain" width="63" quality="100" :src="job.img"
                                                    class="tw-min-w-32">
                                                </nuxt-img>

                                                <div class="d-flex flex-column align-start mx-5">
                                                    <h3 class="tw-text-base tw-font-extrabold">
                                                        {{job.title}}
                                                    </h3>
                                                </div>
                                            </div>
                                        </v-card>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </section>
                <section class="mt-15">
                    <nuxt-img fit="contain" maxWidth="1200" format="webp" style="width: 100%" src="img/home_banner.png">
                    </nuxt-img>
                </section>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<style lang="scss">
.rounded__rect {
    border-radius: 40px !important;
}

.img__gray {
    filter: grayscale(60%);
    filter: brightness(50%);
}
</style>
  
<script>
export default {
  data() {
    return {
      job_by_Industry: [
        {
          img: "img/bankIcon.png",
          title: "Banking",
        },
        {
          img: "img/telemarketing.png",
          title: "Telemarketing",
        },
        {
          img: "img/education.png",
          title: "Education",
        },
        {
          img: "img/architect.png",
          title: "Construction",
        },
      ],
    };
  },
};
</script>
  