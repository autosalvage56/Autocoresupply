import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";

const PHONE_DISPLAY = "(855) 393-1294";
const PHONE_TEL = "tel:+18553931294";

export function CallNowPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("callNowPopupShown")) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("callNowPopupShown", "1");
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 text-nitro hover:text-nitro/70 transition"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-3xl font-extrabold text-nitro">
          What are you waiting for?
        </h2>

        <p className="mt-4 text-neutral-700">
          Get in touch: <span className="font-bold text-neutral-900">{PHONE_DISPLAY}</span>
        </p>

        <blockquote className="mt-4 border-l-4 border-nitro bg-neutral-100 px-4 py-3 text-left italic text-neutral-700">
          "Get Quality Used Engine & Transmission"
        </blockquote>

        <a
          href={PHONE_TEL}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-nitro px-6 py-3 text-lg font-bold text-white transition hover:bg-nitro/90"
        >
          <Phone className="h-5 w-5" /> Call Now: {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
