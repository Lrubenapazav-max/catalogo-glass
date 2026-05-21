import { CONFIG, GLASS_IMAGES } from "./config";
import type { Brand, Product, Side, StockInfo } from "./types";

export const BRANDS: Brand[] = [
  { id: "toyota", name: "Toyota", abbr: "TOY", models: ["Toyota Spacio", "Toyota Noah", "Toyota Ipsum", "Toyota Hiace", "Toyota Minibus cuadrado", "Toyota Corolla", "Toyota Hilux", "Toyota Yaris", "Toyota RAV4", "Toyota Land Cruiser", "Toyota Fortuner", "Toyota Avanza"] },
  { id: "suzuki", name: "Suzuki", abbr: "SUZ", models: ["Suzuki Grand Vitara", "Suzuki Alto", "Suzuki Swift", "Suzuki Jimny", "Suzuki Vitara", "Suzuki Ertiga", "Suzuki Baleno"] },
  { id: "nissan", name: "Nissan", abbr: "NIS", models: ["Nissan X-Trail", "Nissan Frontier", "Nissan Versa", "Nissan March", "Nissan Tiida", "Nissan Pathfinder", "Nissan Sentra", "Nissan NP300"] },
  { id: "hyundai", name: "Hyundai", abbr: "HYU", models: ["Hyundai Tucson", "Hyundai Accent", "Hyundai Elantra", "Hyundai Santa Fe", "Hyundai H1", "Hyundai Creta", "Hyundai i10", "Hyundai Porter"] },
  { id: "kia", name: "Kia", abbr: "KIA", models: ["Kia Sportage", "Kia Rio", "Kia Sorento", "Kia Cerato", "Kia Picanto", "Kia Carnival", "Kia Soul"] },
  { id: "chevrolet", name: "Chevrolet", abbr: "CHE", models: ["Chevrolet Spark", "Chevrolet Aveo", "Chevrolet Cruze", "Chevrolet Captiva", "Chevrolet Tracker", "Chevrolet Sail", "Chevrolet D-Max", "Chevrolet N300"] },
  { id: "ford", name: "Ford", abbr: "FOR", models: ["Ford Ranger", "Ford Explorer", "Ford EcoSport", "Ford Fiesta", "Ford Focus", "Ford F-150", "Ford Escape", "Ford Ka"] },
  { id: "mazda", name: "Mazda", abbr: "MAZ", models: ["Mazda 3", "Mazda 6", "Mazda CX-5", "Mazda CX-3", "Mazda BT-50", "Mazda 2"] },
  { id: "mitsubishi", name: "Mitsubishi", abbr: "MIT", models: ["Mitsubishi L200", "Mitsubishi Montero", "Mitsubishi Outlander", "Mitsubishi ASX", "Mitsubishi Lancer", "Mitsubishi Pajero", "Mitsubishi Canter"] },
  { id: "honda", name: "Honda", abbr: "HON", models: ["Honda Civic", "Honda CR-V", "Honda Fit", "Honda HR-V", "Honda City", "Honda Pilot", "Honda Accord"] },
  { id: "jeep", name: "Jeep", abbr: "JEE", models: ["Jeep Wrangler", "Jeep Cherokee", "Jeep Compass", "Jeep Renegade", "Jeep Grand Cherokee"] },
  { id: "volkswagen", name: "Volkswagen", abbr: "VW", models: ["Volkswagen Gol", "Volkswagen Polo", "Volkswagen Jetta", "Volkswagen Tiguan", "Volkswagen Amarok", "Volkswagen Vento"] },
  { id: "audi", name: "Audi", abbr: "AUD", models: ["Audi A3", "Audi A4", "Audi Q5", "Audi Q3", "Audi A6"] },
  { id: "bmw", name: "BMW", abbr: "BMW", models: ["BMW Serie 3", "BMW X1", "BMW X3", "BMW Serie 5", "BMW X5"] },
  { id: "mercedes", name: "Mercedes Benz", abbr: "MB", models: ["Mercedes Clase C", "Mercedes Clase E", "Mercedes GLA", "Mercedes Sprinter", "Mercedes Vito"] },
  { id: "volvo", name: "Volvo", abbr: "VOL", models: ["Volvo XC60", "Volvo XC90", "Volvo S60", "Volvo FH camión"] },
  { id: "peugeot", name: "Peugeot", abbr: "PEU", models: ["Peugeot 206", "Peugeot 207", "Peugeot 308", "Peugeot Partner", "Peugeot 3008"] },
  { id: "renault", name: "Renault", abbr: "REN", models: ["Renault Logan", "Renault Sandero", "Renault Duster", "Renault Kangoo", "Renault Koleos", "Renault Master"] },
  { id: "changan", name: "Changan", abbr: "CHA", models: ["Changan CS35", "Changan CS55", "Changan Alsvin", "Changan Honor", "Changan Star Truck"] },
  { id: "kinglong", name: "King Long", abbr: "KL", models: ["King Long Minibús", "King Long Coaster", "King Long Urbano"] },
  { id: "higer", name: "Higer", abbr: "HIG", models: ["Higer Minibús", "Higer Bus urbano", "Higer KLQ"] },
  { id: "foton", name: "Foton", abbr: "FOT", models: ["Foton Tunland", "Foton View", "Foton Aumark", "Foton Gratour"] },
  { id: "jac", name: "JAC", abbr: "JAC", models: ["JAC S2", "JAC S3", "JAC T6", "JAC Sunray", "JAC Refine"] },
  { id: "byd", name: "BYD", abbr: "BYD", models: ["BYD Dolphin", "BYD Yuan Plus", "BYD Song Plus", "BYD Han"] },
  { id: "geely", name: "Geely", abbr: "GEE", models: ["Geely Coolray", "Geely Azkarra", "Geely Emgrand", "Geely CK"] },
  { id: "greatwall", name: "Great Wall", abbr: "GW", models: ["Great Wall Wingle", "Great Wall Hover", "Great Wall Poer", "Great Wall Voleex"] },
  { id: "chery", name: "Chery", abbr: "CHR", models: ["Chery Tiggo 2", "Chery Tiggo 4", "Chery Tiggo 7", "Chery QQ", "Chery Arrizo 5"] },
  { id: "subaru", name: "Subaru", abbr: "SUB", models: ["Subaru Forester", "Subaru Impreza", "Subaru XV", "Subaru Outback"] },
  { id: "isuzu", name: "Isuzu", abbr: "ISU", models: ["Isuzu D-Max", "Isuzu NPR", "Isuzu Trooper", "Isuzu MUX"] },
  { id: "daihatsu", name: "Daihatsu", abbr: "DAI", models: ["Daihatsu Terios", "Daihatsu Sirion", "Daihatsu Feroza"] },
  { id: "ssangyong", name: "SsangYong", abbr: "SSY", models: ["SsangYong Actyon", "SsangYong Korando", "SsangYong Rexton"] },
  { id: "dfsk", name: "DFSK", abbr: "DFS", models: ["DFSK Glory 580", "DFSK Serie K", "DFSK Fengon 5"] },
  { id: "otras", name: "Otras marcas", abbr: "···", models: ["Vidrio lateral universal sedán", "Vidrio lateral universal SUV", "Vidrio lateral minibús genérico"] },
];

