import { createFileRoute } from "@tanstack/react-router";

import {
  Wrench, Shield, Users, Gauge, Clock, Award, MapPin,
  Phone, CheckCircle, Zap, Settings, ArrowRight,
  FlaskConical, Cpu, BadgeCheck, Headset,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: About,
});

const stats = [
  { n: "16+", l: "Years on the Floor", icon: Clock },
  { n: "85k", l: "Orders Shipped", icon: Gauge },
  { n: "4,800", l: "SKUs on Hand", icon: Settings },
  { n: "24h", l: "Avg. Ship Time", icon: Zap },
];

const team = [
  {
    initials: "RA",
    name: "R. Alvarez",
    title: "Shop Foreman",
    years: "14 yrs",
    spec: "Engine Sourcing",
    desc: "Oversees every incoming longblock and crate engine. Has personally supervised over 12,000 compression tests. If the numbers aren't right, it doesn't leave the floor.",
  },
  {
    initials: "KM",
    name: "K. Morrison",
    title: "Drivetrain Specialist",
    years: "11 yrs",
    spec: "Transmissions & Transfer Cases",
    desc: "Former factory rebuild tech at a GM facility. Runs the dyno bay and writes the shift-quality reports attached to every trans we ship.",
  },
  {
    initials: "TS",
    name: "T. Singh",
    title: "Obsolete Parts Hunter",
    years: "9 yrs",
    spec: "JDM & Discontinued Units",
    desc: "Maintains relationships with over 40 specialty importers. Finds discontinued and JDM units that no algorithm can locate. Fluent in three parts databases.",
  },
  {
    initials: "LW",
    name: "L. Washington",
    title: "Fleet Account Manager",
    years: "7 yrs",
    spec: "Commercial Accounts",
    desc: "Manages high-volume fleet contracts from a single desk. Knows every major truck platform by heart and runs same-day sourcing for emergency fleet breakdowns.",
  },
];

const timeline = [
  { year: "2008", event: "Founded in Detroit", desc: "Started as a two-man operation out of a 2,400 sq ft warehouse. First order shipped was a 5.0 Mustang engine to a shop in Memphis." },
  { year: "2011", event: "Dyno Bay Opens", desc: "Invested in the first in-house dynamometer. Every used drivetrain component from this point on is bench-tested under load before listing." },
  { year: "2014", event: "JDM Import Program", desc: "Launched a direct-import pipeline for Japanese domestic market engines and transmissions. Fills gaps that domestic salvage can't." },
  { year: "2018", event: "Fleet Division Launched", desc: "Formalized fleet accounts after landing contracts with three regional trucking companies. Now manages over 200 commercial accounts." },
  { year: "2022", event: "Nationwide Freight Network", desc: "Partnered with four regional freight carriers for next-day delivery to 38 states. Average engine delivery time dropped from 96h to 48h." },
  { year: "2024", event: "40,000 Parts Milestone", desc: "Reached 40,000 individual parts shipped. Quality record: less than 0.3% return rate across all categories." },
];

const labFeatures = [
  { icon: Gauge, title: "Compression Testing", desc: "All cylinders tested at cold and warm crank. Results documented and included with the engine." },
  { icon: FlaskConical, title: "Oil Pressure Logs", desc: "Idle and under-load oil pressure readings logged. Flags worn bearings before they leave the building." },
  { icon: Cpu, title: "Dyno Verification", desc: "Transmissions run through all gear ranges on our in-house load dyno. Shift quality and fluid temp recorded." },
  { icon: BadgeCheck, title: "VIN Confirmation", desc: "We cross-reference the part against your specific VIN before invoicing. No guessing, no generic fitment." },
  { icon: CheckCircle, title: "Leak-Down Test", desc: "Piston ring seal checked via leak-down test. Any ring blowby above threshold is remanufactured before sale." },
  { icon: Shield, title: "Warranty Coverage", desc: "All bench-tested units ship with a 12–36 month warranty. Warranty desk staffed by the same techs who built the part." },
];



