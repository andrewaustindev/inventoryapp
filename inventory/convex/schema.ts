import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  users: defineTable({
    userId: v.string(),
    email: v.string(),
    username: v.string(),
    stripeId: v.optional(v.string()),
  })
  .index("by_userId", ["userId"])
  .index("by_stripeId", ["stripeId"])
  .index("by_username", ["username"]),
}); 