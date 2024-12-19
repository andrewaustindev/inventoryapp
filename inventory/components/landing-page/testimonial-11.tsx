import Image from "next/image";
import { StaticImageData } from "next/image";
import config from "@/config";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "../ui/badge";

// Use this object to add an icon to the testimonial (optional) like the Product Hunt logo for instance.
// Only change the values if you add more referrings sites (currently Twitter & Product Hunt)
const refTypes: {
  productHunt: {
    id: string;
    ariaLabel: string;
    svg: React.ReactElement;
  };
  twitter: {
    id: string;
    ariaLabel: string;
    svg: React.ReactElement;
  };
  other: { 
    id: string; 
    ariaLabel: string;
    svg: React.ReactElement;
  };
} = {
  productHunt: {
    id: "product_hunt",
    ariaLabel: "See user review on Product Hunt",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.245 26.256"
        className="w-[18px] h-[18px]"
      >
        <path
          d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128"
          fill="#da552f"
        />
        <path
          d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595"
          fill="#fff"
        />
      </svg>
    ),
  },
  twitter: {
    id: "twitter",
    ariaLabel: "See user post on Twitter",
    svg: (
      <svg
        className="w-5 h-5 fill-[#00aCee]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
      </svg>
    ),
  },
  other: {
    id: "other",
    ariaLabel: "Visit user's website",
    svg: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 20 20"
        className="w-5 h-5 text-base-content/80"
      >
        <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
          <path d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"/>
          <path d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"/>
        </g>
      </svg>
    )
  },
};

