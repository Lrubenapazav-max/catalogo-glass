"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { COMERCIALES_MODELS, searchComerciales } from "@/lib/comerciales";

const BRAND_COLORS: Record<string, string> = {
  Toyota: "#c62828",
  Nissan: "#1565c0",
  Mazda: "#6a1b9a",
  Suzuki: "#2e7d32",
  "King Long": "#e65100",
};

export function ComercialesApp() {
  const [search, setSearch] = useState("");

  const results = useMemo(() => searchComerciales(search), [search]);
  const showEmpty = search.trim().length > 0 && results.length === 0;

  return (
    <div className="com-page">
      <header className="com-header">
        <div className="com-header-inner container">
          <Link href="/" className="com-back">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Inicio
          </Link>
          <div className="com-logo" aria-label="Comerciales">
            <span className="com-logo-mark">C</span>
            <span className="com-logo-text">COMERCIALES</span>
          </div>
        </div>
      </header>

      <main className="com-main container">
        <section className="com-hero">
          <h1 className="com-hero-title">Catálogo comerciales</h1>
          <p className="com-hero-sub">
            Busca por marca, modelo o código — {COMERCIALES_MODELS.length} vehículos disponibles
          </p>

          <div className="com-search-wrap">
            <div className="com-search-box">
              <svg className="com-search-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="search"
                className="com-search-input"
                placeholder="Buscar modelo, marca o código..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoComplete="off"
              />
              {search && (
                <button
                  type="button"
                  className="com-search-clear"
                  aria-label="Limpiar búsqueda"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}
            </div>
            {search.trim() && (
              <p className="com-search-meta">
                {results.length} resultado{results.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>
        </section>

        <section className="com-grid-section" aria-label="Modelos comerciales">
          {showEmpty ? (
            <p className="com-empty">No se encontraron modelos para &ldquo;{search}&rdquo;</p>
          ) : (
            <ul className="com-grid">
              {results.map((model) => (
                <li key={model.id}>
                  <article className="com-card">
                    <div
                      className="com-card-accent"
                      style={{ background: BRAND_COLORS[model.brand] ?? "var(--accent)" }}
                      aria-hidden
                    />
                    <div className="com-card-body">
                      <span className="com-card-brand">{model.brand}</span>
                      <h2 className="com-card-name">{model.name}</h2>
                      {model.code && (
                        <span className="com-card-code">{model.code}</span>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