function About() {
  return (
    <div className="bg-background">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 border-b border-border">
        <div className="absolute inset-0 garage-stripe" />
        <div className="absolute inset-0 bg-gradient-to-br from-nitro/5 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-6">
            <Wrench className="h-3 w-3" /> Est. 2008 · Detroit, MI
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-wide font-900 uppercase">
            Specialists,{" "}
            <span className="text-nitro">Not Order-Takers</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Since 2008, AutoCore Supply has supplied repair shops, restorers, and fleet operators from a working floor in Detroit. Every order is verified by a real specialist before it ships — no checkout carts, no guesswork.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg" className="h-12 px-8">
              <a href="tel:+18553931294"><Phone className="h-4 w-4" /> Talk to a Specialist</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <a href="/shop">Browse Inventory <ArrowRight className="h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-asphalt border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.l} className="bg-card border border-border rounded-lg p-6 text-center hover:border-nitro/40 transition-colors">
                <div className="mx-auto h-12 w-12 rounded-full bg-nitro/15 flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-nitro" />
                </div>
                <div className="font-display text-4xl font-900 text-nitro leading-none">{s.n}</div>
                <div className="text-[11px] font-heading uppercase tracking-[0.15em] text-muted-foreground mt-2 font-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-4">
                Our Story
              </div>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-wide font-800">
                Built on the <span className="text-nitro">Detroit Floor</span>
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>AutoCore Supply started in 2008 with a simple idea: the auto parts industry was flooded with order-takers and short on specialists. We built a floor where every call is answered by someone who actually knows the difference between an LS3 and an LS7 — and why it matters for your build.</p>
                <p>Today we run one of the most tested inventories in the Midwest. Our dyno bay runs 6 days a week. Our buyers network spans 40+ specialty importers. And our warranty desk is staffed by the same technicians who ran the parts through certification.</p>
                <p>We don't sell on algorithms. Every transaction starts with a phone call, a VIN, and a real conversation.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: "Best-in-Class Warranty", sub: "12–36 month coverage" },
                { icon: Users, label: "Expert Team", sub: "40+ years combined" },
                { icon: MapPin, label: "Detroit Based", sub: "Est. 2008" },
                { icon: Headset, label: "Phone Support", sub: "Mon–Sat 8a–7p" },
              ].map((item) => (
                <div key={item.label} className="bg-card border border-border rounded-lg p-5 hover:border-nitro/40 transition-colors">
                  <item.icon className="h-6 w-6 text-nitro mb-3" />
                  <div className="font-heading text-sm font-600">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet the Team ── */}
      <section className="py-24 bg-asphalt relative">
        <div className="absolute inset-0 garage-stripe" />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-4">
              <Users className="h-3 w-3" /> The Team
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-wide font-800">
              Meet the <span className="text-nitro">Specialists</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Real Detroit floor experts — not customer service reps. Each specialist has spent their career in one discipline.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="bg-card border border-border rounded-lg p-6 hover:border-nitro/40 transition-colors group">
                <div className="h-16 w-16 rounded-full bg-nitro flex items-center justify-center mb-5 text-white font-display text-2xl font-900">
                  {m.initials}
                </div>
                <div className="tag-pill bg-nitro/15 text-nitro mb-3 inline-flex">{m.years}</div>
                <h3 className="font-display text-xl font-700">{m.name}</h3>
                <div className="text-sm text-nitro font-heading font-600 uppercase tracking-wider mt-0.5 mb-1">{m.title}</div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-[0.1em] mb-4 font-500">{m.spec}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testing Lab ── */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 metal-grain" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-4">
                <FlaskConical className="h-3 w-3" /> Our Testing Lab
              </div>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-wide font-800">
                Certified <span className="text-nitro">Before It Ships</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <p className="text-muted-foreground leading-relaxed text-lg">Every used engine and transmission passes through a documented testing protocol. We log every reading, photograph every stage, and include the full report with your shipment. No part is listed for sale until it passes our lab.</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {labFeatures.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-lg p-6 hover:border-nitro/50 transition-colors group">
                <div className="h-12 w-12 rounded-lg bg-nitro/15 flex items-center justify-center mb-5 group-hover:bg-nitro/25 transition-colors">
                  <f.icon className="h-6 w-6 text-nitro" />
                </div>
                <h3 className="font-display text-lg font-700 mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 bg-asphalt border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-4">
              Our History
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-wide font-800">
              16 Years <span className="text-nitro">on the Floor</span>
            </h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* vertical line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <div key={t.year} className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-last"}`}>
                  {/* content */}
                  <div className={`bg-card border border-border rounded-lg p-6 hover:border-nitro/40 transition-colors ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                    <div className="font-display text-3xl font-900 text-nitro mb-1">{t.year}</div>
                    <h3 className="font-display text-xl font-700 mb-2">{t.event}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                  {/* dot */}
                  <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-nitro border-4 border-background hidden md:block" />
                  {/* spacer */}
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-6">
            <Phone className="h-3 w-3" /> Ready to Order?
          </div>
          <h2 className="font-display text-5xl font-800 tracking-wide mb-4">
            Call Us <span className="text-nitro">Anytime</span>
          </h2>
          <p className="text-muted-foreground mb-8">Skip the chatbot. Our specialists answer every call and know exactly what's on the floor.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="lg" className="h-14 px-10 pulse-nitro">
              <a href="tel:+18553931294"><Phone className="h-5 w-5" /> (855) 393-1294</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10">
              <a href="/contact">Send Us a Message <ArrowRight className="h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
