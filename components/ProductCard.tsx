"use client";

import Image from "next/image";
import type { Product } from "@/lib/types";
import { formatPrice, formatStock, productMessage, whatsappUrl } from "@/lib/catalog";

interface ProductCardProps {
  product: Product;
  onConsult: (product: Product) => void;
}

export function ProductCard({ product, onConsult }: ProductCardProps) {
  const stock = formatStock(product.stock);
  const price = formatPrice(product.price);
  const sideLabel = product.side === "izquierdo" ? "Lado izquierdo" : "Lado derecho";

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image
          src={product.image}
          alt={`Vidrio lateral ${product.model} — ${sideLabel}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="product-image"
        />
        <span className={`product-badge product-badge--${product.side}`}>{sideLabel}</span>
      </div>
      <div className="product-body">
        <span className="product-brand">{product.brandName}</span>
        <h3 className="product-name">{product.model}</h3>
        <div className={`product-stock product-stock--${stock.variant}`}>
          <span className="product-stock-dot" aria-hidden />
          {stock.text}
        </div>
        {price ? (
          <p className="product-price">{price}</p>
        ) : (
          <p className="product-price product-price--muted">Precio a consultar</p>
        )}
        <div className="product-actions">
          <a
            href={whatsappUrl(productMessage(product))}
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <button type="button" className="btn btn-outline" onClick={() => onConsult(product)}>
            Consultar
          </button>
        </div>
      </div>
    </article>
  );
}
