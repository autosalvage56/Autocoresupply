import { Search, Microscope, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Source & Locate",
    desc: "Our buyers tap a nationwide network of OEM dealers, salvage yards, and remanufacturers to find exactly what your build needs.",
  },
  {
    icon: Microscope,
    step: "02",
    title: "Inspect & Test",
    desc: "Every engine is compression-tested. Every transmission is dyno-verified. Oil pressure logs and documentation are included.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Prep & Package",
    desc: "Parts are cleaned, photographed, and crated on custom pallets with foam bracing. No loose boxes, no damage in transit.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Ship & Support",
    desc: "Freight goes out within 48 hours with full tracking. Our warranty desk stays available for 12–36 months after delivery.",
  },
];

export function SourcingProcess() {
  return (
    <section className="py-24 bg-asphalt relative overflow-hidden">
      <div className="absolute inset-0 garage-stripe" />
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-4">
            Our Process
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-wide font-800">
            From Floor <span className="text-nitro">To Your Door</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Every part follows a strict 4-step pipeline before it reaches your garage.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {/* connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-gradient-to-r from-nitro/40 to-border" />
              )}
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-nitro/50 transition-colors relative">
                <div className="mx-auto h-14 w-14 rounded-full bg-nitro/15 flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-nitro" />
                </div>
                <div className="font-display text-sm text-nitro font-800 tracking-wider mb-2">{s.step}</div>
                <h3 className="font-display text-lg font-700 mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
