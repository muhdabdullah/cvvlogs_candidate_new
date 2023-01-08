<template>
  <v-container>
    <v-row class="mt-15">
      <v-col>
        <div class="">
          <h1
            :class="`primary--text tw-font-bold ${
              $vuetify.breakpoint.mobile ? 'tw-text-4xl' : 'tw-text-4xl'
            }`"
          >
            Tips & Recommendations
          </h1>
          <div class="d-flex justify-center mt-12">
            <v-card max-width="642" height="363">
              <iframe
                width="640"
                height="360"
                :src="intro_video_lang"
                title="cvvlogs Introduction (Urdu)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-card>
          </div>
        </div>
        <div>
          <h1 class="mt-10 danger tw-font-bold">IMPORTANT</h1>
          <p class="danger tw-font-bold mt-3">
            In order to protect your Privacy and Identity, we strongly recommend
            that you do not share any personal details such as full name, phone
            number or email in your video resume
          </p>
          <p>The video shouldn’t be longer than 120 seconds.</p>
        </div>
        <div v-for="data in tips" :key="data">
          <h1 :class="`tw-font-extrabold text-uppercase mt-8 tw-text-base`">
            {{ data?.heading }}
          </h1>
          <!-- <p
            :class="`tw-font-light content1 ${
              $vuetify.breakpoint.mobile ? 'tw-text-md' : 'tw-text-lg'
            }`"
          >
            {{ data?.text }}
          </p> -->
          <ul class="tw-leading-8 mt-4">
            <li
              v-for="(item, index) in data.text"
              :key="`para_${index}`"
              :class="`tw-font-light ${
                $vuetify.breakpoint.mobile ? 'tw-text-md' : 'tw-text-lg'
              }`"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tips: [
        {
          heading: "Questions to answer in a general video resume:",
          text: [
            `What can you bring to a company? Talk about your education and past experience.`,
            `Why should we hire you? Make sure to mention hard and soft skills.`,
            `How will your skills and attributes benefit a company? This is a good time to highlight a few achievements.`,
          ],
        },
        {
          heading: "Some employers have specific questions:",
          text: [
            `Please read each job description carefully.`,
            `If an employer wants you to answer certain questions, create a separate video where you provide those answers.`,
            `Upload your new video to the individual job.`,
            `Your tailored video will replace your general video for that job only.`,
          ],
        },
        {
          heading: "Video quality requirements:",
          text: [
            `Record your video at 1080p HD at 30 fps.`,
            `This is the default for most smartphones but we recommend checking your settings just to make sure.`,
            `Maximum video size is 300mb.`,
          ],
        },
        {
          heading: "Choose a good location:",
          text: [
            `Record your video in a quiet room with no background noises.`,
            `Choose a nice backdrop. When in doubt, a plain white wall works great.`,
            `Use good lighting. Natural light from a window is best but lamps work too.`,
          ],
        },
        {
          heading: "Professional appearance:",
          text: [
            `Choose a professional top and make sure your hair is tidy.`,
            `Position the camera directly in front of you and level with your face. Do not position the camera so you’re looking down or up into it.`,
            `Don’t forget to smile.`,
          ],
        },
        {
          heading: "Time management:",
          text: [
            `Maximum video length is 120 seconds (2 minutes).`,
            `Practice what you’ll say a few times before you record.`,
            `Answer all the questions above, any specific questions (if applicable), and end with a positive statement about why the employer should hire you.`,
          ],
        },
      ],
    };
  },
  computed: {
    intro_video_lang() {
      if (
        [167, 101].includes(
          parseInt(this.$store.getters["auth/get_ip_info"]?.country_id || 0)
        )
      ) {
        return "https://www.youtube.com/embed/dlCW95MZo-Q";
      } else return "https://www.youtube.com/embed/-cuKlxl9lic";
    },
  },
};
</script>

<style lang="scss" scoped>
.danger {
  color: #dc3545 !important;
}

li:before {
  content: "•";
  font-size: 35px !important;
  vertical-align: top;
  padding-right: 7px;
}
</style>
