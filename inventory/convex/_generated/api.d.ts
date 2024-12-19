/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as clerk from "../clerk.js";
import type * as email_templates_purchaseEmail from "../email/templates/purchaseEmail.js";
import type * as email_templates_welcomeEmail from "../email/templates/welcomeEmail.js";
import type * as http from "../http.js";
import type * as sendEmails from "../sendEmails.js";
import type * as users from "../users.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  clerk: typeof clerk;
  "email/templates/purchaseEmail": typeof email_templates_purchaseEmail;
  "email/templates/welcomeEmail": typeof email_templates_welcomeEmail;
  http: typeof http;
  sendEmails: typeof sendEmails;
  users: typeof users;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
