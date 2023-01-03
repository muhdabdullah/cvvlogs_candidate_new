<template>
  <div class="text-center">
    <v-dialog persistent width="582" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" depressed color="secondary">
          Chat
          <v-icon color=""> mdi-chat </v-icon></v-btn
        >
      </template>

      <v-card
        color="white"
        width="582"
        rounded
        flat
        class="mx-auto tw-border-0"
      >
        <div class="pa-2 d-flex justify-end">
          <div class="d-flex align-center justify-center tw-w-full">
            <span class="tw-font-bold tw-text-2xl primary--text"
              >Send Message
            </span>
          </div>

          <v-btn
            size="29"
            fab
            icon
            rounded
            color="primary"
            small
            @click="dialog = false"
          >
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
        </div>

        <v-card-text class="pa-5 pt-2">
          <v-form ref="new_message">
            <v-textarea
              hide-details
              class="mb-2"
              v-model="message"
              :rules="[(msg) => !!msg]"
              auto-grow
              outlined
              @keyup.enter="send"
              placeholder="Type your message..."
            ></v-textarea>

            <v-btn
              block
              light
              color="secondary"
              height="50"
              size="large"
              @click="send"
              :loading="send_message_loader"
              depressed
            >
              Send
              <v-icon class="ml-1"> mdi-send </v-icon>
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["receiver_id", "chat_id"],
  data() {
    return {
      dialog: false,
      send_message_loader: false,
      message: null,
    };
  },
  methods: {
    async send() {
      if (this.$refs.new_message.validate()) {
        let new_msg = new FormData();

        if (this.receiver_id) {
          // Append Data in Form
          new_msg.append("chat_id", this.chat_id);
          new_msg.append("reciever", this.receiver_id);
          new_msg.append("message", this.message);
          new_msg.append("message_file", null);

          this.send_message_loader = true;
          await this.$api.messageService
            .new_chat(new_msg)
            .then(() => {
              // reset_message
              this.message = null;
              this.dialog = false;
            })
            .finally(() => {
              this.send_message_loader = false;
            });
        }
      }
    },
  },
};
</script>

<style>
</style>