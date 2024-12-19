import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";


const http = httpRouter()

//Stripe Webhook
// http.route({
//   path: "/stripe",
//   method: "POST",
//   handler: httpAction(async (ctx, request) => {
//     const signature = request.headers.get("stripe-signature") as string;

//     const result = await ctx.runAction(internal.stripe.fullfill, {
//       payload: await request.text(),
//       signature,
//     });

//     if (result.success) {
//       return new Response(null, {
//         status: 200,
//       });
//     } else {
//       return new Response("Webhook Error", {
//         status: 400,
//       });
//     }
//   }),
// });

//Clerk Webhook
http.route({
  path: '/clerk',
  method: 'POST',
  handler: httpAction(async (ctx, request) => {
    const payloadString = await request.text();
    const headerPayload = request.headers;

    try {
      const result = await ctx.runAction(internal.clerk.fullfill, {
        payload: payloadString,
        headers: {
          "svix-id": headerPayload.get("svix-id")!,
          "svix-timestamp": headerPayload.get("svix-timestamp")!,
          "svix-signature": headerPayload.get("svix-signature")!,
        },
      });

      if (result) {
        return new Response(null, { status: 200 });
      }
      return new Response("Webhook Error", { status: 400 });
    } catch (err) {
      console.error("Webhook error:", err);
      return new Response("Webhook Error", { status: 400 });
    }
  })
});

export default http;