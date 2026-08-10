export interface ProductDetails {
  material: string;
  fit: string;
  care: string;
  shipping: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'tees' | 'hoodies' | 'bottoms' | 'outerwear' | 'accessories';
  price: number;
  originalPrice?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isDropFeatured?: boolean;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  details: ProductDetails;
  images: string[];
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL')[];
  inStock: boolean;
  sku: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "dc-001",
    slug: "obelisk-heavyweight-tee-onyx",
    name: "OBELISK HEAVYWEIGHT TEE",
    category: "tees",
    price: 3499,
    originalPrice: 4299,
    isNew: true,
    isFeatured: true,
    isDropFeatured: true,
    tagline: "450 GSM CUSTOM COTTON SILHOUETTE",
    shortDescription: "Brutalist drop-shoulder oversized boxy tee crafted from ultra-heavy 450 GSM combed cotton.",
    fullDescription: "Constructed with unyielding structural integrity, the Obelisk Heavyweight Tee represents the backbone of DRYFT CULT's Drop 001. Built from custom 450 GSM French combed cotton with high-density ribbed necklines and reinforced double-needle coverstitching.",
    details: {
      material: "100% Ultra-Heavy French Combed Cotton (450 GSM)",
      fit: "Extreme Boxy Fit // Drop Shoulder Silhouette",
      care: "Cold gentle machine wash inside out. Line dry in shade. Do not iron print.",
      shipping: "Dispatched via Express Courier across India within 24-48 hours. Free returns within 7 days."
    },
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    sku: "DC-DROP01-001"
  },
  {
    id: "dc-002",
    slug: "monolith-500gsm-box-hoodie-tar",
    name: "MONOLITH 500GSM HOODIE",
    category: "hoodies",
    price: 6999,
    originalPrice: 7999,
    isNew: true,
    isFeatured: true,
    isDropFeatured: true,
    tagline: "DOUBLE-WALL 500 GSM FLEECE MONOLITH",
    shortDescription: "Architectural heavy fleece hoodie with seamless double-layered hood and zero drawstrings.",
    fullDescription: "The Monolith Hoodie is engineered for absolute armor-like warmth and brutalist form. Weighing 500 GSM, it features a unibody double-layer hood structure, seamless ribbing, and deep kangaroo drop pocket designed for clean lines.",
    details: {
      material: "85% Heavy French Terry, 15% Organic Fleece (500 GSM)",
      fit: "Architectural Oversized Fit // Seamless Hood",
      care: "Dry clean recommended or cold hand wash. Flat dry.",
      shipping: "Ships in premium custom DRYFT matte black box with authenticity certificate."
    },
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    sku: "DC-DROP01-002"
  },
  {
    id: "dc-003",
    slug: "tactical-balloon-cargo-pants-black",
    name: "TACTICAL BALLOON CARGO",
    category: "bottoms",
    price: 5499,
    originalPrice: 6499,
    isNew: true,
    isFeatured: true,
    isDropFeatured: true,
    tagline: "EXPANDABLE CANVAS BALLOON FIT",
    shortDescription: "Heavy canvas tactical trousers featuring knee dart articulation and concealed magnetic pockets.",
    fullDescription: "Designed for urban fluid motion, the Tactical Balloon Cargo balances wide volume with targeted tapered cuffs. Hand-crafted from 380 GSM cotton canvas with matte dark alloy hardware and deep utility cargo slots.",
    details: {
      material: "380 GSM Washed Cotton Canvas",
      fit: "Balloon Tapered Cut // Adjustable Ankle Bungee Cords",
      care: "Machine wash cold with dark colors. Hang dry.",
      shipping: "Standard 2-3 business day dispatch across pan-India."
    },
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    sku: "DC-DROP01-003"
  },
  {
    id: "dc-004",
    slug: "acid-wash-archive-tee-cement",
    name: "ARCHIVE ACID WASH TEE",
    category: "tees",
    price: 3299,
    isNew: false,
    isFeatured: true,
    isDropFeatured: false,
    tagline: "INDIVIDUALLY DISTRESSED CEMENT WASH",
    shortDescription: "Custom vintage mineral washed tee with muted brandmark embroidery on left lower hem.",
    fullDescription: "Each unit undergoes a multi-stage hand distress wash, yielding a unique textured finish. Made with 400 GSM heavy jersey cotton and finished with understated tonal threadwork.",
    details: {
      material: "100% Mineral Washed Jersey Cotton (400 GSM)",
      fit: "Relaxed Boxy Vintage Fit",
      care: "Wash inside out with neutral detergent.",
      shipping: "Delivered within 3-4 days to all Indian PIN codes."
    },
    images: [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    sku: "DC-DROP01-004"
  },
  {
    id: "dc-005",
    slug: "v01-canvas-work-jacket-dust",
    name: "CANVAS WORK JACKET // V-01",
    category: "outerwear",
    price: 8999,
    originalPrice: 10499,
    isNew: true,
    isFeatured: true,
    isDropFeatured: true,
    tagline: "HEAVY INDUSTRIAL CANVAS WORKWEAR",
    shortDescription: "Rigid duck canvas work jacket with cropped waistband, metal zip closure, and satin inner lining.",
    fullDescription: "A statement piece built to endure decades. The V-01 Work Jacket features a boxy cropped stance, matte black hardware zip, chest welt pocket, and smooth quilted satin internal lining for contrast.",
    details: {
      material: "12 oz Heavyweight Cotton Duck Canvas // Satin Lining",
      fit: "Cropped Wide Stance Workwear",
      care: "Specialist clean only.",
      shipping: "Includes DRYFT garment bag & heavy-duty industrial hanger."
    },
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    sku: "DC-DROP01-005"
  },
  {
    id: "dc-006",
    slug: "discipline-graphic-tee-bone",
    name: "DISCIPLINE GRAPHIC TEE",
    category: "tees",
    price: 3699,
    isNew: true,
    isFeatured: false,
    isDropFeatured: false,
    tagline: "HIGH-DENSITY SCREENPRINT ON BONE SILHOUETTE",
    shortDescription: "Off-white bone tee featuring minimalist back manifesto typography in cracked gel ink.",
    fullDescription: "Engineered on off-white raw cotton canvas fabric, featuring screenprinted manifesto excerpts on the rear shoulder panel using rubberized cracked ink.",
    details: {
      material: "100% Unbleached Raw Cotton (420 GSM)",
      fit: "Boxy Drop-Shoulder Fit",
      care: "Cold wash inside out. Do not tumble dry.",
      shipping: "Dispatched within 24 hours."
    },
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    sku: "DC-DROP01-006"
  },
  {
    id: "dc-007",
    slug: "distressed-cult-zip-hoodie-raw-ash",
    name: "DISTRESSED ZIP HOODIE",
    category: "hoodies",
    price: 7499,
    originalPrice: 8499,
    isNew: false,
    isFeatured: true,
    isDropFeatured: false,
    tagline: "HAND-ABRADED HEAVY ZIP FLEECE",
    shortDescription: "Heavyweight full zip hoodie with vintage edge distress and two-way heavy alloy zipper.",
    fullDescription: "Constructed from 480 GSM ash gray fleece with hand-grinded cuffs and hem lines for controlled raw wear aesthetic. Features custom two-way slider zipper for styling versatility.",
    details: {
      material: "480 GSM Heavy Loopback Cotton Fleece",
      fit: "Relaxed Boxy Zip Silhouette",
      care: "Cold wash gentle cycle.",
      shipping: "Ships with tracked courier updates."
    },
    images: [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    sku: "DC-DROP01-007"
  },
  {
    id: "dc-008",
    slug: "raw-hem-canvas-pants-off-white",
    name: "RAW HEM CANVAS TROUSERS",
    category: "bottoms",
    price: 4999,
    isNew: false,
    isFeatured: false,
    isDropFeatured: false,
    tagline: "UNFINISHED FRINGED CANVAS BOTTOMS",
    shortDescription: "Straight wide-leg off-white trousers with intentional unfinished fringed hem line.",
    fullDescription: "Clean, linear trousers created from thick 350 GSM natural unbleached bull denim with custom silver shank buttons and raw fringed cuff finish.",
    details: {
      material: "350 GSM Natural Cotton Bull Denim",
      fit: "Straight Wide-Leg Cut",
      care: "Wash cold inside out.",
      shipping: "Free delivery across India."
    },
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    sku: "DC-DROP01-008"
  },
  {
    id: "dc-009",
    slug: "cult-balaclava-beanie-onyx",
    name: "CULT DUAL BALACLAVA BEANIE",
    category: "accessories",
    price: 1899,
    originalPrice: 2299,
    isNew: true,
    isFeatured: false,
    isDropFeatured: false,
    tagline: "CONVERTIBLE RIBBED BALACLAVA",
    shortDescription: "Multi-functional dense ribbed knit balaclava mask that converts into a fold-up beanie.",
    fullDescription: "Knit from 100% thick merino wool blend yarns. Can be worn pulled down as an urban face mask balaclava or rolled up twice into a heavy skull beanie.",
    details: {
      material: "70% Merino Wool, 30% Recycled Acrylic Knit",
      fit: "One Size // Stretch Form",
      care: "Hand wash only in cold water.",
      shipping: "Dispatched within 24 hours."
    },
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L"],
    inStock: true,
    sku: "DC-DROP01-009"
  },
  {
    id: "dc-010",
    slug: "embossed-leather-tote-onyx",
    name: "EMBOSSED LEATHER TOTE",
    category: "accessories",
    price: 5999,
    originalPrice: 7499,
    isNew: true,
    isFeatured: true,
    isDropFeatured: false,
    tagline: "HEAVY GRAIN COWHIDE MONOLITH TOTE",
    shortDescription: "Ultra-durable full grain black leather tote bag with blind embossed DRYFT CULT mark.",
    fullDescription: "A minimalist luxury everyday carrier built from 2.0mm thick full-grain black cowhide with suede interior lining, zip security pocket, and reinforced strap rivets.",
    details: {
      material: "100% Full-Grain Cowhide Leather // Suede Interior",
      fit: "Dimensions: 42cm x 38cm x 14cm",
      care: "Wipe clean with leather conditioner.",
      shipping: "Delivered in protective dustbag & box."
    },
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["M"],
    inStock: true,
    sku: "DC-DROP01-010"
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'ALL' },
  { id: 'tees', label: 'TEES' },
  { id: 'hoodies', label: 'HOODIES' },
  { id: 'bottoms', label: 'BOTTOMS' },
  { id: 'outerwear', label: 'OUTERWEAR' },
  { id: 'accessories', label: 'ACCESSORIES' }
] as const;
