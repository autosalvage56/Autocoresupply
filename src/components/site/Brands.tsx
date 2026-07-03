import { brands } from "@/lib/products";

export function Brands() {
  return (
    <section className="py-14 bg-asphalt border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 mb-8">
          <div className="text-[10px] font-heading uppercase tracking-[0.2em] text-muted-foreground font-600">Brands We Carry</div>
          <div className="flex-1 rule" />
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-ticker whitespace-nowrap">
            {[...brands, ...brands].map((b, i) => (
              <span key={i} className="font-display text-4xl md:text-5xl font-800 uppercase text-foreground/40 hover:text-nitro transition-colors tracking-wider">
                {b}<span className="text-nitro mx-4">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
