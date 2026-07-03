import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Truck, Headset } from "lucide-react";
import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero-main.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img src={hero} alt="Performance engine bay" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt/95 via-asphalt/80 to-asphalt/40" />
        <div className="absolute inset-0 garage-stripe" />
      </div>
      <div className="relative container mx-auto px-4 pt-20 pb-24">
        <div className="max-w-3xl fade-up">
          <div className="inline-flex items-center gap-2 tag-pill bg-nitro/20 text-nitro border border-nitro/30 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-nitro animate-pulse" />
            Now Shipping Nationwide
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-wide font-900 uppercase glow-nitro">
            Performance Parts{" "}
            <span className="text-nitro">Built to Last</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-xl font-light">
            OEM and aftermarket engines, transmissions, and hard-to-find drivetrain components. Bench-tested, warranty-backed, and sourced by specialists who know what fits your build.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg" className="h-13 px-8">
              <a href="tel:8553931294"><Phone className="h-4 w-4" /> Talk to a Specialist</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-13 px-8">
              <Link to="/shop">Browse All Parts <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-2xl">
          {[
            { icon: Shield, n: "16+", l: "Years in business" },
            { icon: Truck, n: "40k+", l: "Parts shipped" },
            { icon: Headset, n: "48h", l: "Avg. delivery" },
          ].map((s) => (
            <div key={s.l} className="flex items-center gap-3 bg-card/50 backdrop-blur rounded-lg p-3 sm:p-4 border border-border/50">
              <div className="h-10 w-10 rounded bg-nitro/15 flex items-center justify-center flex-shrink-0">
                <s.icon className="h-5 w-5 text-nitro" />
              </div>
              <div>
                <div className="font-display text-2xl font-800 text-nitro leading-none">{s.n}</div>
                <div className="text-[11px] font-heading uppercase tracking-[0.15em] text-muted-foreground mt-0.5 font-500">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
