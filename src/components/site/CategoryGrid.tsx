import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export function CategoryGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-4">
              Shop by Category
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-wide font-800">
              Three Departments,{" "}
              <span className="text-nitro">One Call</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-muted-foreground leading-relaxed">Each department is managed by a specialist who's spent a career sourcing that specific inventory. No algorithms, no auto-replies — real expertise.</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((c, i) => (
            <Link to="/categories" key={c.slug} className="group relative bg-card editorial-card border border-border rounded-lg overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-asphalt/90 via-asphalt/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="num-badge text-4xl font-900">{String(i+1).padStart(2,"0")}</span>
                    <span className="tag-pill bg-card/80 text-muted-foreground backdrop-blur">{c.count}+ parts</span>
                  </div>
                  <h3 className="font-display text-3xl mt-2 leading-tight text-white font-800">{c.name}</h3>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed">{c.blurb}</p>
                  <div className="mt-4 inline-flex items-center gap-2 font-heading uppercase tracking-[0.15em] text-xs text-nitro font-600 group-hover:gap-3 transition-all">
                    Browse Parts <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
