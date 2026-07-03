import { Package, Zap, Clock, CheckCircle } from "lucide-react";

const arrivals = [
  { title: "Ford 5.0L Coyote V8", tag: "DYNO CERTIFIED", status: "ready", time: "2h ago", cat: "Engines" },
  { title: "Tremec T56 6-Speed Manual", tag: "BENCH TESTED", status: "ready", time: "5h ago", cat: "Transmissions" },
  { title: "Brembo GT 6-Piston Kit", tag: "NEW ARRIVAL", status: "incoming", time: "12h ago", cat: "Brakes" },
  { title: "Honda K24 2.4L VTEC", tag: "LOW MILEAGE", status: "ready", time: "1d ago", cat: "Engines" },
  { title: "GM 6L80 6-Speed Auto", tag: "DYNO CERTIFIED", status: "ready", time: "1d ago", cat: "Transmissions" },
  { title: "32-Way Adjustable Coilovers", tag: "IN STOCK", status: "ready", time: "2d ago", cat: "Suspension" },
];

export function LiveArrivals() {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 metal-grain" />
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 tag-pill bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Feed
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-wide font-800">
              Recent <span className="text-nitro">Arrivals</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">Fresh stock hitting our Detroit floor — inspected, tested, and ready to ship nationwide.</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-nitro" />
            Updated every hour
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {arrivals.map((a) => (
            <div key={a.title} className="bg-card border border-border rounded-lg p-5 hover:border-nitro/40 transition-colors group flex items-start gap-4">
              <div className="h-11 w-11 rounded-lg bg-nitro/10 flex items-center justify-center flex-shrink-0 group-hover:bg-nitro/20 transition-colors">
                {a.status === "ready" ? <CheckCircle className="h-5 w-5 text-emerald-400" /> : <Package className="h-5 w-5 text-amber-400" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`tag-pill text-[9px] ${a.status === "ready" ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"}`}>
                    {a.tag}
                  </span>
                  <span className="text-[10px] text-muted-foreground ml-auto flex-shrink-0">{a.time}</span>
                </div>
                <h3 className="font-heading text-sm font-600 truncate">{a.title}</h3>
                <div className="text-[11px] text-muted-foreground mt-0.5">{a.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