function hashCode(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return Math.abs(h);
}

function stockFor(id: string) {
  const n = hashCode(id) % 11;
  if (n === 0) return 0;
  if (n <= 2) return 1;
  if (n <= 5) return 2 + (n % 3);
  return 3 + (n % 6);
}

function priceFor(id: string): number | null {
  const n = hashCode(id + "price") % 5;
  if (n === 0) return null;
  return 180 + (hashCode(id) % 420);
}

function buildProducts(): Product[] {
  const products: Product[] = [];
  let imgIdx = 0;

  for (const brand of BRANDS) {
    for (const model of brand.models) {
      for (const side of ["izquierdo", "derecho"] as Side[]) {
        const id = `${brand.id}-${model.replace(/\s+/g, "-").toLowerCase()}-${side}`;
        products.push({
          id,
          brandId: brand.id,
          brandName: brand.name,
          model,
          side,
          stock: stockFor(id),
          price: priceFor(id),
          image: GLASS_IMAGES[imgIdx % GLASS_IMAGES.length],
        });
        imgIdx++;
      }
    }
  }
  return products;
}

export const PRODUCTS = buildProducts();

export function getBrandById(id: string) {
  return BRANDS.find((b) => b.id === id);
}

export function getProductsByBrand(brandId: string, modelFilter = "all") {
  let list = PRODUCTS.filter((p) => p.brandId === brandId);
  if (modelFilter !== "all") list = list.filter((p) => p.model === modelFilter);
  return list;
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return PRODUCTS.filter(
    (p) =>
      p.model.toLowerCase().includes(q) ||
      p.brandName.toLowerCase().includes(q) ||
      p.side.includes(q) ||
      q.includes("vidrio") ||
      q.includes("lateral") ||
      q.includes("cristal")
  );
}

export function formatStock(stock: number): StockInfo {
  if (stock === 0) return { text: "Agotado", variant: "out" };
  if (stock === 1) return { text: `Disponible: ${stock} unidad`, variant: "low" };
  return { text: `Disponible: ${stock} unidades`, variant: "ok" };
}

export function formatPrice(price: number | null) {
  if (price == null) return null;
  return `${CONFIG.currency} ${price.toLocaleString("es-BO")}`;
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productMessage(p: Product) {
  const side = p.side === "izquierdo" ? "izquierdo" : "derecho";
  const price = formatPrice(p.price);
  const stock = formatStock(p.stock);
  return `Hola ${CONFIG.businessName}, consulto por vidrio lateral ${side} para ${p.model}. ${p.stock > 0 ? `Vi ${stock.text}.` : "¿Tienen disponible?"}${price ? ` Precio ref: ${price}.` : ""}`;
}

export function catalogStats() {
  const models = new Set(PRODUCTS.map((p) => p.model)).size;
  const inStock = PRODUCTS.filter((p) => p.stock > 0).length;
  return { brands: BRANDS.length, models, inStock };
}
