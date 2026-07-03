import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";
import banner from "@/assets/cta-warehouse.jpg";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={banner} alt="Warehouse floor" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt/95 via-asphalt/85 to-asphalt/50" />
        <div className="absolute inset-0 garage-stripe" />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 tag-pill bg-nitro/20 text-nitro border border-nitro/30 mb-6">
            Ready to Order
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-wide font-800">
            Call the Floor{" "}
            <span className="text-nitro">Today</span>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed max-w-md">Talk to a real parts specialist. No chatbots, no forms — just a person on our floor who knows what's on the shelf and what's coming in.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild variant="hero" size="lg" className="h-14 px-10 pulse-nitro">
              <a href="tel:8553931294"><Phone className="h-5 w-5" /> (855) 393-1294</a>
            </Button>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-nitro" />
              <div>
                <div className="text-[10px] font-heading uppercase tracking-[0.15em] font-500">Hours</div>
                <div className="font-heading text-sm font-600 text-foreground">Mon–Sat · 8a–7p EST</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
