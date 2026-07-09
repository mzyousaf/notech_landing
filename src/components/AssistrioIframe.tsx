"use client";

import { useEffect, useState } from "react";

const IFRAME_BASE =
  "https://app.assistrio.com/iframe/6a4f0ea979616981427be06b?accessKey=pk_0hy36HKYx2w9hjeaMv9m99L4nnawj3-b";

export default function AssistrioIframe() {
  const [src, setSrc] = useState(IFRAME_BASE);

  useEffect(() => {
    setSrc(
      `${IFRAME_BASE}&parentPageUrl=${encodeURIComponent(window.location.href)}`,
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
