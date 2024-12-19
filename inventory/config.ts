const config = {
  // REQUIRED: This shows what the name of the app. It shows up in the name in the browser tab.
  //           It is showing up in all places where the app name is to be shown.
  appName: "MvpFast",
  appIcon: "/app-icon.ico",
  appLogoTransparent: "/app-logo-transparent.png",
  // Optional - The theme of your app. Can be "light" or "dark". Defaults to "dark".
  theme: {
    mode: "dark",               
    // "light" or "dark"
    colors: {
      // Primary color used for main buttons, links, and highlights
      primary: "#ffa31a",           
      // Current orange color #ffa31a //purple 
      
      
      // Optional: Different shades of the primary color
      primaryLight: "#ffb84d",      
      // Lighter shade for hover states
      primaryDark: "#cc8214",      
      // Darker shade for active states

      // Optional: Secondary colors for different UI elements
      secondary: "#212121",        
      // Current dark background color
      // Optional: Accent colors for special elements
      accentPositive: "#22c55e",          
      // Success/green color (currently used in promotion badges)
      accentNegative: "#f43f5e",         
      // Error/red color (currently used in promotion badges)
    }
  },
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Build faster with a production-ready Next.js boilerplate. Choose Convex for real-time power or Supabase for relational strength—optimized for speed and scalability.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "mvpfa.st",

  // REQUIRED: Update with your social media links
  social: {
    bluesky: "@neoprenecowboy",
    github: "https://github.com/andrew-austin-dev/mvpfast-convex",
    linkedin: "https://www.linkedin.com/in/andrew-austin-dev/",
    x: "https://x.com/andrew_austin_dev",
  },
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "",
        // The price you want to display, the one user will be charged on Stripe.
        price: 79,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 179,
        currency: "USD",
        features: [
          { name: "NextJS boilerplate", included: true },
          { name: "SEO & Blog", included: true },
          { name: "Stripe payments", included: true },
          { name: "Clerk authentication", included: true },
          { name: "Convex database / Supabase", included: true },
          { name: "Resend emails", included: true },
          { name: "Components library", included: true },
          { name: "ChatGPT prompts for terms & privacy", included: true },
          { name: "Discord Community & leaderboard", included: false },
          { name: "24/7 support", included: false },
          { name: "Lifetime updates", included: false },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "All-In",
        description: "",
        price: 99,
        priceAnchor: 199,
        currency: "USD",
        features: [
          { name: "NextJS boilerplate", included: true },
          { name: "SEO & Blog", included: true },
          { name: "Stripe payments", included: true },
          { name: "Clerk authentication", included: true },
          { name: "Convex database / Supabase", included: true },
          { name: "Resend emails", included: true },
          { name: "Components library", included: true },
          { name: "ChatGPT prompts for terms & privacy", included: true },
          { name: "Discord Community & leaderboard", included: true },
          { name: "24/7 support", included: true },
          { name: "Lifetime updates", included: true },

        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `MVP Fast <noreply@mg.mvpfa.st>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `MVP Fast <andy@mvpfa.st>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "andy@mvpfa.st",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "andrew@mvpfa.st",
  },
  resend: {
    // REQUIRED - Resend API key from your dashboard
    apiKey: process.env.RESEND_API_KEY,
    // REQUIRED - Email 'From' field for magic login links
    fromNoReply: `MVP Fast <noreply@mvpfa.st>`,
    // REQUIRED - Email 'From' field for administrative emails
    fromAdmin: `MVP Fast <andy@mvpfa.st>`,
    // Optional - Support email address shown to customers
    supportEmail: "andy@mvpfa.st",
  },
  auth: {
    // REQUIRED — the path to log in users via Clerk. It's used to protect private routes (like /dashboard) and for redirecting users when authentication is needed
    loginUrl: "/sign-in",
    // REQUIRED — the path to redirect users after successful login. This is normally a private page for users to manage their accounts
    callbackUrl: "/dashboard",
  },
  landingPage: {
    // REQUIRED - Hero section configuration
    hero: {
      badge: "🚀 Launch Your SaaS in Days, Not Months",    // Text shown in the badge at the top of the hero
      title: "Kickstart your MVP in days, not months",              // Main headline
      description: "Build faster with a production-ready Next.js boilerplate. Choose Convex for real-time power or Supabase for relational strength—optimized for speed and scalability.",
      cta: "Get Started",                                  // Call to action button text
      image: {
        src: "/12.png",                           // Path to the hero image (from public directory)
        alt: "MvpFast Preview"                 // Alt text for the hero image
      },
      promotion: {
        discount: "$100 off",                             // Discount amount text
        remainingCount: 7,                                // Number of discount slots remaining
        totalCount: 100                                   // Total number of discount slots
      }
    },
    // OPTIONAL - Problem section configuration
    problem: {
      title: "Building a SaaS is Hard",
      description: "Don't waste time reinventing the wheel",
      problems: [
        { hours: 4, task: "to set up emails", color: "accentNegative" },
        { hours: 6, task: "designing a landing page", color: "accentNegative" },
        { hours: 4, task: "to handle Stripe webhooks", color: "accentNegative" },
        { hours: 2, task: "for SEO tags", color: "accentNegative" },
        { hours: 1, task: "applying for Google Oauth", color: "accentNegative" },
        { hours: 3, task: "for DNS records", color: "accentNegative" },
        { hours: 2, task: "for protected API routes", color: "accentNegative" },
        { hours: "∞", task: "overthinking...", color: "accentNegative" }
      ],
      badge: "The Problem",
      badgeColor: "rgba(255, 51, 51, 0.2)", // lighter red
      badgeTextColor: "accentNegative",
      totalHoursColor: "accentNegative"
    },
    // OPTIONAL - Frequently Asked Questions shown on the landing page
    faq: [
      {
        question: "What is MvpFast?",
        answer: "MvpFast is a NextJS starter kit that helps you build SaaS applications, AI tools, and web apps faster with pre-built components and integrations."
      },
      {
        question: "What's the difference between MvpFast and other boilerplates?",
        answer: "MvpFast gives you a choice between two database options: Convex or Supabase. So you can choose between a real-time database or a relational database."
      },
      {question: "Which database should I choose?",
      answer: "It depends on your needs. If you need real-time data sync, go with Convex. If you need a relational database, go with Supabase. Examples of use cases: Convex is great for chat apps, e-commerce and real-time applications. Supabase is great for admin panels, CRM, and other applications that require complex relationships between data."},
      {
        question: "What's included in the boilerplate?",
        answer: "The boilerplate includes NextJS setup, SEO optimization, Stripe payments, Clerk authentication, Convex database integration, Resend emails, a component library, and more."
      },
      {
        question: "Are there any other costs?",
        answer: "No, the boilerplate is free to use. You'll only need to set up accounts for Stripe (payments), Clerk (auth) and Convex (database) when you're ready to launch. All three offer generous free tiers for startups— so you can launch your first app for $0/month."
      },
      {
        question: "Do you offer support?",
        answer: "Yes! Depending on your plan, you can get access to our Discord community and 24/7 support to help you build your application."
      },
      {
        question: "Can I get a refund?",
        answer: "After you've got access to the repo, the boilerplate is yours forever, so it can't be refunded. But rest assured, our users ship startups in 7 days on average and make their first $ online in record time."
      },
      {
        question: "How often are you updating the boilerplate?",
        answer: "I ship updates to the boilerplate often as I use it for my own projects. You can follow the progress on GitHub."
      },
      
      // Add more FAQ items as needed
    ],
    // OPTIONAL - How it Works section configuration
    howItWorks: {
      title: "Launch Your SaaS in 3 Simple Steps",
      steps: [
        {
          title: "Clone the Repository",
          description: "Start with our production-ready codebase. One command to get everything you need:",
          code: "git clone https://github.com/shipfast/saas-template.git"    // Optional: code snippet to display
        },
        {
          title: "Make It Yours",
          description: "Customize the template to match your needs. All components are modular and well-documented:",
          bullets: [                                      // Optional: bullet points to display
            "Modify the UI with 30+ pre-built components",
            "Configure Clerk, Stripe and Convex or Supabase authentication and payment settings",
            "Add your business logic and features"
          ]
        },
        {
          title: "Ship to Production",
          description: "Deploy with confidence using our production-ready infrastructure:",
          bullets: [
            "Change to production in Clerk, Stripe and Convex or Supabase",
            "Push to deploy to Vercel",
          ]
        }
      ]
    },
    // OPTIONAL - Newsletter section configuration
    newsletter: {
      title: "Join the Community",
      description: "Get notified about updates, new features, and our developer community.",
      buttonText: "Subscribe",
      inputPlaceholder: "you@example.com"
    },
    // OPTIONAL - Features section configuration
    features: {
      title: "Launch Your SaaS in Hours, Not Months",
      description: "Stop wasting time on infrastructure. Get instant access to production-ready authentication, payments, and emails. Focus on what matters: your product and customers.",
      badge: "FEATURES",
      items: [
        {
          icon: "AtSign",
          techIcon: "/resend-icon-white.png",
          iconTitle: "Emails",
          title: "Resend Emails",
          link: "https://resend.com",
          features: [
            "Send transactional emails",
            "Email templating with React",
            "Webhook to receive & forward emails",
            "Analytics and delivery tracking"
          ],
          timeSaved: "Time saved: 3 hours"
        },
        {
          icon: "CreditCard",
          techIcon: "/stripe.png",
          iconTitle: "Payments",
          title: "Stripe Payments",
          link: "https://stripe.com",
          features: [
            "Subscription & one-time payments",
            "Webhook handling for payments",
            "Automated invoicing",
            "Multi-currency support"
          ],
          timeSaved: "Time saved: 5 hours"
        },
        {
          icon: "User",
          techIcon: "/clerk-logo.png",
          iconTitle: "Login",
          title: "Clerk Auth",
          link: "https://clerk.com",
          features: [
            "Complete user management",
            "Social logins (Google, GitHub)",
            "Role-based access control",
            "Magic links & session management"
          ],
          timeSaved: "Time saved: 6 hours"
        },
        {
          icon: "Database",
          techIcon: "/convex.svg",
          iconTitle: "Database",
          title: "Convex or Supabase for Databases",
          link: "https://convex.dev",
          features: [
            "Real-time data sync or relational database",
            "Serverless functions or SQL queries",
            "Automatic scaling or manual setup",
            "Built-in security or custom setup"
          ],
          timeSaved: "Time saved: 4 hours"
        },
        {
          icon: "FileSearch",
          iconTitle: "SEO",
          title: "SEO",
          link: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata",
          features: [
            "Entire blog structure (example)",
            "All meta tags to rank on Google",
            "OpenGraph tags to share on social media",
            "Automated sitemap generation to fasten Google indexing",
            "Structured data markup for Rich Snippets",
            "SEO-optimized UI components"
          ],
          timeSaved: "Time saved: 8 hours"
        },
        {
          icon: "Paintbrush",
          techIcon: "/shadcn-ui.svg",
          iconTitle: "Style",
          title: "Shadcn/UI Styles",
          link: "https://ui.shadcn.com",
          features: [
            "Modern UI components",
            "Dark mode support",
            "Responsive design",
            "Customizable themes"
          ],
          timeSaved: "Time saved: 8 hours"
        },
        {
          icon: "MoreHorizontal",
          iconTitle: "More",
          title: "More Features",
          link: "https://nextjs.org",
          features: [
            "API rate limiting",
            "Error handling",
            "Logging & monitoring",
            "CI/CD pipelines"
          ],
          timeSaved: "Time saved: 4 hours"
        }
      ]
    },
  },
};

export default config;
