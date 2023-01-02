<template>
  <v-container>
    <h3 class="tw-text-2xl ma-1 tw-font-bold">Messages</h3>
    <v-card class="mb-5" rounded="lg" outlined height="725">
      <v-row no-gutters class="tw-h-full">
        <v-col cols="4">
          <v-text-field
            class="mx-2 py-2 custom_chat_fields"
            background-color="white"
            placeholder="Search Messages"
            append-icon="mdi-magnify grey--text"
            v-model="search_chat"
            hide-details
            plain
          ></v-text-field>
          <v-divider></v-divider>

          <v-list class="tw-overflow">
            <template
              v-for="(chat, index) in getAllChats && getAllChats.all_chats"
            >
              <v-list-item
                @click="get_message_by_chatId(chat)"
                :key="`chat-${chat.chat_id}`"
              >
                <v-list-item-avatar size="60">
                  <v-img v-if="chat.user_img" :src="chat.user_img"></v-img>

                  <v-icon v-else x-large color="white" class="grey">
                    mdi-account
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    class="tw-font-semibold text-capitalize"
                    v-html="chat.user_name"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="chat.last_message"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider :key="`divider-${index}`"></v-divider>
            </template>
          </v-list>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="8">
          <div
            id="chat_container"
            ref="chat_container"
            class="tw-overflow-auto mt-6 tw-font-medium"
            style="height: 650px"
          >
            <div
              v-if="user_messages && user_messages.all_messages"
              class="message__box pa-3 d-flex flex-column"
            >
              <template v-for="(msg, msg_index) in user_messages.all_messages">
                <div
                  v-if="msg.sent_or_recvd == 0"
                  :key="`msg_send-${msg_index + 1}-0`"
                  class="message__box__user my-1 d-flex align-center"
                  :class="`msg-${msg.id}`"
                >
                  <v-avatar size="40" color="grey">
                    <v-icon dark> mdi-account </v-icon>
                  </v-avatar>
                  <div
                    class="
                      message
                      grey
                      lighten-2
                      pa-2
                      tw-rounded-r-lg
                      mx-2
                      tw-text-sm
                    "
                  >
                    {{ msg.message }}
                  </div>
                </div>

                <div
                  v-else
                  :key="`msg_rec-${msg_index + 1}-1`"
                  :id="msg.id"
                  :class="`msg-${msg.id}`"
                  class="
                    message__box__user
                    mb-5
                    d-flex
                    align-center
                    justify-end
                  "
                >
                  <div
                    class="
                      message
                      primary
                      white--text
                      lighten-2
                      pa-2
                      tw-rounded-l-lg
                      mx-2
                      tw-text-sm
                    "
                  >
                    {{ msg.message }}
                  </div>
                  <v-avatar size="40" color="primary">
                    <v-icon dark> mdi-account </v-icon>
                  </v-avatar>
                </div>
              </template>
            </div>

            <div
              class="d-flex align-center justify-center tw-h-full"
              v-else-if="message_loader"
            >
              <v-progress-circular
                :size="50"
                :width="5"
                color="secondary"
                indeterminate
              ></v-progress-circular>
            </div>
          </div>
          <v-divider></v-divider>
          <div style="height: 50px; max-width: 99%">
            <div class="d-flex align-center justify-space-between">
              <v-text-field
                class="mx-2 py-0 custom_chat_fields"
                @keyup.enter="send_message"
                :disabled="!selected_chat.chat_id || !selected_chat.user_id"
                placeholder="Type your message here"
                plain
                hide-details
                v-model="new_message"
              ></v-text-field>
              <div class="icons__sec_two mx-2">
                <v-btn
                  @click.prevent="send_message"
                  large
                  :disabled="
                    !new_message ||
                    !selected_chat.chat_id ||
                    !selected_chat.user_id
                  "
                  :loading="send_message_loader"
                  color="primary"
                  icon
                >
                  <v-icon class="ma-1">mdi-send-outline</v-icon>
                </v-btn>
              </div>

              <!-- <div
                class="
                  chat__icons
                  my-3
                  px-1
                  d-flex
                  align-center
                  justify-space-between
                "
              >
                <div class="icons__sec_one">
                  <v-btn
                    icon
                    v-for="(icon, index) in chatIcons"
                    :key="`icon-${index}`"
                  >
                    <v-icon class="ma-1">{{ icon }}</v-icon>
                  </v-btn>
                </div>

                <div class="icons__sec_two mx-2">
                  <v-btn color="primary" icon>
                    <v-icon class="ma-1">mdi-send-outline</v-icon>
                  </v-btn>
                </div>
              </div> -->
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $api }) {
    const getAllChats = await $api.messageService
      .get_all_chats()
      .then((response) => {
        return response.data;
      });

    return { getAllChats };
  },
  mounted() {
    if (this.$store.getters["auth/get_authId"]) {
      console.log("created", this.intval);
      this.intval = setInterval(() => {
        this.get_user_all_chats();
        if (this.selected_chat?.chat_id) {
          this.get_message_by_chatId(this.selected_chat);
        }
      }, 3000);
    }
  },
  destroyed() {
    if (this.intval) {
      console.log("unmounted", this.intval);
      clearInterval(this.intval);
    }
  },
  data() {
    return {
      intval: null,
      getAllChats: null,
      search_chat: null,
      user_messages: [],
      message_loader: false,
      send_message_loader: false,
      selected_chat: {
        chat_id: null,
        reciever: null,
        message: null,
        message_file: null,
      },
      new_message: null,
      chatIcons: [
        "mdi-emoticon-happy-outline",
        "mdi-sticker-emoji",
        "mdi-file-gif-box",
        "mdi-microphone",
        "mdi-image-multiple",
      ],
    };
  },
  methods: {
    scrollToElement(options, id) {
      const el = this.$el.getElementsByClassName(`msg-${id}`)[0];

      if (el) {
        el.scrollIntoView(options);
      }
    },
    async get_user_all_chats() {
      await this.$api.messageService.get_all_chats().then((response) => {
        this.getAllChats = response?.data;
      });
    },
    async get_message_by_chatId(chat, noloader) {
      // Save user chatID
      this.selected_chat = chat;

      if (!noloader) this.message_loader = true;
      await this.$api.messageService
        .get_message_by_chatId(chat?.chat_id)
        .then((response) => {
          this.user_messages = response?.data;
        })
        .finally(() => {
          this.message_loader = false;
        });
    },
    async send_message(data) {
      let new_msg = new FormData();

      if (this.selected_chat.chat_id && this.new_message) {
        // Append Data in Form
        new_msg.append("chat_id", this.selected_chat?.chat_id);
        new_msg.append("reciever", this.selected_chat?.user_id);
        new_msg.append("message", this.new_message);
        new_msg.append("message_file", null);

        this.send_message_loader = true;
        await this.$api.messageService
          .new_chat(new_msg)
          .then((response) => {
            this.get_message_by_chatId(this.selected_chat, true);
            // reset_message
            this.new_message = null;
            // scroll
            this.scrollToElement(
              { behavior: "smooth" },
              response?.data?.msg_id
            );
          })
          .finally(() => {
            this.send_message_loader = false;
          });
      }
    },
  },
};
</script>

<style lang="scss" >
.custom_chat_fields.v-text-field > .v-input__control > .v-input__slot:before {
  border: none;
}
</style>