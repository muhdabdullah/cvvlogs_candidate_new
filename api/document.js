export default ($axios, store, ctx, router) => ({
  async uploadCvDoc(file) {
    return ctx.$request.post("/upload_cv_doc.php", file).then((response) => {
      return response;
    });
  },

  async uploadCvVideo(file) {
    return ctx.$request.post("/upload_video.php", file).then((response) => {
      return response;
    });
  },

  async uploadVideoCV() {
    return ctx.$request.get("/user_videos.php").then((response) => {
      return response;
    });
  },

  async getUserVideos() {
    return ctx.$request.get("./user_videos.php").then((response) => {
      return response;
    });
  },

  async deleteUserVideo(id) {
    return ctx.$request
      .get(`/delete_user_vid.php?vid_id=${id}`)
      .then((response) => {
        return response;
      });
  },
});
