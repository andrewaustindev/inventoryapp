import { v } from "convex/values";
import { internalMutation, query } from "./_generated/server";

export const createUser = internalMutation({
  args: {email: v.string(), userId: v.string(), username: v.string()},
  handler: async (ctx, args) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .first();

    // If user exists, return without creating a new one
    if (existingUser) {
      console.log("User already exists:", args.userId);
      return existingUser;
    }

    // Only create if user doesn't exist
    return await ctx.db.insert("users", {
      email: args.email,
      userId: args.userId,
      username: args.username,
    });
  }
})

export const getUser = query({
  args:{},
  handler: async (ctx) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      return undefined;
    }

    return ctx.db
    .query('users')
    .withIndex('by_userId', (q) => q.eq('userId', user.subject))
    .first()
  },
})

export const handleUserDeletion = internalMutation({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    console.log("Starting deletion process for userId:", args.userId);

    // Find the user
    const user = await ctx.db
      .query("users")
      .filter(q => q.eq(q.field("userId"), args.userId))
      .unique();
    // no user found to delete
    if (!user) {
      console.log("No user found to delete");
      return;
    }
    // delete user
    await ctx.db.delete(user._id);
    console.log("User and all related data deleted successfully");
  }
});