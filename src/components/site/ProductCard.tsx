import { Link } from "@tanstack/react-router";
import { Phone, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cartStore } from "@/lib/cart";
import type { Product } from "@/lib/products";

export function ProductCard({ p, index }: { p: Product; index?: number }) {
  return (
    <article className="group relative bg-card border border-border rounded-lg editorial-card flex flex-col overflow-hidden">
      <Link to="/product/$slug" params={{ slug: p.slug }} className="block aspect-[4/5] overflow-hidden relative">
        <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {typeof index === "number" && (
          <div className="absolute top-3 left-3 num-badge text-3xl leading-none font-900">{String(index+1).padStart(2,"0")}</div>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
          <span className="tag-pill bg-foreground text-background">{p.condition}</span>
          <span className={`tag-pill ${p.stock === "In Stock" ? "bg-emerald-500/90 text-white" : "bg-nitro text-white"}`}>{p.stock}</span>
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between text-[10px] font-heading uppercase tracking-[0.15em] text-muted-foreground mb-3 font-500">
          <span>{p.category}</span>
          <span className="font-mono text-[9px]">{p.sku}</span>
        </div>
        <Link to="/product/$slug" params={{ slug: p.slug }}>
          <h3 className="font-display text-xl leading-tight hover:text-nitro transition-colors line-clamp-2 font-700 uppercase">{p.title}</h3>
        </Link>
        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{p.compatibility}</p>
        <div className="rule my-4" />
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[10px] font-heading uppercase tracking-[0.15em] text-muted-foreground font-500">From</div>
            <div className="font-display text-2xl text-nitro leading-none font-800">{p.price}</div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => cartStore.add({ id: p.id, title: p.title, image: p.image, price: p.price, compatibility: p.compatibility })}
              className="h-9 w-9 border border-border rounded flex items-center justify-center hover:bg-nitro hover:text-white hover:border-nitro transition"
              aria-label="Add to cart"
            ><Plus className="h-3.5 w-3.5" /></button>
            <Button asChild size="sm" variant="hero" className="h-9"><a href="tel:xxx-xxx-xxxx"><Phone className="h-3.5 w-3.5" /> Call</a></Button>
          </div>
        </div>
      </div>
    </article>
  );
}
