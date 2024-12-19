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

  staff: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    position: v.string(),
    email: v.string(),
    phone: v.string(),
    staffType: v.string(),
    certLevel: v.string(),
  }),

  equipment: defineTable({
    type: v.union(
      v.literal("monofin"),
      v.literal("bifin"),
      v.literal("mask"), 
      v.literal("snorkel"),
      v.literal("wetsuit"),
      v.literal("weight-belt"),
      v.literal("lanyard"),
      v.literal("buoy"),
      v.literal("rope")
    ),
    status: v.union(
      v.literal("available"),
      v.literal("in-use"),
      v.literal("maintenance")
    ),
    size: v.string(),
    lastMaintenance: v.optional(v.string()),
    serialNumber: v.string(),
    assignedTo: v.optional(v.id("staff")),
    thickness: v.optional(v.number()), // in mm, for wetsuits
    notes: v.optional(v.string()),
    
  }),

}); 
