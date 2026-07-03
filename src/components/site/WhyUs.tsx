import { Shield, Microscope, Search, BadgeCheck } from "lucide-react";

const items = [
  { icon: Shield, title: "Two Catalogs, One Call", desc: "OEM originals and aftermarket performance — sourced together by a specialist who understands the difference." },
  { icon: Microscope, title: "Bench-Tested & Certified", desc: "Every used engine and transmission is run under load and documented before it leaves the floor." },
  { icon: Search, title: "Hard-to-Find Sourcing", desc: "Discontinued, JDM, obsolete drivetrain? Our buyers work the network so you don't have to." },
  { icon: BadgeCheck, title: "Fitment Guaranteed", desc: "We confirm the part against your VIN before we invoice. No wrong-part returns to argue about." },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 metal-grain" />
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-4">
              Why AutoCore Supply
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-wide font-800">
              Four Principles{" "}
              <span className="text-nitro">Since 2008</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-8 text-muted-foreground leading-relaxed text-lg">
            The internet made auto parts easier to search and harder to trust. We built the opposite — a human floor, verified parts, and a warranty desk you can actually reach.
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={it.title} className="bg-card border border-border rounded-lg p-6 hover:border-nitro/50 transition-colors group">
              <div className="h-12 w-12 rounded-lg bg-nitro/15 flex items-center justify-center mb-5 group-hover:bg-nitro/25 transition-colors">
                <it.icon className="h-6 w-6 text-nitro" />
              </div>
              <div className="font-display text-sm text-nitro font-700 tracking-wider mb-2">0{i+1}</div>
              <h3 className="font-display text-xl leading-tight mb-3 font-700">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
