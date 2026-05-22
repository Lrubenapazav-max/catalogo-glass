export type ComercialModel = {
  id: string;
  name: string;
  brand: string;
  code?: string;
};

export const COMERCIALES_MODELS: ComercialModel[] = [
  { id: "toyota-corolla-md90", name: "Toyota corolla MD90", brand: "Toyota", code: "MD90" },
  { id: "toyota-corolla-md92", name: "Toyota corolla MD92", brand: "Toyota", code: "MD92" },
  { id: "toyota-corolla-md81", name: "Toyota corolla MD81", brand: "Toyota", code: "MD81" },
  { id: "toyota-carina-md85", name: "Toyota carina MD85", brand: "Toyota", code: "MD85" },
  { id: "toyota-corona-md90", name: "Toyota corona MD90", brand: "Toyota", code: "MD90" },
  { id: "nissan-homy", name: "Nissan homy", brand: "Nissan" },
  { id: "king-long", name: "King long", brand: "King Long" },
  { id: "toyota-lobo", name: "Toyota lobo", brand: "Toyota" },
  { id: "toyota-cuadrado", name: "Toyota cuadrado", brand: "Toyota" },
  { id: "nissan-chancho", name: "Nissan chancho", brand: "Nissan" },
  { id: "nissan-condor-ud-mk", name: "Nissan condor UD MK", brand: "Nissan", code: "UD MK" },
  { id: "nissan-condor-ud-md2015", name: "Nissan condor UD MD2015", brand: "Nissan", code: "MD2015" },
  { id: "nissan-condor-ud-cm", name: "Nissan condor UD CM", brand: "Nissan", code: "UD CM" },
  { id: "land-cruiser-005", name: "Land cruiser 005", brand: "Toyota", code: "005" },
  { id: "land-cruiser-004", name: "Land cruiser 004", brand: "Toyota", code: "004" },
  { id: "mazda-e2000", name: "Mazda e2000", brand: "Mazda", code: "E2000" },
  { id: "mazda-bongo", name: "Mazda bongo", brand: "Mazda" },
  { id: "suzuki-carry", name: "Suzuki carry", brand: "Suzuki" },
];

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function searchComerciales(query: string): ComercialModel[] {
  const q = normalize(query.trim());
  if (!q) return COMERCIALES_MODELS;

  return COMERCIALES_MODELS.filter((m) => {
    const haystack = normalize(`${m.name} ${m.brand} ${m.code ?? ""}`);
    return haystack.includes(q);
  });
}