// The list of your testimonials. It needs 11 items to fill the grid. The last one (11th) is featured on large devices (span 2 columns + big font)
const list: {
  username?: string;
  name: string;
  text: string;
  type?: (typeof refTypes)[keyof typeof refTypes];
  link?: string;
  img: string | StaticImageData;
}[] = [
  {
    // Show @username for social media like Twitter. Does not link anywhere but cool to display
    username: "andyoz",
    name: "Andy Oz",
    text: "I use MvpFast for all my projects now - it's become my go-to boilerplate. The well-organized codebase and built-in features save me countless hours on every new project. Instead of setting up the same infrastructure again and again, I can focus on building what matters.",
    // use refTypes.other if you don't want to display an icon
    type: refTypes.twitter,
    // Link to the person's testimonial. It's more trustable
    link: "https://x.com/andy_austin_dev",
    // A statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: "https://pbs.twimg.com/profile_images/1618660210263867419/OZs5obZO_400x400.jpg",
  },
  {
    username: "jamesdev",
    name: "James Wilson",
    text: "I use MvpFast for all my projects now - it's become my go-to boilerplate. The well-organized codebase and built-in features save me countless hours on every new project. Instead of setting up the same infrastructure again and again, I can focus on building what matters.",
    type: refTypes.twitter,
    link: "https://x.com/jamesdev",
    img: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "sarahcodes",
    name: "Sarah Chen",
    text: "MvpFast has transformed how I build projects. Setting up authentication, payments, and basic infrastructure used to take weeks - now I can do it in hours. It's an absolute game-changer for indie developers.",
    type: refTypes.twitter,
    link: "https://twitter.com/sarahcodes",
    img: "https://images.unsplash.com/photo-1667053508464-eb11b394df83?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "mikebuild",
    name: "Mike Rodriguez",
    text: "MvpFast easily saves 15+ hours on each project by handling all the trivial setup. Now I can directly focus on shipping features rather than spending days setting up the same technologies from scratch. It's like having a superpower!",
    type: refTypes.productHunt,
    link: "https://www.producthunt.com/products/mvpfast/reviews",
    img: "https://images.unsplash.com/photo-1555583397-f7b95246acc1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily Parker",
    text: "Just started with MvpFast and I'm blown away! The code quality is exceptional, documentation is clear, and everything just works out of the box. This is exactly what I've been looking for.",
    type: refTypes.other,
    link: "https://x.com/",
    img: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "davidtech",
    name: "David Kim",
    text: "Finally found the perfect Next.js boilerplate! MvpFast provides everything I need - from auth to payments to deployment. The codebase is clean, well-documented, and follows best practices.",
    type: refTypes.productHunt,
    link: "https://www.producthunt.com/posts/mvpfast",
    img: "https://images.unsplash.com/photo-1636041246170-9278569b9c36?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "sophiadev",
    name: "Sophia Martinez",
    text: "MvpFast is a complete game-changer 🚀 The tutorials are comprehensive, the code is production-ready, and it saves you weeks of setup time. Perfect for any serious developer.",
    type: refTypes.twitter,
    link: "https://twitter.com/sophiadev",
    img: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alex Thompson",
    text: "MvpFast just saved me 10+ hours on my latest project. The authentication system, database setup, and API integration worked flawlessly. This is now my standard starting point for all new projects.",
    type: refTypes.other,
    link: "https://x.com/",
    img: "https://images.unsplash.com/photo-1441786485319-5e0f0c092803?q=80&w=2220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "ryanbuilds",
    name: "Ryan Foster",
    text: "MvpFast is exactly what I didn't know I needed. It handles all the complex infrastructure while letting me focus on building my unique features. The ROI is incredible.",
    type: refTypes.twitter,
    link: "https://x.com/",
    img: "https://images.unsplash.com/photo-1595907936751-b66746104d69?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "lisatech",
    name: "Lisa Zhang",
    text: "MvpFast is an exceptional minimalist, production-ready boilerplate. It took our team months to build similar features last year - now we can get started in minutes. The code organization is top-notch.",
    type: refTypes.twitter,
    link: "https://x.com/lisatech",
    img: "https://images.unsplash.com/photo-1513097847644-f00cfe868607?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "tomdev",
    name: "Tom Anderson",
    text: "MvpFast is probably one of the most powerful tools you can add to your stack. It's not just a boilerplate - it's a complete foundation for modern web applications.",
    type: refTypes.other,
    link: "https://www.x.com",
    img: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }: { i: number }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <Card className="h-full bg-card/50">
        <CardContent className="pt-6 pb-4">
          <p className="text-sm text-base-content/80">{testimonial.text}</p>
        </CardContent>
        <div className="px-6">
          <Separator className="bg-primary/20" />
        </div>
        <CardFooter className="py-4 flex items-center justify-start gap-4 border-t border-base-content/5">
          <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
            {testimonial.img ? (
              <Image
                className="w-10 h-10 rounded-full object-cover"
                src={testimonial.img}
                alt={`${testimonial.name}'s testimonial for ${config.appName}`}
                width={48}
                height={48}
              />
            ) : (
              <span className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                {testimonial.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="w-full flex items-end justify-between gap-2">
            <div>
              <div className="text-sm font-medium text-base-content">
                {testimonial.name}
              </div>
              {testimonial.username && (
                <div className="mt-0.5 text-sm text-base-content/80">
                  @{testimonial.username}
                </div>
              )}
            </div>

            {testimonial.link && testimonial.type?.svg && (
              <a
                href={testimonial.link}
                target="_blank"
                className="shrink-0 "
                aria-label={testimonial.type?.ariaLabel}
              >
                {testimonial.type?.svg}
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </li>
  );
};

const Testimonials11 = () => {
  return (
    <section className="bg-secondary/95" id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
          <Badge className="mb-4" variant="secondary" 
            style={{ 
              borderColor: config.theme.colors.primary,
              color: config.theme.colors.primary,
              backgroundColor: `${config.theme.colors.primary}10`
            }}
          >
              Testimonials
            </Badge>
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
              212 makers are already shipping faster!
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
            Don&apos;t take our word for it. Here&apos;s what they have to say
            about ShipFast.
          </p>
        </div>

        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-4"
        >
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {[...Array(3)].map((e, i) => (
                <Testimonial key={i} i={i} />
              ))}
            </ul>
          </li>

          <li className="hidden md:block order-none md:order-first lg:order-none col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* BIG FEATURED TESTIMONIAL */}
              <div className="col-span-2">
                <Card className="h-full bg-card/50">
                  <CardContent className="pt-6 pb-2">
                    <p className="text-lg font-medium text-base-content">
                      {list[list.length - 1].text}
                    </p>
                  </CardContent>
                  <div className="px-6">
                    <Separator className="bg-primary/20" />
                  </div>
                  <CardFooter className="py-4 flex items-center justify-start gap-4 border-t border-base-content/5">
                    <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                      {list[list.length - 1].img ? (
                        <Image
                          className="w-12 h-12 rounded-full object-cover"
                          src={list[list.length - 1].img}
                          alt={`${list[list.length - 1].name}'s testimonial for MakeLanding`}
                          width={48}
                          height={48}
                        />
                      ) : (
                        <span className="w-12 h-12 rounded-full flex justify-center items-center text-xl font-medium bg-base-300">
                          {list[list.length - 1].name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="w-full flex items-end justify-between gap-2">
                      <div>
                        <div className="text-base font-medium text-base-content">
                          {list[list.length - 1].name}
                        </div>
                        {list[list.length - 1].username && (
                          <div className="mt-1 text-base text-base-content/80">
                            @{list[list.length - 1].username}
                          </div>
                        )}
                      </div>

                      {list[list.length - 1].link && list[list.length - 1].type?.svg && (
                        <a
                          href={list[list.length - 1].link}
                          target="_blank"
                          className="shrink-0"
                          aria-label={list[list.length - 1].type?.ariaLabel}
                        >
                          {list[list.length - 1].type?.svg}
                        </a>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </div>
              
              {/* First column after featured */}
              <div>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  {[...Array(2)].map((e, i) => (
                    <Testimonial key={i} i={i + 3} />
                  ))}
                </ul>
              </div>
              
              {/* Second column after featured */}
              <div>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  {[...Array(2)].map((e, i) => (
                    <Testimonial key={i} i={i + 5} />
                  ))}
                </ul>
              </div>
            </div>
          </li>

          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {[...Array(3)].map((e, i) => (
                <Testimonial key={i} i={i + 7} />
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials11;
