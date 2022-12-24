<template>
  <v-container>
    <div class="d-flex px-5 align-center justify-space-between">
      <h1>Mesages</h1>
      <v-icon color="primary">mdi-information</v-icon>
    </div>
    <v-card class="my-2 mb-5" rounded="xl" outlined height="600">
      <v-row no-gutters class="tw-h-full">
        <v-col cols="4">
          <v-text-field
            class="mx-2 custom_chat_fields"
            background-color="white"
            placeholder="Search Messages"
            append-icon="mdi-magnify grey--text"
            hide-details
            plain
          ></v-text-field>
          <v-divider></v-divider>

          <v-list class="tw-overflow" two-line>
            <template v-for="(item, index) in items">
              <v-divider
                v-if="item.divider"
                :key="`divider-${index}`"
              ></v-divider>

              <v-list-item v-else :key="item.title">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="8">
          <div style="height: 85%" class="message__box pa-5 d-flex flex-column">
            <div
              v-for="msg in 3"
              :key="msg"
              class="message__box__user mb-5 d-flex align-center"
            >
              <v-img
                contain
                height="40"
                max-width="40"
                class="tw-rounded-full"
                :src="'https://cdn.vuetifyjs.com/images/lists/1.jpg'"
              ></v-img>
              <div class="message ml-5 mx-2 tw-text-sm">
                <span class="text--primary">Ali Connors</span> &mdash; I'll be
                in your neighborhood doing errands this weekend. Do you want to
                hang out?
              </div>
            </div>
            <v-divider class="my-5"></v-divider>
            <div
              v-for="msg in 3"
              :key="msg"
              class="message__box__user mb-5 d-flex align-center"
            >
              <div class="message ml-5 mx-2 tw-text-sm">
                <span class="text--primary text-left">Ali Connors</span>
                &mdash; I'll be in your neighborhood doing errands this weekend.
                Do you want to hang out?
              </div>
              <v-img
                contain
                height="40"
                max-width="40"
                class="tw-rounded-full"
                :src="'https://cdn.vuetifyjs.com/images/lists/1.jpg'"
              ></v-img>
            </div>
          </div>
          <div style="height: 15%">
            <v-divider></v-divider>
            <div class="d-flex flex-column justify-space-between tw-h-full">
              <v-text-field
                class="mx-2 custom_chat_fields"
                background-color="white"
                placeholder="Type your message here"
                hide-details
                plain
              ></v-text-field>

              <div
                class="chat__icons d-flex align-center justify-space-between"
              >
                <div class="icons__sec_one">
                  <v-icon
                    class="ma-1"
                    v-for="(icon, index) in chatIcons"
                    :key="`icon-${index}`"
                    >{{ icon }}</v-icon
                  >
                </div>

                <div class="icons__sec_two mx-2">
                  <v-icon class="ma-1">mdi-send-outline</v-icon>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      chatIcons: [
        "mdi-emoticon-happy-outline",
        "mdi-sticker-emoji",
        "mdi-file-gif-box",
        "mdi-microphone",
        "mdi-image-multiple",
      ],
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" >
.custom_chat_fields.v-text-field > .v-input__control > .v-input__slot:before {
  border: none;
}
</style>