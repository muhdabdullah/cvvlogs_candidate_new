import authService from "~/api/auth";
import jobService from "~/api/jobs";

export default ($axios, store, ctx) => ({
  authService: authService($axios, store, ctx),
  jobService: jobService($axios, store, ctx),
});
