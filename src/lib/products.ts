import catEngines from "@/assets/cat-engines-new.jpg";
import catTransmissions from "@/assets/cat-transmissions-new.jpg";
import catOther from "@/assets/cat-otherparts-new.jpg";
import pEng1 from "@/assets/p-eng-1.jpg";
import pEng2 from "@/assets/p-eng-2.jpg";
import pEng3 from "@/assets/p-eng-3.jpg";
import pEng4 from "@/assets/p-eng-4.jpg";
import pEng5 from "@/assets/p-eng-5.jpg";
import pTrn1 from "@/assets/p-trn-1.jpg";
import pTrn2 from "@/assets/p-trn-2.jpg";
import pTrn3 from "@/assets/p-trn-3.jpg";
import pTrn4 from "@/assets/p-trn-4.jpg";
import pTrn5 from "@/assets/p-trn-5.jpg";
import pOth1 from "@/assets/p-oth-1.jpg";
import pOth2 from "@/assets/p-oth-2.jpg";
import pOth3 from "@/assets/p-oth-3.jpg";
import pOth4 from "@/assets/p-oth-4.jpg";
import pOth5 from "@/assets/p-oth-5.jpg";

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: "Engines" | "Transmissions" | "Other Parts";
  categorySlug: "engines" | "transmissions" | "other-parts";
  image: string;
  price?: string;
  condition: "OEM" | "Used" | "Remanufactured" | "Aftermarket";
  stock: "In Stock" | "Limited" | "Pre-Order";
  compatibility: string;
  sku: string;
  warranty: string;
  description: string;
};

export const categories = [
  { name: "Engines", slug: "engines", image: catEngines, count: 412, blurb: "OEM crate blocks, remanufactured longblocks, and performance builds." },
  { name: "Transmissions", slug: "transmissions", image: catTransmissions, count: 286, blurb: "Automatic, manual, CVT and DCT — dyno-tested before shipping." },
  { name: "Other Parts", slug: "other-parts", image: catOther, count: 1840, blurb: "Suspension, brakes, cooling, wheels, body and everything between." },
];

export const brands = [
  "Ford","Chevrolet","Honda","Toyota","Jeep","Mitsubishi","Dodge","Scion","Nissan","GMC",
];

