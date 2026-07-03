import { Link } from "@tanstack/react-router";
import { Phone, ShoppingCart, Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, openCart } from "@/lib/cart";
import { useState } from "react";

export function Header() {
  const items = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);
  const [mobile, setMobile] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-asphalt/95 backdrop-blur-md border-b border-border">
      <div className="bg-nitro text-white text-[11px]">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 font-heading font-600 tracking-[0.15em] uppercase">
          <span className="hidden sm:inline">Est. 2008 · Detroit, Michigan</span>
          <span className="sm:hidden">AutoCore Supply</span>
          <a href="tel:+18553931294" className="flex items-center gap-1.5 text-white hover:text-white/80 transition">
            <Phone className="h-3 w-3" /> (855) 393-1294
          </a>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 bg-nitro rounded flex items-center justify-center">
            <Wrench className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="font-display text-2xl leading-none tracking-wider text-foreground uppercase font-800">
              AutoCore<span className="text-nitro"> Supply</span>
            </div>
            <div className="text-[9px] font-heading tracking-[0.3em] uppercase text-muted-foreground font-500">Auto Parts</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 font-heading text-sm font-600 uppercase tracking-[0.1em]">
          <Link to="/" activeOptions={{ exact: true }} className="underline-nitro [&.active]:text-nitro">Home</Link>
          <Link to="/shop" className="underline-nitro [&.active]:text-nitro">Shop</Link>
          <Link to="/categories" className="underline-nitro [&.active]:text-nitro">Categories</Link>
          <Link to="/about" className="underline-nitro [&.active]:text-nitro">About</Link>
          <Link to="/contact" className="underline-nitro [&.active]:text-nitro">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden md:inline-flex h-9">
            <a href="tel:+18553931294"><Phone className="h-3.5 w-3.5" /> Call Now</a>
          </Button>
          <button onClick={openCart} className="relative border border-border bg-secondary/50 rounded px-3 h-9 flex items-center gap-2 hover:bg-nitro hover:text-white hover:border-nitro transition text-xs font-heading uppercase tracking-widest font-600">
            <ShoppingCart className="h-3.5 w-3.5" /> Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-nitro px-1 text-[10px] font-bold text-white">{count}</span>
            )}
          </button>
          <button className="lg:hidden p-2 border border-border rounded" onClick={() => setMobile(!mobile)}>
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {mobile && (
        <div className="lg:hidden bg-asphalt border-t border-border">
          <nav className="container mx-auto flex flex-col px-4 py-4 gap-3 font-heading text-sm font-600 uppercase tracking-[0.1em]">
            {[["/","Home"],["/shop","Shop"],["/categories","Categories"],["/about","About"],["/contact","Contact"]].map(([to,label]) => (
              <Link key={to} to={to} onClick={() => setMobile(false)} className="py-2 border-b border-border/50 hover:text-nitro transition">{label}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
