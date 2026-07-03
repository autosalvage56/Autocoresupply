import { Star } from "lucide-react";

const list = [
  { name: "Marcus T.", role: "Shop Owner · Austin, TX", text: "Found a discontinued ECU in 24 hours when nobody else could. These people actually pick up the phone.", stars: 5 },
  { name: "Diana R.", role: "Restorer · Portland, OR", text: "The OEM Civic seats they shipped were flawless. Documented, wrapped, on the pallet in three days.", stars: 5 },
  { name: "Jeff M.", role: "Fleet Manager · Denver, CO", text: "We run 38 trucks. AutoCore Supply is our first call for transmissions. Zero failures across six years.", stars: 5 },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-asphalt">
      <div className="container mx-auto px-4">
        <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-4">
          Customer Reviews
        </div>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-wide max-w-3xl mb-16 font-800">
          Straight From{" "}
          <span className="text-nitro">The Garage</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {list.map((t) => (
            <figure key={t.name} className="relative bg-card border border-border rounded-lg p-6 hover:border-nitro/40 transition-colors">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-nitro text-nitro" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed">{t.text}</blockquote>
              <div className="rule my-5" />
              <figcaption>
                <div className="font-heading text-sm font-600">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
