import { useEffect, useState } from "react";

export type CartItem = {
  id: string;
  title: string;
  image: string;
  price?: string;
  compatibility?: string;
  qty: number;
};

const KEY = "autocore-cart";
type Listener = () => void;
const listeners = new Set<Listener>();

const read = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
};
const write = (items: CartItem[]) => {
  localStorage.setItem(KEY, JSON.stringify(items));
  listeners.forEach((l) => l());
};

export const cartStore = {
  add(item: Omit<CartItem, "qty">) {
    const items = read();
    const i = items.findIndex((x) => x.id === item.id);
    if (i >= 0) items[i].qty += 1;
    else items.push({ ...item, qty: 1 });
    write(items);
    openCart();
  },
  remove(id: string) {
    write(read().filter((x) => x.id !== id));
  },
  setQty(id: string, qty: number) {
    const items = read().map((x) => (x.id === id ? { ...x, qty: Math.max(1, qty) } : x));
    write(items);
  },
  clear() { write([]); },
  items: read,
};

let openSetter: ((v: boolean) => void) | null = null;
export const registerCartOpener = (s: (v: boolean) => void) => { openSetter = s; };
export const openCart = () => openSetter?.(true);

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    setItems(read());
    const l = () => setItems(read());
    listeners.add(l);
    return () => { listeners.delete(l); };
  }, []);
  return items;
}
