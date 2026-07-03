import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart, ShieldCheck, Truck, BadgeCheck, ChevronRight } from "lucide-react";
import { cartStore } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-32 text-center bg-background min-h-screen">
      <h1 className="font-display text-6xl font-900 uppercase tracking-wider text-nitro">Part Not Found</h1>
      <Link to="/shop" className="text-foreground hover:text-nitro mt-6 inline-block underline font-heading uppercase tracking-widest text-sm">
        ← Back to inventory
      </Link>
    </div>
  ),
  loader: ({ params }) => {
    const p = products.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.product.title} — AutoCore Supply` },
    { name: "description", content: loaderData.product.description },
  ] : [] }),
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const related = products.filter(x => x.categorySlug === p.categorySlug && x.id !== p.id).slice(0, 4);
  return (
    <section className="py-14 bg-background min-h-screen relative">
      <div className="absolute inset-0 metal-grain" />
      <div className="relative container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground font-heading uppercase tracking-wider font-500 mb-8">
          <Link to="/" className="hover:text-nitro transition">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-nitro transition">Inventory</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{p.category}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10">
          <figure className="lg:col-span-7">
            <div className="relative overflow-hidden bg-card border border-border rounded-lg">
              <img src={p.image} alt={p.title} className="w-full aspect-square object-cover" />
              <div className="absolute top-4 left-4 bg-nitro text-white px-3 py-1 text-[10px] font-heading uppercase tracking-[0.2em] font-600 rounded">
                SKU · {p.sku}
              </div>
            </div>
            <figcaption className="mt-4 text-xs text-muted-foreground flex justify-between px-1">
              <span>Photographed on our Detroit floor · AutoCore Supply archives</span>
              <span className="font-mono text-[10px]">{p.sku}</span>
            </figcaption>
          </figure>
          <div className="lg:col-span-5 bg-card border border-border rounded-xl p-8">
            <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-4">
              {p.category}
            </div>
            <h1 className="font-display text-4xl md:text-5xl leading-none font-800 uppercase tracking-wide">{p.title}</h1>
            <div className="rule my-6" />
            <div className="flex items-center gap-3 flex-wrap">
              <div className="font-display text-5xl font-900 text-nitro leading-none">{p.price}</div>
              <span className="tag-pill bg-foreground text-background">{p.condition}</span>
              <span className={`tag-pill ${p.stock === "In Stock" ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25" : "bg-nitro/15 text-nitro border border-nitro/25"}`}>{p.stock}</span>
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed">{p.description}</p>

            <div className="mt-8 grid grid-cols-3 border-t border-b border-border divide-x divide-border">
              <Spec icon={ShieldCheck} label="Warranty" value={p.warranty} />
              <Spec icon={Truck} label="Shipping" value="Nationwide" />
              <Spec icon={BadgeCheck} label="Fitment" value="VIN Checked" />
            </div>

            <div className="mt-6">
              <div className="text-[11px] font-heading uppercase tracking-[0.15em] text-muted-foreground mb-1 font-600">Verified Compatibility</div>
              <p className="text-sm font-medium">{p.compatibility}</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <Button variant="outline" size="lg" className="h-12"
                onClick={() => cartStore.add({ id: p.id, title: p.title, image: p.image, price: p.price, compatibility: p.compatibility })}>
                <ShoppingCart className="h-4 w-4" /> Add to List
              </Button>
              <Button asChild variant="hero" size="lg" className="h-12"><a href="tel:+18553931294"><Phone className="h-4 w-4" /> Call to Order</a></Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground italic text-center">No online checkout — our specialists verify your VIN and finalize shipping rates by phone.</p>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24 pt-10 border-t border-border">
            <div className="flex items-baseline justify-between mb-8">
              <h3 className="font-display text-3xl font-800 uppercase tracking-wide">More from <span className="text-nitro">{p.category}</span></h3>
              <Link to="/categories" className="font-heading uppercase text-[11px] tracking-[0.15em] underline-nitro font-600 text-muted-foreground hover:text-foreground">
                All Departments →
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link key={r.id} to="/product/$slug" params={{ slug: r.slug }} className="group bg-card border border-border rounded-lg p-4 hover:border-nitro/40 transition-colors">
                  <div className="aspect-[4/5] overflow-hidden rounded"><img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /></div>
                  <div className="mt-4 font-display text-lg font-700 uppercase line-clamp-1 group-hover:text-nitro transition-colors">{r.title}</div>
                  <div className="text-sm text-nitro font-display font-800 mt-1">{r.price}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Spec({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="p-4 text-center">
      <Icon className="h-5 w-5 text-nitro mx-auto mb-2" />
      <div className="text-[10px] font-heading uppercase tracking-[0.15em] text-muted-foreground font-500">{label}</div>
      <div className="text-xs mt-1 font-bold truncate">{value}</div>
    </div>
  );
}