export const products: Product[] = [
  // ENGINES
  { id: "e1", slug: "ford-50l-coyote-v8", title: "Ford 5.0L Coyote V8 Engine", category: "Engines", categorySlug: "engines", image: pEng1, price: "$4,850", condition: "Remanufactured", stock: "In Stock", compatibility: "Ford Mustang GT 2018-2023, F-150 5.0", sku: "ENG-FRD-50CY-18", warranty: "12 Month / Unlimited Mile", description: "Fully remanufactured Coyote V8 with new bearings, rings, gaskets, and timing components. Bench-tested under load with full compression report included." },
  { id: "e2", slug: "chevrolet-ls3-62l-crate", title: "Chevrolet LS3 6.2L Crate V8", category: "Engines", categorySlug: "engines", image: pEng2, price: "$7,650", condition: "OEM", stock: "In Stock", compatibility: "Camaro SS, Corvette, C10 swaps", sku: "ENG-GM-LS3-62", warranty: "24 Month", description: "430hp factory-sealed LS3 crate. Aluminum block, rectangular-port heads. Ready to drop in with the correct harness kit." },
  { id: "e3", slug: "honda-k24-vtec-inline4", title: "Honda K24 2.4L VTEC Inline-4", category: "Engines", categorySlug: "engines", image: pEng3, price: "$3,290", condition: "Used", stock: "Limited", compatibility: "Accord, TSX, K-swap builds", sku: "ENG-HND-K24-VT", warranty: "6 Month", description: "Low-mileage JDM K24 with intake, exhaust manifold and ECU. Perfect for K-swap projects." },
  { id: "e4", slug: "cummins-59l-turbo-diesel", title: "Cummins 5.9L 24V Turbo Diesel", category: "Engines", categorySlug: "engines", image: pEng4, price: "$8,950", condition: "Remanufactured", stock: "In Stock", compatibility: "Dodge Ram 2500/3500 1998-2007", sku: "ENG-CMS-59-24V", warranty: "24 Month / 100,000 Mile", description: "The legendary 5.9 24V — fully machined, new pistons, ARP studs, remanufactured injectors. Runs cool, pulls forever." },
  { id: "e5", slug: "subaru-ej257-boxer-turbo", title: "Subaru EJ257 2.5L Turbo Boxer", category: "Engines", categorySlug: "engines", image: pEng5, price: "$4,120", condition: "Remanufactured", stock: "In Stock", compatibility: "WRX STI 2004-2019, Forester XT", sku: "ENG-SUB-EJ257", warranty: "12 Month", description: "Closed-deck rebuilt EJ257 with forged internals option. Includes VF48 turbo, injectors, and intake manifold." },

  // TRANSMISSIONS
  { id: "t1", slug: "gm-6l80-automatic", title: "GM 6L80 6-Speed Automatic", category: "Transmissions", categorySlug: "transmissions", image: pTrn1, price: "$3,450", condition: "Remanufactured", stock: "In Stock", compatibility: "Silverado, Sierra, Tahoe, Yukon 2007-2018", sku: "TRN-GM-6L80-RM", warranty: "24 Month / 24,000 Mile", description: "Heavy-duty rebuild with upgraded clutch packs, valve body and shift kit. Dyno-verified before shipping." },
  { id: "t2", slug: "tremec-t56-manual-6spd", title: "Tremec T56 6-Speed Manual", category: "Transmissions", categorySlug: "transmissions", image: pTrn2, price: "$4,200", condition: "Remanufactured", stock: "In Stock", compatibility: "LS-swap builds, Mustang, Camaro, Viper", sku: "TRN-TRM-T56-M", warranty: "12 Month", description: "The gold-standard performance manual. Rebuilt with new synchros, bearings, and Magnum shifter housing." },
  { id: "t3", slug: "honda-cvt-transmission", title: "Honda CVT Continuously Variable", category: "Transmissions", categorySlug: "transmissions", image: pTrn3, price: "$2,180", condition: "Used", stock: "Limited", compatibility: "Civic, Accord, HR-V 2016-2022", sku: "TRN-HND-CVT-16", warranty: "6 Month", description: "Tested working CVT with cooler upgrade included. Perfect drop-in replacement for late-model Honda platforms." },
  { id: "t4", slug: "vw-dsg-dual-clutch", title: "Volkswagen DSG Dual-Clutch", category: "Transmissions", categorySlug: "transmissions", image: pTrn4, price: "$3,890", condition: "Remanufactured", stock: "In Stock", compatibility: "Golf GTI, R, Audi S3 2015+", sku: "TRN-VW-DQ250", warranty: "18 Month", description: "DQ250 wet-clutch DSG, fully rebuilt with updated mechatronic unit. Lightning-fast shifts, factory reliability." },
  { id: "t5", slug: "allison-1000-heavy-duty", title: "Allison 1000 Heavy-Duty Automatic", category: "Transmissions", categorySlug: "transmissions", image: pTrn5, price: "$6,540", condition: "Remanufactured", stock: "Pre-Order", compatibility: "Duramax LB7/LLY/LBZ Silverado 2500HD/3500", sku: "TRN-ALS-1000-HD", warranty: "36 Month / 100,000 Mile", description: "Bulletproof diesel truck transmission. New clutches, torque converter, and billet input shaft. Handles up to 800lb-ft." },

  // OTHER PARTS
  { id: "o1", slug: "all-aluminum-performance-radiator", title: "All-Aluminum Dual-Fan Radiator", category: "Other Parts", categorySlug: "other-parts", image: pOth1, price: "$620", condition: "Aftermarket", stock: "In Stock", compatibility: "Universal — 26\" x 19\" core", sku: "COOL-RAD-DF-26", warranty: "Lifetime", description: "3-row aluminum core with dual 12\" SPAL fans and shroud. Drops engine temps up to 40°F versus stock." },
  { id: "o2", slug: "adjustable-coilover-kit", title: "32-Way Adjustable Coilover Kit", category: "Other Parts", categorySlug: "other-parts", image: pOth2, price: "$1,290", condition: "Aftermarket", stock: "In Stock", compatibility: "Subaru WRX/STI, Mitsubishi Evo 8/9", sku: "SUS-COIL-32W", warranty: "24 Month", description: "Monotube damper with 32-way rebound adjustment, ride height adjustable, powder-coated gold body with red springs." },
  { id: "o3", slug: "20in-matte-black-forged-wheel", title: "20\" Matte Black Forged Wheel", category: "Other Parts", categorySlug: "other-parts", image: pOth3, price: "$780 / ea", condition: "Aftermarket", stock: "In Stock", compatibility: "5x114.3 — Mustang, Charger, Camaro", sku: "WHL-FRG-20MB", warranty: "Lifetime Structural", description: "Rotary-forged aluminum, deep concave face, matte black finish. Priced per wheel — call to build your set." },
  { id: "o4", slug: "brembo-big-brake-kit", title: "Brembo GT 6-Piston Big Brake Kit", category: "Other Parts", categorySlug: "other-parts", image: pOth4, price: "$3,240", condition: "OEM", stock: "In Stock", compatibility: "Most performance vehicles — call for fitment", sku: "BRK-BREM-6P-380", warranty: "24 Month", description: "380mm two-piece drilled rotors, red 6-piston monobloc calipers, stainless lines, race pads. Track-tested." },
  { id: "o5", slug: "carbon-fiber-side-skirts", title: "Carbon Fiber Side Skirt Pair", category: "Other Parts", categorySlug: "other-parts", image: pOth5, price: "$649", condition: "Aftermarket", stock: "In Stock", compatibility: "Universal fitment — most coupes and sedans", sku: "EXT-CF-SS-UNI", warranty: "90 Day", description: "Genuine 2x2 twill carbon fiber with UV-protective clear coat. Hardware included, gloss finish." },
];

export const productsByCategory = (slug: string) => products.filter(p => p.categorySlug === slug);
