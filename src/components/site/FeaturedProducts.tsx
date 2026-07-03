import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const featured = [products[0], products[5], products[10], products[1], products[6], products[11]];
  return (
    <section className="py-24 bg-asphalt relative">
      <div className="absolute inset-0 garage-stripe" />
      <div className="relative container mx-auto px-4">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-4">
              Featured Stock
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-wide leading-[0.95] font-800">
              This Week's <span className="text-nitro">Top Picks</span>
            </h2>
          </div>
          <Link to="/shop" className="font-heading uppercase tracking-[0.15em] text-sm underline-nitro flex items-center gap-2 font-600 text-muted-foreground hover:text-foreground transition">
            View Full Inventory <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
