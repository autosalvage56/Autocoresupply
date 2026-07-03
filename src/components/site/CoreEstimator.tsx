import { useState } from "react";
import { DollarSign, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const coreData: Record<string, { brands: string[]; range: string }> = {
  Engines: { brands: ["Ford", "Chevrolet", "Honda", "Toyota", "Cummins", "Subaru"], range: "$350 – $1,200" },
  Transmissions: { brands: ["GM", "Tremec", "Honda", "VW", "Allison", "ZF"], range: "$250 – $900" },
  "Other Parts": { brands: ["Brembo", "KYB", "Moog", "Denso", "ACDelco"], range: "$50 – $400" },
};

export function CoreEstimator() {
  const [category, setCategory] = useState<string>("Engines");
  const [brand, setBrand] = useState<string>("");
  const data = coreData[category];

  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 metal-grain" />
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-4">
              Core Exchange Program
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-wide font-800">
              Get Cash <span className="text-nitro">For Your Core</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              Return your old engine, transmission, or component core and receive a refund. Select your category and brand below to estimate your core return value.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" size="lg" className="h-12 px-8">
                <a href="tel:8553931294">Get Exact Quote <ChevronRight className="h-4 w-4" /></a>
              </Button>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="font-display text-lg font-700 uppercase mb-6 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-nitro" /> Core Value Estimator
            </h3>
            {/* Category selector */}
            <div className="mb-6">
              <label className="block text-[11px] font-heading uppercase tracking-[0.15em] text-muted-foreground mb-2 font-600">Category</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {Object.keys(coreData).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setCategory(cat); setBrand(""); }}
                    className={`py-2.5 px-3 rounded-lg text-xs font-heading uppercase tracking-wider font-600 border transition-all ${
                      category === cat
                        ? "bg-nitro text-white border-nitro"
                        : "bg-secondary border-border hover:border-nitro/40"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            {/* Brand selector */}
            <div className="mb-6">
              <label className="block text-[11px] font-heading uppercase tracking-[0.15em] text-muted-foreground mb-2 font-600">Brand</label>
              <div className="flex flex-wrap gap-2">
                {data.brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBrand(b)}
                    className={`py-2 px-4 rounded-lg text-xs font-heading font-500 border transition-all ${
                      brand === b
                        ? "bg-nitro/15 text-nitro border-nitro/50"
                        : "bg-secondary/50 border-border hover:border-nitro/30"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            {/* Estimated value */}
            <div className="bg-secondary/50 rounded-lg p-5 border border-border">
              <div className="text-[11px] font-heading uppercase tracking-[0.15em] text-muted-foreground mb-1 font-500">
                Estimated Core Refund
              </div>
              <div className="font-display text-3xl font-800 text-nitro tracking-wider">
                {brand ? data.range : "Select a brand"}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {brand ? `For ${brand} ${category.toLowerCase()} cores in rebuildable condition` : "Choose a category and brand to see estimates"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
