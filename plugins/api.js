import reqMethods from "@/api/requests";
import services from "@/api/index";

export default (ctx, inject) => {
  inject("request", reqMethods(ctx.$axios, ctx.store, ctx));
  inject("api", services(ctx.$axios, ctx.store, ctx));
};
