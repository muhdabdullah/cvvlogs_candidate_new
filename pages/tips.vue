<template>
    <v-container>
      <v-row class="mt-15">
        <v-col>
          <div class="">
            <h1 :class="`primary--text tw-font-bold ${$vuetify.breakpoint.mobile? 'tw-text-4xl' : 'tw-text-4xl'}`">Tips & Recommendations</h1>
            <div class="d-flex justify-center mt-12">
                <v-card max-width="642" height="363">
                <iframe width="640" height="360" 
                src="https://www.youtube.com/embed/dlCW95MZo-Q"
                 title="cvvlogs Introduction (Urdu)"
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </v-card>
            </div>
          </div>
          <div>
            <h1 class="mt-10 danger tw-font-bold">IMPORTANT</h1>
            <p class="danger tw-font-bold mt-3">
                In order to protect your Privacy and Identity, we strongly recommend that you do not share any personal details such as full name, phone number or email in your video resume
            </p>
            <p>The video shouldn’t be longer than 120 seconds.</p>
          </div>
          <div v-for="data in tips" :key="data">
            <h1 :class="`tw-font-extrabold text-uppercase mt-8 tw-text-base`">
              {{ data?.heading }}
            </h1>
            <p :class="`tw-font-extralight content1 ${$vuetify.breakpoint.mobile ? 'tw-text-md' : 'tw-text-lg'}`">
              {{ data?.text }}
            </p>
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
            heading: "GUIDELINES FOR VIDEO:",
            text: `1. What will you bring to the company? (Focus on key requirements for the job)
            2. Why should we hire you? (Mention both your hard and soft skills)
            3. Explain how your skills and attributes would benefit the company? (Maybe highlight a few achievements)\n
            Please make sure you record your video.in 16:9 format fhd (full hd 30fps). If you upload your video, please make sure your upload videos are in 16:9 fhd 30fps (full hd 30 frames per second format) and video size should not be more than 300mb.`,
          },
          {
            heading: "CHOOSE AN APPROPRIATE LOCATION",
            text: `Make sure to record the video in an appropriate room where there won’t be any noises, and you won’t get distracted. If you have pets at home, keep them in a different room during the interview. A barking dog or a meowing cat noise in the background doesn’t make you look very professional. Also, a plain white wall as a backdrop is ideal for video interviews.`,
          },
          {
            heading: "TRY YOUR HARDWARE BEFORE THE INTERVIEW",
            text: `Try all of your equipment including your headsets, microphone and internet connection to make sure that they are properly working. Set up your camera, so it is focused on your eye level. Verify that your sound is clear. You can test it by making a video call with a friend. Also, confirm that you can hear the other person via your headphones.`,
          },
          {
            heading: "APPEARANCE",
            text: `Make yourself as professional as possible, turn on good lighting and set the camera in front of your face. All other angles look less advantageous. Imagine that the recruiter is you and wonder what a promising candidate for a specific position should look like?`,
          },
          {
            heading: "TIME MANAGEMENT",
            text:  `You have 120 seconds / two minutes to record this video resume. In order to use this time effectively and to make the best impression start talking about your education, work experience and any special skills that you may have, after which you can end your recording with a positive statement as to why the employer should hire you and why you will be an asset to the company.`,
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss">
  .content1 {
    white-space: pre-line;
  }
  .danger {
    color: #dc3545 !important;
  }
  </style>
  