import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Phone, Trash2, Minus, Plus, PhoneCall, ShoppingCart } from "lucide-react";
import { useCart, cartStore, registerCartOpener } from "@/lib/cart";

export function CartDrawer() {
  const [open, setOpen] = useState(false);
  const items = useCart();
  useEffect(() => { registerCartOpener(setOpen); }, []);
  const subtotal = items.reduce((s, i) => {
    const n = parseFloat((i.price || "").replace(/[^0-9.]/g, ""));
    return s + (isNaN(n) ? 0 : n * i.qty);
  }, 0);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-card border-l border-border">
        <SheetHeader className="px-6 py-5 border-b border-border bg-asphalt">
          <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-2">
            <ShoppingCart className="h-3 w-3" /> Parts List
          </div>
          <SheetTitle className="font-display text-2xl tracking-wider font-800 uppercase">Your Build List</SheetTitle>
          <SheetDescription className="text-muted-foreground text-sm">Reserve parts — call to confirm fitment and ship.</SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <ShoppingCart className="h-10 w-10 mx-auto mb-3 text-border" />
              <p className="font-heading uppercase tracking-widest text-sm font-600">Your list is empty</p>
              <p className="text-xs mt-1">Browse parts and add them here</p>
            </div>
          )}
          {items.map((i, idx) => (
            <div key={i.id} className="flex gap-4 py-4 border-b border-border">
              <div className="num-badge text-3xl leading-none pt-1 font-900">{String(idx+1).padStart(2,"00")}</div>
              <img src={i.image} alt={i.title} className="h-20 w-20 object-cover rounded-md" />
              <div className="flex-1 min-w-0">
                <div className="font-heading text-sm font-600 leading-tight line-clamp-2">{i.title}</div>
                {i.compatibility && <div className="text-xs text-muted-foreground mt-1 truncate">{i.compatibility}</div>}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-border rounded overflow-hidden">
                    <button className="p-1.5 hover:bg-nitro hover:text-white transition" onClick={() => cartStore.setQty(i.id, i.qty - 1)}><Minus className="h-3 w-3" /></button>
                    <span className="px-3 text-sm font-600">{i.qty}</span>
                    <button className="p-1.5 hover:bg-nitro hover:text-white transition" onClick={() => cartStore.setQty(i.id, i.qty + 1)}><Plus className="h-3 w-3" /></button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg font-800 text-nitro">{i.price || "Call"}</span>
                    <button onClick={() => cartStore.remove(i.id)} className="text-muted-foreground hover:text-destructive transition"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4 bg-asphalt">
            <div className="flex items-baseline justify-between">
              <span className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] font-heading font-500">Subtotal Estimate</span>
              <span className="text-3xl text-nitro font-display font-800">${subtotal.toLocaleString()}</span>
            </div>
            <div className="bg-nitro/10 border border-nitro/30 rounded-lg p-4 text-sm">
              <p className="font-heading uppercase tracking-[0.15em] text-nitro text-xs mb-1 font-700">Call to Complete Your Order</p>
              <p className="text-muted-foreground text-xs leading-relaxed">Your selected parts are held. Speak with a specialist to verify fitment, finalize pricing, and arrange shipping.</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button asChild variant="hero" size="lg"><a href="tel:xxx-xxx-xxxx"><Phone className="h-4 w-4" /> Call Now</a></Button>
              <Button asChild variant="outline" size="lg"><a href="/contact"><PhoneCall className="h-4 w-4" /> Request Callback</a></Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
