import { createFileRoute } from "@tanstack/react-router";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { useState } from "react";
import { Store, SlidersHorizontal, Phone, LayoutGrid, List, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/shop")({
  component: Shop,
});

function Shop() {
  const [filter, setFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const list = filter === "all" ? products : products.filter(p => p.categorySlug === filter);

  const filterOptions: [string, string][] = [
    ["all", `All Parts (${products.length})`],
    ...categories.map(c => [c.slug, `${c.name} (5)`] as [string, string]),
  ];

  return (
    <div className="bg-background min-h-screen">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 border-b border-border">
        <div className="absolute inset-0 garage-stripe" />
        <div className="absolute inset-0 bg-gradient-to-br from-nitro/5 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4">
          <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-5">
            <Store className="h-3 w-3" /> Full Inventory
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-display text-6xl md:text-7xl leading-[0.9] tracking-wide font-900 uppercase">
                The Full <span className="text-nitro">Floor</span>
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
                Every part on our Detroit floor, individually catalogued. Verified fitment, bench-tested units, and warranty-backed across all categories.
              </p>
              <div className="flex items-center gap-2 mt-6 text-xs text-muted-foreground font-heading uppercase tracking-wider font-500">
                <Link to="/" className="hover:text-nitro transition">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-foreground">Shop</span>
              </div>
            </div>
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: `${products.length}`, l: "Parts Listed" },
                { n: "3", l: "Departments" },
                { n: "48h", l: "Avg. Ship Time" },
              ].map(s => (
                <div key={s.l} className="bg-card border border-border rounded-lg p-4 text-center hover:border-nitro/30 transition-colors">
                  <div className="font-display text-3xl font-900 text-nitro">{s.n}</div>
                  <div className="text-[10px] font-heading uppercase tracking-[0.15em] text-muted-foreground mt-1 font-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter + Toolbar Bar ── */}
      <section className="bg-asphalt border-b border-border sticky top-[73px] z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none py-1">
            {filterOptions.map(([slug, label]) => (
              <button
                key={slug}
                onClick={() => setFilter(slug)}
                className={`px-5 py-3.5 border-b-2 whitespace-nowrap font-heading uppercase tracking-[0.1em] text-xs font-600 transition-all ${
                  filter === slug
                    ? "border-nitro text-nitro bg-nitro/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {label}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2 pl-4 flex-shrink-0 py-2">
              <div className="flex border border-border rounded overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 transition ${viewMode === "grid" ? "bg-nitro text-white" : "hover:bg-secondary"}`}
                ><LayoutGrid className="h-3.5 w-3.5" /></button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 transition ${viewMode === "list" ? "bg-nitro text-white" : "hover:bg-secondary"}`}
                ><List className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results info bar ── */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-3 text-xs text-muted-foreground font-heading uppercase tracking-wider font-500">
          <SlidersHorizontal className="h-3.5 w-3.5 text-nitro" />
          Showing <span className="text-foreground font-700">{list.length}</span> parts
          {filter !== "all" && (
            <> in <span className="text-nitro font-700">{categories.find(c => c.slug === filter)?.name}</span></>
          )}
        </div>
      </div>

      {/* ── Products ── */}
      <section className="py-12 bg-background relative">
        <div className="absolute inset-0 metal-grain" />
        <div className="relative container mx-auto px-4">
          {list.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              <Store className="h-12 w-12 mx-auto mb-4 text-border" />
              <p className="font-heading uppercase tracking-widest text-sm">No parts found</p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {list.map((p) => (
                <div key={p.id} className="bg-card border border-border rounded-lg flex gap-5 p-4 hover:border-nitro/40 transition-colors group">
                  <Link to="/product/$slug" params={{ slug: p.slug }} className="flex-shrink-0 w-28 h-28 rounded-lg overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="tag-pill bg-foreground/10 text-muted-foreground">{p.condition}</span>
                        <span className={`tag-pill ${p.stock === "In Stock" ? "bg-emerald-500/15 text-emerald-400" : "bg-nitro/15 text-nitro"}`}>{p.stock}</span>
                        <span className="tag-pill bg-secondary text-muted-foreground">{p.category}</span>
                        <span className="ml-auto font-mono text-[10px] text-muted-foreground">{p.sku}</span>
                      </div>
                      <Link to="/product/$slug" params={{ slug: p.slug }}>
                        <h3 className="font-display text-xl font-700 uppercase hover:text-nitro transition-colors">{p.title}</h3>
                      </Link>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{p.compatibility}</p>
                    </div>
                    <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                      <div className="font-display text-2xl font-800 text-nitro">{p.price}</div>
                      <Button asChild size="sm" variant="hero" className="h-8">
                        <a href="tel:xxx-xxx-xxxx"><Phone className="h-3 w-3" /> Order by Phone</a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-asphalt border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h3 className="font-display text-3xl font-800 uppercase mb-3">Can't Find What You Need?</h3>
          <p className="text-muted-foreground mb-6">Our specialists can source discontinued, JDM, and hard-to-find parts. Give us a call — if it exists, we'll find it.</p>
          <Button asChild variant="hero" size="lg" className="h-12 px-8">
            <a href="tel:xxx-xxx-xxxx"><Phone className="h-4 w-4" /> Call a Specialist</a>
          </Button>
        </div>
      </section>

    </div>
  );
}
