import { Resend } from "resend";
import { v } from "convex/values";
import { renderWelcomeEmail } from "./email/templates/welcomeEmail";  
import { renderPurchaseEmail } from "./email/templates/purchaseEmail"; 

import { internalActionGeneric } from "convex/server";
import Config from "@/config";



// For development, use resend.dev domain
// IMPORTANT: "You can only send testing emails to your own email address (THE EMAIL YOUR REGISTERED RESEND ACCOUT WITH). To send emails to other recipients, please verify a domain at resend.com/domains, and change the `from` address to an email using this domain.",

const FROM_EMAIL = process.env.NODE_ENV === 'production' 
  ? `${Config.appName} <no-reply@${Config.domainName}>`
  : `${Config.appName} <onboarding@resend.dev>`;

// Convex internal action for sending welcome emails
export const sendWelcomeEmail = internalActionGeneric ({
  // Define the arguments expected by this action
  args: {
    to: v.string(),
    username: v.string(),
  },
  
  handler: async (ctx, args) => {
    // Initialize Resend inside the handler with the API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [args.to],
        subject: `Welcome to ${Config.appName}! 🎉`,
        html: renderWelcomeEmail({ username: args.username }),
      });

      if (error) {
        throw new Error(error.message);
      }

      return { success: true, data };
    } catch (error) {
      console.error('Failed to send email:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  },
});

// Convex internal action for sending purchase confirmation emails
export const purchaseEmail = internalActionGeneric ({
  // Define the arguments expected by this mutation
  args: {
    to: v.string(),
    amount: v.number(),
    transactionDate: v.string(),
    invoiceNumber: v.string(),
  },
  
  handler: async (ctx, args) => {
    // Initialize Resend inside the handler with the API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [args.to],
        subject: `Thank You for Your Purchase! 🎉`,
        html: await renderPurchaseEmail({ 
          amount: args.amount, 
          transactionDate: args.transactionDate, 
          invoiceNumber: args.invoiceNumber 
        }),
      });

      if (error) {
        throw new Error(error.message);
      }

      return { success: true, data };
    } catch (error) {
      console.error('Failed to send purchase confirmation email:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  },
});