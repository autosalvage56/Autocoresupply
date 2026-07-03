import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const years = Array.from({ length: 30 }, (_, i) => 2025 - i);
const makes = ["Ford","Chevrolet","Honda","Toyota","Jeep","Mitsubishi","Dodge","Nissan","GMC","Subaru"];

export function VehicleSearch() {
  return (
    <section className="bg-ivory">
      <div className="container mx-auto px-4 py-12">
        <div className="border-t-2 border-b border-ink bg-ivory">
          <div className="grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-3 p-8 border-r border-ink/15">
              <div className="text-[10px] font-heading uppercase tracking-[0.3em] text-oxblood mb-3">The Lookup Desk</div>
              <h3 className="font-display text-3xl leading-tight">Match your <span className="italic">vehicle</span>.</h3>
              <p className="text-sm text-ink/60 mt-3 leading-relaxed">Narrow the floor to parts confirmed for your specific chassis and drivetrain.</p>
            </div>
            <form className="lg:col-span-9 p-8 grid gap-6 md:grid-cols-5 items-end">
              <Field label="Year"><select className="select">{[<option key="s">Select</option>, ...years.map(y => <option key={y}>{y}</option>)]}</select></Field>
              <Field label="Make"><select className="select">{[<option key="s">Select</option>, ...makes.map(m => <option key={m}>{m}</option>)]}</select></Field>
              <Field label="Model"><select className="select"><option>Select</option><option>Mustang</option><option>Silverado</option><option>Civic</option></select></Field>
              <Field label="Engine"><select className="select"><option>Select</option><option>V8 5.0L</option><option>V8 6.2L</option><option>I4 2.0T</option></select></Field>
              <Button variant="hero" size="lg" className="h-11"><Search className="h-4 w-4" /> Find Parts</Button>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        .select { width:100%; background:transparent; border:0; border-bottom:1px solid var(--ink); color:var(--foreground); padding:0.5rem 0; font-size:0.85rem; font-family:var(--font-heading); letter-spacing:0.1em; text-transform:uppercase; outline:none; }
        .select:focus { border-color: var(--oxblood); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-1 font-heading">{label}</span>
      {children}
    </label>
  );
}
