import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Brands } from "@/components/site/Brands";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { LiveArrivals } from "@/components/site/LiveArrivals";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { SourcingProcess } from "@/components/site/SourcingProcess";
import { WhyUs } from "@/components/site/WhyUs";
import { CoreEstimator } from "@/components/site/CoreEstimator";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <>
      <Hero />
      <Brands />
      <CategoryGrid />
      <LiveArrivals />
      <FeaturedProducts />
      <SourcingProcess />
      <WhyUs />
      <CoreEstimator />
      <CtaBanner />
      <Testimonials />
    </>
  );
}
