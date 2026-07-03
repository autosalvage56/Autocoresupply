import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — AutoCore Supply" },
    { name: "description", content: "Speak with a parts specialist. Call, request a callback, or email AutoCore Supply." },
  ]}),
  component: Contact,
});

function Contact() {
  return (
    <section className="py-16 bg-background min-h-screen relative">
      <div className="absolute inset-0 metal-grain" />
      <div className="relative container mx-auto px-4 max-w-6xl">
        <div className="mb-14 pb-8 border-b border-border">
          <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-4">
            Correspondence
          </div>
          <h1 className="font-display text-6xl md:text-7xl leading-[0.9] tracking-wide font-900 uppercase">
            Ring <span className="text-nitro">The Desk</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed text-lg">Real specialists on a real Detroit floor. Sourced, verified, and shipped under load warranty.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              { i: Phone, t: "Telephone", v: "xxx-xxx-xxxx", h: "tel:xxx-xxx-xxxx" },
              { i: MessageCircle, t: "WhatsApp Direct", v: "xxx-xxx-xxxx", h: "#" },
              { i: Mail, t: "Parts Sourcing Desk", v: "parts@autocoresupply.com", h: "mailto:parts@autocoresupply.com" },
              { i: MapPin, t: "Detroit Floor", v: "4400 Industrial Pkwy, Detroit, MI 48201" },
              { i: Clock, t: "Floor Hours", v: "Mon–Sat 8a–7p EST · Sun Closed" },
            ].map(({ i: Icon, t, v, h }) => (
              <a key={t} href={h || "#"} className="flex items-start gap-4 py-4 border-b border-border group hover:border-nitro/40 transition-colors">
                <div className="h-10 w-10 rounded-lg bg-nitro/15 flex items-center justify-center flex-shrink-0 group-hover:bg-nitro/25 transition-colors">
                  <Icon className="h-5 w-5 text-nitro" />
                </div>
                <div>
                  <div className="text-[10px] font-heading uppercase tracking-[0.15em] text-muted-foreground font-500">{t}</div>
                  <div className="font-heading text-base font-600 mt-1 group-hover:text-nitro transition">{v}</div>
                </div>
              </a>
            ))}
          </div>

          <form className="lg:col-span-3 border border-border rounded-xl p-8 space-y-5 bg-card" onSubmit={(e) => { e.preventDefault(); alert("Callback requested — we'll ring you within 30 minutes."); }}>
            <div>
              <div className="inline-flex items-center gap-2 tag-pill bg-nitro/15 text-nitro border border-nitro/30 mb-3">
                Request Callback
              </div>
              <h2 className="font-display text-3xl font-800 uppercase tracking-wide">Speak with a Specialist</h2>
              <p className="text-sm text-muted-foreground mt-1">Leave your details and a specialist will ring you within 30 minutes.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name"><input required className="input" placeholder="John Smith" /></Field>
              <Field label="Phone"><input required type="tel" className="input" placeholder="(xxx) xxx-xxxx" /></Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Vehicle (Year / Make / Model)"><input className="input" placeholder="2019 Ford Mustang GT" /></Field>
              <Field label="Part Needed"><input className="input" placeholder="Engine, transmission, etc." /></Field>
            </div>
            <Field label="Notes"><textarea className="input min-h-28" placeholder="VIN, fitment details, urgency…" /></Field>
            <Button type="submit" variant="hero" size="lg" className="w-full h-12 mt-2"><Send className="h-4 w-4" /> Request Callback</Button>
            <style>{`
              .input { width:100%; background:transparent; border:0; border-bottom:1px solid var(--border); color:var(--foreground); padding:0.6rem 0; font-size:0.95rem; outline:none; font-family:var(--font-body); transition: border-color 0.2s; }
              .input:focus { border-color:var(--nitro); }
              .input::placeholder { color: var(--muted-foreground); opacity: 0.6; }
            `}</style>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-heading uppercase tracking-[0.15em] text-muted-foreground mb-1.5 font-600">{label}</span>
      {children}
    </label>
  );
}
