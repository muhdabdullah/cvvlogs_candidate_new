import authService from "~/api/auth";

export default ($axios, store, ctx) => ({
  authService: authService($axios, store, ctx),
});
