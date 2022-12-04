<template>
  <div>
    <LayoutPageHeader text="About Us" />

    <v-container>
      <div class="ma-16 d-flex">
        <div>
          <div class="borderVerticalLine d-flex align-center">
            <h1 class="tw-text-5xl tw-font-bold ml-5">About Us</h1>
          </div>
          <div class="d-flex">
            <div>
              <p class="tw-text-lg tw-leading-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione. Voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur.
              </p>
              <p class="tw-text-lg tw-leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
            <div>
              <v-card min-width="587" height="483"></v-card>
            </div>
          </div>
          <div>
            <p class="tw-text-lg tw-leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <p class="tw-text-lg tw-leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>
          </div>
        </div>
      </div>
    </v-container>

    <section class="mt-15">
      <div class="tw-relative">
        <v-img class="page__div" width="100%" src="img/aboutUsImg.png" />
        <div
          class="d-flex justify-space-around align-center tw-absolute tw-top-0 tw-w-full tw-h-full tw-text-3xl white--text tw-font-bold"
        >
          <div
            class="text-center d-flex flex-column align-center"
            v-for="(n, index) in icons"
            :key="`job__${index}`"
          >
            <v-img max-width="76" max-height="58" :src="n.icon" />
            <h1 class="tw-text-6xl mt-3" style="color: #f6a017">
              {{ n.calcuation }}+
            </h1>
            <p class="tw-text-lg tw-font-extralight mt-3">{{ n.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <v-container>
      <section class="ma-16">
        <v-container>
          <div class="d-flex align-center justify-center">
            <div>
              <v-img
                class="ImgBorders"
                max-width="517"
                max-height="549"
                src="img/OurStoryImg.png"
              />
            </div>
            <div class="ma-7 tw-text-justify tw-max-w-2xl tw-leading-relaxed">
              <div class="borderVerticalLine d-flex align-center">
                <h1 class="tw-text-5xl tw-font-bold ml-5">Our Story</h1>
              </div>
              <p class="mt-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas accumsan lacus vel
                facilisis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas accumsan lacus vel
                facilisis.
              </p>
            </div>
          </div>
          <div
            class="d-flex flex-column align-end justify-end tw-text-justify pl-15"
          >
            <p class="mt-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
              Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
              Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </v-container>
      </section>
    </v-container>

    <section class="tw-w-full tw-h-full cardBackground mt-15">
      <div class="pa-16">
        <div class="d-flex justify-space-around text-center">
          <div class="align-center card d-flex flex-column justify-center">
            <v-img width="64" contain height="64" src="img/missionIcon.png" />
            <h1 class="tw-font-extrabold tw-text-5xl mt-4">Our Mission</h1>
            <p class="tw-text-lg mt-4 paraWidth">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
          <div class="align-center card d-flex flex-column justify-center">
            <v-img width="64" height="64" src="img/visionIcon.png" />
            <h1 class="tw-font-extrabold tw-text-5xl mt-4">Our Vision</h1>
            <p class="tw-text-lg mt-4 paraWidth">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
        </div>
      </div>
    </section>

    <LayoutCustomerReview class="mb-15" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          icon: "img/handIcon.png",
          calcuation: "250",
          title: "Registered Members",
        },
        {
          icon: "img/likeIconOutline.png",
          calcuation: "250",
          title: "Registered Members",
        },
        {
          icon: "img/OrgIcon.png",
          calcuation: "250",
          title: "Registered Members",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.borderVerticalLine {
  border-left: 12px solid #7c2b92;
  height: 71px;
}

.ImgBorders {
  border-left: 7px solid #7c2b92;
  border-bottom: 7px solid #7c2b92;
}
.paraWidth {
  max-width: 400px;
}
.cardBackground {
  background-color: #f6f6f6;
}
.topFinish {
  margin-top: 0px !important;
}
</style>
