"use client";

import { useEffect, useState } from "react";

import { ASSISTRIO_AGENT_ID } from "@/components/AssistrioChat";

const IFRAME_BASE = `https://app.assistrio.com/iframe/${ASSISTRIO_AGENT_ID}`;

export default function AssistrioIframe() {
  const [src, setSrc] = useState(IFRAME_BASE);

  useEffect(() => {
    setSrc(
      `${IFRAME_BASE}?parentPageUrl=${encodeURIComponent(window.location.href)}`,
    );
  }, []);

  return (
    <iframe
      src={src}
      style={{
        width: "100%",
        height: "650px",
        border: 0,
        borderRadius: "16px",
      }}
      allow="clipboard-write; microphone"
      title="Assistrio chat"
    />
  );
}
