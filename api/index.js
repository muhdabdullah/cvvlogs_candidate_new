import authService from "~/api/auth";
import jobService from "~/api/jobs";
import documnetService from "~/api/document";

export default ($axios, store, ctx) => ({
  authService: authService($axios, store, ctx),
  jobService: jobService($axios, store, ctx),
  documnetService: documnetService($axios, store, ctx),
});
