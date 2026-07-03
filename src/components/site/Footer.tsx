import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Wrench } from "lucide-react";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-asphalt border-t border-border">
      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-nitro rounded flex items-center justify-center">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <div className="font-display text-3xl leading-none tracking-wider uppercase font-800">
                AutoCore<span className="text-nitro"> Supply</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 max-w-md leading-relaxed">A phone-order house for enthusiasts, restorers, and fleet operators. Sixteen years supplying performance parts the internet can't source.</p>
            <div className="mt-6">
              <a href="tel:8553931294" className="text-nitro font-display text-3xl font-800 tracking-wider hover:text-foreground transition">(855) 393-1294</a>
            </div>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 border border-border rounded flex items-center justify-center hover:bg-nitro hover:border-nitro hover:text-white transition">
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-heading uppercase text-[10px] tracking-[0.2em] text-muted-foreground mb-5 font-600">Categories</h4>
            <ul className="space-y-3 text-sm">
              {categories.map((c) => <li key={c.slug}><Link to="/categories" className="hover:text-nitro transition">{c.name}</Link></li>)}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-heading uppercase text-[10px] tracking-[0.2em] text-muted-foreground mb-5 font-600">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-nitro transition">About Us</Link></li>
              <li><Link to="/shop" className="hover:text-nitro transition">Shop</Link></li>
              <li><Link to="/contact" className="hover:text-nitro transition">Contact</Link></li>
              <li><a href="#" className="hover:text-nitro transition">Warranty</a></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="font-heading uppercase text-[10px] tracking-[0.2em] text-muted-foreground mb-5 font-600">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-nitro" /> (855) 393-1294</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-nitro" /> parts@autocoresupply.com</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-nitro" /> 4400 Industrial Pkwy<br/>Detroit, Michigan 48201</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between text-[11px] text-muted-foreground gap-2 font-heading uppercase tracking-[0.15em] font-500">
          <span>© {new Date().getFullYear()} AutoCore Supply — Detroit, MI</span>
          <span>Phone Orders · Mon–Sat 8a–7p EST</span>
        </div>
      </div>
    </footer>
  );
}
