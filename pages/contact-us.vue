<template>
  <div>
    <LayoutPageHeader text="Contact Us" />
    <v-container class="my-5">
      <!-- <div class="ma-16 d-flex justify-center">
        <div class="d-flex justify-center flex-column">
          <div class="borderVerticalLine d-flex align-center">
            <h1 class="tw-text-5xl tw-font-bold ml-5">Contact Us</h1>
          </div>
        </div>
      </div> -->
      <v-row>
        <v-col
          class="d-flex justify-space-around"
          v-for="card in cards"
          :key="card"
        >
          <div
            class="cardCustom d-flex flex-column justify-center align-center"
          >
            <div class="d-flex justify-center align-center circleCustom">
              <v-img width="33" height="45" contain :src="card.icon" />
            </div>
            <p class="tw-text-xl tw-font-semibold mt-6">{{ card.heading }}</p>
            <p class="tw-text-base tw-text-gray-500 mb-1">{{ card.text1 }}</p>
            <p class="tw-text-base tw-text-gray-500">{{ card.text2 }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="tw-relative mt-15">
      <v-img
        position="top"
        height="100%"
        cover
        class=""
        src="img/formBgImg.png"
      >
        <div
          class="
            tw-w-full tw-h-full tw-text-6xl
            white--text
            tw-font-bold
            text-capitalize
            d-flex
            flex-column
            justify-center
            align-center
          "
        >
          <v-row class="tw-min-w-full">
            <v-col cols="12" md="6" lg="6" xl="6"></v-col>
            <v-col
              cols="12"
              md="6"
              lg="6"
              xl="6"
              class="d-flex flex-column justify-center"
            >
              <div class="ma-9 tw-w-2/3 fileCustomMargin">
                <h1 class="tw-text-5xl tw-font-semibold">Get In Touch</h1>
                <p
                  class="
                    tw-text-sm tw-text-yellow-500 tw-font-normal
                    mt-5
                    tw-leading-7
                  "
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
                </p>
                <v-form
                  ref="form"
                  v-model="formHasErrors"
                  @submit.prevent="submit"
                >
                  <v-text-field
                    class="text"
                    id=""
                    v-model="nAme"
                    :error-messages="nAme === '' ? errorMessages : ''"
                    :rules="[() => !!nAme || 'This field is required']"
                    required
                    label="Name"
                    single-line
                    solo
                    light
                    name="user_name"
                    autocomplete="off"
                  ></v-text-field>
                  <v-text-field
                    :error-messages="email === '' ? errorMessages : ''"
                    :rules="[
                      () => !!email || 'This field is required',
                      (v) => /.+@.+\..+/.test(v) || 'Email invalidate.',
                    ]"
                    required
                    label="Email"
                    v-model="email"
                    single-line
                    solo
                    light
                    name="user_email"
                    autocomplete="off"
                  >
                  </v-text-field>
                  <v-textarea
                    :error-messages="message === '' ? errorMessages : ''"
                    :rules="[() => !!message || 'This field is required']"
                    required
                    v-model="message"
                    light
                    solo
                    label="Message"
                    rows="4"
                    name="message"
                  ></v-textarea>
                  <v-btn
                    width="164"
                    height="47"
                    depressed
                    color="secondary"
                    type="submit"
                    >Send</v-btn
                  >
                </v-form>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-img>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          icon: "img/callIcon.png",
          heading: "Contact Us",
          text1: "+123 456 789 0",
          text2: "+123 456 789 0",
        },
        {
          icon: "img/emailIcon.png",
          heading: "Email",
          text1: "jbdesks@example.com",
          text2: "support@example.com",
        },
        {
          icon: "img/locationIcon.png",
          heading: "Location",
          text1: "Reference site about",
          text2: "Lorem ispum, giving infromation",
        },
      ],
      snackbar: false,
      text: "SuccessFully Submitted! Response as soon as 😊",
      timeout: 2000,
      nAme: "",
      email: "",
      subject: "",
      message: "",
      errorMessages: "",
      formHasErrors: false,
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (this.window.width <= 450) {
      }
    },
    // condition for textfields
    submit(e) {
      this.snackbar = true;
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style lang="scss" scoped>
.borderVerticalLine {
  border-left: 12px solid #7c2b92;
  height: 71px;
}

.circleCustom {
  width: 90px;
  height: 90px;
  background: #5d378d;
  border-radius: 50%;
}

.cardCustom {
  border: 1px solid #e0e2e5;
  width: 275px;
  height: 275px;
  border-radius: 5px;
}

.fileCustomMargin .v-text-field--enclosed {
  margin-bottom: -6px !important;
}
</style>
