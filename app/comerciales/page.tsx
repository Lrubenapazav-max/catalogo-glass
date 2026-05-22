import type { Metadata } from "next";
import { ComercialesApp } from "@/components/ComercialesApp";
import "./comerciales.css";

export const metadata: Metadata = {
  title: "Comerciales | FAVITEM",
  description:
    "Catálogo de vehículos comerciales: Toyota, Nissan, Mazda, Suzuki y más modelos en Bolivia.",
};

export default function ComercialesPage() {
  return <ComercialesApp />;
}
