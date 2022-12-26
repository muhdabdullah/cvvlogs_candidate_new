import authService from "~/api/auth";
import jobService from "~/api/jobs";
import documnetService from "~/api/document";
import utilsService from "~/api/utils";
import messageService from "~/api/message";

export default ($axios, store, ctx) => ({
  authService: authService($axios, store, ctx),
  jobService: jobService($axios, store, ctx),
  documnetService: documnetService($axios, store, ctx),
  utilsService: utilsService($axios, store, ctx),
  messageService: messageService($axios, store, ctx),
});
