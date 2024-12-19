import Image from "next/image";
import { Badge } from "../ui/badge";
import config from "@/config";

// A beautiful single testimonial with a user name and and company logo logo
const TestimonialSingle = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-secondary px-8 py-24 sm:py-32"
      id="testimonials"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.base-300),theme(colors.base-100))] opacity-20" />
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <figure className="mt-10">
        <Badge className="mb-4" variant="secondary" 
            style={{ 
              borderColor: config.theme.colors.primary,
              color: config.theme.colors.primary,
              backgroundColor: `${config.theme.colors.primary}10`
            }}
          >
              Testimonials
            </Badge>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative rounded-xl border border-base-content/5 bg-base-content/5 p-1.5 sm:-rotate-1">
              <Image
                width={320}
                height={320}
                className="rounded-lg max-w-[320px] md:max-w-[280px] lg:max-w-[320px] object-center border-2 border-white/10 shadow-md"
                // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
                // If you're using a static image, add placeholder="blur"
                src="https://pbs.twimg.com/profile_images/1618660210263867419/OZs5obZO_400x400.jpg"
                alt="A testimonial from a happy customer"
              />
            </div>

            <div>
              <blockquote className="text-xl font-medium leading-8 text-base-content sm:text-2xl sm:leading-10">
                The flexibility to choose between a real-time database and a relational database,
                combined with the pre-integrated Stripe payments, has been a game-changer for my projects.
                The comprehensive documentation further enhances the experience, making it an invaluable
                resource for developers.
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-start gap-5">
                <div className="text-base">
                  <div className="font-semibold text-base-content mb-0.5">
                    Andy A.
                  </div>
                  <div className="text-base-content/60">
                    Indie Maker &amp; Developer
                  </div>
                </div>

                <Image
                  width={30}
                  height={30}
                  
                  // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
                  src="/x-logo.svg"
                  alt="X logo"
                />
              </figcaption>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default TestimonialSingle;
