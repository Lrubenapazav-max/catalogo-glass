"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  BRANDS,
  getBrandById,
  getProductsByBrand,
  searchProducts,
} from "@/lib/catalog";
import { CONFIG } from "@/lib/config";
import { whatsappUrl } from "@/lib/catalog";
import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";
import { ConsultModal } from "./ConsultModal";
import { FavitemLogo } from "./FavitemLogo";

export function CatalogoApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [brandId, setBrandId] = useState<string | null>(null);
  const [modelFilter, setModelFilter] = useState("all");
  const [consultProduct, setConsultProduct] = useState<Product | null>(null);

  const brand = brandId ? getBrandById(brandId) : null;
  const searchResults = useMemo(() => searchProducts(search), [search]);
  const brandProducts = useMemo(
    () => (brandId ? getProductsByBrand(brandId, modelFilter) : []),
    [brandId, modelFilter]
  );

  const showSearch = search.trim().length > 0;
  const showBrand = brandId && !showSearch;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("search-input")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goHome = useCallback(() => {
    setBrandId(null);
    setSearch("");
    setModelFilter("all");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openBrand = (id: string) => {
    setBrandId(id);
    setModelFilter("all");
    setSearch("");
    setTimeout(() => {
      document.getElementById("catalogo-marcas")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="page-bg" aria-hidden />
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="header-inner container">
          <button type="button" className="logo-sm" onClick={goHome}>
            <FavitemLogo variant="compact" className="logo-mark-img" />
          </button>
          <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
            <button type="button" className="nav-link" onClick={goHome}>
              Inicio
            </button>
            <button type="button" className="nav-link" onClick={() => scrollTo("marcas")}>
              Marcas
            </button>
            <Link href="/comerciales" className="nav-link" onClick={() => setMenuOpen(false)}>
              Comerciales
            </Link>
            <button type="button" className="nav-link" onClick={() => scrollTo("contacto")}>
              Contacto
            </button>
          </nav>
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`}
            aria-label="Menú"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main className="page-main">
        <section className="hero" id="inicio">
          <div className="hero-bg" aria-hidden />
          <div className="container hero-content">
            <div className="hero-logo">
              <FavitemLogo variant="hero" className="hero-logo-img" />
              <p className="hero-tagline">Vidrios laterales automotrices · Bolivia</p>
            </div>

            <div className="search-wrap">
              <div className="search-box">
                <svg className="search-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  id="search-input"
                  type="search"
                  className="search-input"
                  placeholder="Buscar marca, modelo o vidrio lateral..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    if (e.target.value) setBrandId(null);
                  }}
                  autoComplete="off"
                />
              </div>
              {showSearch && (
                <p className="search-meta">
                  {searchResults.length} resultado{searchResults.length !== 1 ? "s" : ""}
                </p>
              )}
            </div>

            <div className="hero-comerciales-wrap">
              <Link href="/comerciales" className="hero-comerciales-card">
                <div className="hero-comerciales-icon" aria-hidden>
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="14" width="28" height="18" rx="3" stroke="currentColor" strokeWidth="2.2" />
                    <path d="M32 20h8l4 6v6h-12V20z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                    <circle cx="14" cy="36" r="4" stroke="currentColor" strokeWidth="2.2" />
                    <circle cx="36" cy="36" r="4" stroke="currentColor" strokeWidth="2.2" />
                    <path d="M10 20V10h14v10" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="hero-comerciales-copy">
                  <span className="hero-comerciales-label">Categoría</span>
                  <span className="hero-comerciales-title">COMERCIALES</span>
                  <span className="hero-comerciales-sub">Ver catálogo de vehículos comerciales</span>
                </div>
                <span className="hero-comerciales-arrow" aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {showSearch && (
          <section className="section">
            <div className="container">
              <div className="section-head section-head--row">
                <h2>Resultados para &ldquo;{search}&rdquo;</h2>
                <button type="button" className="text-btn" onClick={() => setSearch("")}>
                  Limpiar búsqueda
                </button>
              </div>
              <div className="products-grid">
                {searchResults.length === 0 ? (
                  <p className="empty-state">No se encontraron productos.</p>
                ) : (
                  searchResults.map((p) => (
                    <ProductCard key={p.id} product={p} onConsult={setConsultProduct} />
                  ))
                )}
              </div>
            </div>
          </section>
        )}

        {showBrand && brand && (
          <section className="section" id="catalogo-marcas">
            <div className="container">
              <button type="button" className="back-btn" onClick={() => setBrandId(null)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Todas las marcas
              </button>
              <div className="brand-header">
                <div className="brand-header-icon">{brand.abbr}</div>
                <div>
                  <h2>{brand.name}</h2>
                  <p>Vidrios laterales izquierdo y derecho · Catálogo Bolivia</p>
                </div>
              </div>
              <div className="filters-row">
                <button
                  type="button"
                  className={`filter-chip ${modelFilter === "all" ? "filter-chip--active" : ""}`}
                  onClick={() => setModelFilter("all")}
                >
                  Todos
                </button>
                {brand.models.map((m) => (
                  <button
                    key={m}
                    type="button"
                    className={`filter-chip ${modelFilter === m ? "filter-chip--active" : ""}`}
                    onClick={() => setModelFilter(m)}
                  >
                    {m.replace(`${brand.name} `, "")}
                  </button>
                ))}
              </div>
              <div className="products-grid">
                {brandProducts.map((p) => (
                  <ProductCard key={p.id} product={p} onConsult={setConsultProduct} />
                ))}
              </div>
            </div>
          </section>
        )}

        {!showSearch && !showBrand && (
          <section className="section" id="marcas">
            <div className="container">
              <div className="section-head">
                <h2>Categorías por marca</h2>
                <p>Selecciona tu marca para ver modelos y vidrios laterales disponibles</p>
              </div>
              <div className="brands-grid">
                {BRANDS.map((b) => {
                  const modelCount = b.models.length;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      className="brand-card"
                      onClick={() => openBrand(b.id)}
                    >
                      <span className="brand-card-icon">{b.abbr}</span>
                      <span className="brand-card-name">{b.name}</span>
                      <span className="brand-card-count">{modelCount} modelos</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="section contact-section" id="contacto">
          <div className="container contact-card">
            <div className="contact-info">
              <h2>¿Necesitas ayuda?</h2>
              <p>Consulta disponibilidad, precios y envíos a todo Bolivia. Respuesta rápida por WhatsApp.</p>
              <a
                href={whatsappUrl(
                  `Hola ${CONFIG.businessName}, quisiera información sobre vidrios laterales automotrices en Bolivia.`
                )}
                className="btn btn-whatsapp btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </div>
            <div className="contact-features">
              <div className="feature"><span>✓</span> Stock actualizado</div>
              <div className="feature"><span>✓</span> Izquierdo y derecho</div>
              <div className="feature"><span>✓</span> Envíos nacionales</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <FavitemLogo variant="compact" onDark className="footer-logo-img" />
          <p>Vidrios laterales automotrices · Bolivia © {new Date().getFullYear()}</p>
        </div>
      </footer>

      <ConsultModal product={consultProduct} onClose={() => setConsultProduct(null)} />
    </>
  );
}
