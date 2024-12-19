import HeroWithImage from "@/components/landing-page/hero-with-image";
import Problem from "@/components/landing-page/problem";
import Features from "@/components/landing-page/features";
import Pricing from "@/components/landing-page/pricing";
import FAQ from "@/components/landing-page/faq";
import CTA from "@/components/landing-page/cta-section";
import { Footer } from "@/components/footer";
import TestimonialSingle from "@/components/landing-page/testimonial-single";




export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <HeroWithImage />
      <Problem />
      <Features />
      <Pricing />
      <FAQ />
      <TestimonialSingle />
      <CTA />
      <Footer/>
    </div>
  );
}