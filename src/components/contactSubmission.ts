import type { FormEvent } from "react";

export function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const fields = [
    ["nombre", "Nombre"],
    ["apellido", "Apellido"],
    ["organizacion", "Organización"],
    ["cargo", "Cargo"],
    ["email", "Email"],
    ["telefono", "Teléfono"],
    ["solucion", "Solución de interés"],
    ["mensaje", "Mensaje"],
  ];
  const body = fields
    .map(([key, label]) => `${label}: ${data.get(key) || "—"}`)
    .join("\n");
  const subject = `Solicitud Hando - ${data.get("solucion") || "Contacto"}`;
  window.location.href = `mailto:felipe@hando.health?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
