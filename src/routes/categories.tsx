import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { categories, productsByCategory } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import {
  ArrowRight, Layers, Cog, Zap, LayoutGrid, List,
  SlidersHorizontal, ChevronRight, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/categories")({
  component: Categories,
});

const catIcons = [Cog, Zap, Layers];
const catColors = [
  "from-orange-600/20 to-transparent",
  "from-blue-600/20 to-transparent",
  "from-emerald-600/20 to-transparent",
];
const catAccents = ["text-orange-400", "text-blue-400", "text-emerald-400"];
const catBorders = ["border-orange-500/40", "border-blue-500/40", "border-emerald-500/40"];

function Categories() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const active = categories[activeIdx];
  const items = productsByCategory(active.slug);
  const Icon = catIcons[activeIdx];

  return (
    <div className="bg-background min-h-screen">

      {/* ── Page Hero ── */}
      <section className="relative overflow-hidden py-20 border-b border-border">
        <div className="absolute inset-0 garage-stripe" />
        <div className="absolute inset-0 bg-gradient-to-br from-nitro/5 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4">
          <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-5">
            <Layers className="h-3 w-3" /> Parts Catalogue
          </div>
          <h1 className="font-display text-6xl md:text-7xl leading-[0.9] tracking-wide font-900 uppercase max-w-3xl">
            All <span className="text-nitro">Departments</span>
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl text-lg">
            Three departments, one phone call. Each category is managed by a specialist
            who's spent their career sourcing that specific inventory.
          </p>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-8 text-xs text-muted-foreground font-heading uppercase tracking-wider font-500">
            <Link to="/" className="hover:text-nitro transition">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Categories</span>
          </div>
        </div>
      </section>

      {/* ── Category Tab Switcher ── */}
      <section className="bg-asphalt border-b border-border sticky top-[73px] z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
            {categories.map((c, i) => {
              const CatIcon = catIcons[i];
              const isActive = activeIdx === i;
              return (
                <button
                  key={c.slug}
                  onClick={() => setActiveIdx(i)}
                  className={`flex items-center gap-2.5 px-6 py-4 border-b-2 transition-all whitespace-nowrap font-heading uppercase tracking-[0.1em] text-sm font-600 ${
                    isActive
                      ? "border-nitro text-nitro bg-nitro/5"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  <CatIcon className={`h-4 w-4 ${isActive ? "text-nitro" : ""}`} />
                  {c.name}
                  <span className={`tag-pill text-[9px] ${isActive ? "bg-nitro/20 text-nitro" : "bg-secondary text-muted-foreground"}`}>
                    {c.count}+
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Active Category Banner ── */}
      <section className="relative overflow-hidden h-72 md:h-96">
        <img
          src={active.image}
          alt={active.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-r from-asphalt/95 via-asphalt/70 to-transparent`} />
        <div className={`absolute inset-0 bg-gradient-to-t ${catColors[activeIdx]}`} />
        <div className="absolute inset-0 garage-stripe" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className={`inline-flex items-center gap-2 tag-pill mb-3 bg-black/30 backdrop-blur ${catAccents[activeIdx]}`}>
                <Icon className="h-3 w-3" />
                Department {String(activeIdx + 1).padStart(2, "0")}
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-900 uppercase text-white tracking-wide">
                {active.name}
              </h2>
              <p className="mt-2 text-white/70 max-w-lg">{active.blurb}</p>
            </div>
            {/* Stats pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Parts in Stock", val: `${active.count}+` },
                { label: "Avg. Lead Time", val: "48h" },
                { label: "Warranty", val: "12–36 mo" },
              ].map((s) => (
                <div key={s.label} className="bg-black/40 backdrop-blur border border-white/15 rounded-lg px-4 py-2.5 text-center">
                  <div className={`font-display text-2xl font-800 ${catAccents[activeIdx]}`}>{s.val}</div>
                  <div className="text-[10px] font-heading uppercase tracking-wider text-white/60 font-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Toolbar: view toggle + CTA ── */}
      <section className="bg-asphalt border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <SlidersHorizontal className="h-4 w-4 text-nitro" />
            <span className="font-heading font-500 uppercase tracking-wider text-xs">
              {items.length} parts in <span className="text-foreground">{active.name}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex border border-border rounded overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 transition ${viewMode === "grid" ? "bg-nitro text-white" : "hover:bg-secondary"}`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition ${viewMode === "list" ? "bg-nitro text-white" : "hover:bg-secondary"}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
            <Button asChild variant="hero" size="sm" className="h-9">
              <a href="tel:xxx-xxx-xxxx"><Phone className="h-3.5 w-3.5" /> Talk to Specialist</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Product Grid / List ── */}
      <section className="py-12 bg-background relative">
        <div className="absolute inset-0 metal-grain" />
        <div className="relative container mx-auto px-4">
          {viewMode === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((p, i) => (
                <div key={p.id} className="bg-card border border-border rounded-lg flex gap-5 p-4 hover:border-nitro/40 transition-colors group">
                  <Link to="/product/$slug" params={{ slug: p.slug }} className="flex-shrink-0 w-28 h-28 rounded-lg overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="tag-pill bg-foreground/10 text-muted-foreground">{p.condition}</span>
                        <span className={`tag-pill ${p.stock === "In Stock" ? "bg-emerald-500/15 text-emerald-400" : "bg-nitro/15 text-nitro"}`}>{p.stock}</span>
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

      {/* ── Other Categories Quick Nav ── */}
      <section className="py-16 bg-asphalt border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="font-display text-2xl font-700 uppercase mb-6 text-muted-foreground tracking-wide">
            Other Departments
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {categories
              .filter((_, i) => i !== activeIdx)
              .map((c, i) => {
                const realIdx = categories.indexOf(c);
                const CIcon = catIcons[realIdx];
                return (
                  <button
                    key={c.slug}
                    onClick={() => { setActiveIdx(realIdx); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className={`group flex items-center gap-4 bg-card border ${catBorders[realIdx]} rounded-lg p-5 hover:bg-nitro/5 transition-all text-left`}
                  >
                    <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-nitro/15 transition-colors">
                      <CIcon className={`h-6 w-6 ${catAccents[realIdx]}`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-lg font-700 uppercase">{c.name}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{c.count}+ parts available</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-nitro group-hover:translate-x-1 transition-all" />
                  </button>
                );
              })}
          </div>
        </div>
      </section>

    </div>
  );
}
