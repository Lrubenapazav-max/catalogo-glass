"use client";

import { useEffect, useRef } from "react";
import type { Product } from "@/lib/types";
import { productMessage, whatsappUrl } from "@/lib/catalog";

interface ConsultModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ConsultModal({ product, onClose }: ConsultModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (product) {
      dialog.showModal();
      if (messageRef.current) {
        const side = product.side === "izquierdo" ? "izquierdo" : "derecho";
        messageRef.current.value = `Hola, necesito vidrio lateral ${side} para ${product.model}. ¿Está disponible?`;
      }
    } else {
      dialog.close();
    }
  }, [product]);

  if (!product) return <dialog ref={dialogRef} className="modal" />;

  const side = product.side === "izquierdo" ? "izquierdo" : "derecho";

  const handleSend = () => {
    const msg = messageRef.current?.value.trim() || productMessage(product);
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <dialog ref={dialogRef} className="modal" onClose={onClose}>
      <div className="modal-box">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>
        <h3>Consultar producto</h3>
        <p className="modal-product">
          {product.model} — Lado {side}
        </p>
        <label htmlFor="consult-message">Tu mensaje</label>
        <textarea id="consult-message" ref={messageRef} rows={4} />
        <div className="modal-actions">
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancelar
          </button>
          <button type="button" className="btn btn-primary" onClick={handleSend}>
            Enviar consulta
          </button>
        </div>
      </div>
    </dialog>
  );
}
