export default ($axios, store, ctx, router) => ({
  async get_all_chats() {
    return ctx.$request.get("/all_chats.php");
  },

  async get_message_by_chatId(chat_id) {
    return ctx.$request.get(`/all_messages.php?chat_id=${chat_id}`);
  },

  async new_chat(data) {
    return ctx.$request.post("/message_new.php", data);
  },
});
